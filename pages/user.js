import Head from 'next/head'
import axios from 'axios'

import Layout from '../components/layout'

export async function getStaticProps() {
	const res = await axios.get(`http://localhost:3000/api/get-user`)
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