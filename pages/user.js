import Head from 'next/head'
import axios from 'axios'

import Layout from '../components/layout'

export async function getServerSideProps() {
	const baseUrl = process.env.VERCEL_URL || 'http://localhost:3000'
	const res = await axios.get(`${baseUrl}/api/get-user`)
	console.log('---> get user called')
	// console.log(res)
	return {
		props: {
			user: res.data
		}
	}
}

const User = (props) => (
	<Layout>
		<Head>
        	<title>User page title</title>
		</Head>
		<h1>User</h1>
		<p>Called once in page load</p>
		<pre>
			{JSON.stringify(props.user, null, 4)}
		</pre>
	</Layout>
)

export default User