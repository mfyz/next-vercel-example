import React from 'react'
import Head from 'next/head'
import axios from 'axios'

import Layout from '../components/layout'

export default class User extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			user: null
		}
	}

	componentDidMount() {
		this.getUser()
	}

	getUser() {
		const baseUrl = process.env.VERCEL_URL || 'http://localhost:3000'
		const res = axios.get(`${baseUrl}/api/get-user`)
			.then((res) => {
				setTimeout(() => {
					this.setState({
						loading: false,
						user: res.data
					})
				}, 500);
			})
	}

	render() {
		const { loading, user } = this.state

		return (
			<Layout>
				<Head>
					<title>User page title</title>
				</Head>
				<h1>User</h1>
				
				{loading && (
					<div>Loading</div>
				)}
				{!loading && (
					<pre>
						{JSON.stringify(user, null, 4)}
					</pre>
				)}
			</Layout>
		)
	}
}
