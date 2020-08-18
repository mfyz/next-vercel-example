import Head from 'next/head'
import axios from 'axios'

import Layout from '../components/layout'

export async function getStaticProps() {
	const baseUrl = process.env.VERCEL_URL || 'http://localhost:3000'
	const res = await axios.get(`${baseUrl}/api/get-time`)
	console.log('---> get time called')
	// console.log(res)
	return {
		props: {
			time: res.data
		}
	}
}

const User = (props) => (
	<Layout>
		<h1>Time</h1>
		<p>(gets refreshed from server in every page visit)</p>
		<pre>
			{JSON.stringify(props.time, null, 4)}
		</pre>
	</Layout>
)

export default User