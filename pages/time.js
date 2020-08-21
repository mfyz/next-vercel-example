import Head from 'next/head'
import axios from 'axios'

import Layout from '../components/layout'

export async function getStaticProps() {
	const res = await axios.get(`http://worldtimeapi.org/api/timezone/America/New_York`)
	console.log('---> get time (worldtimeapi) called')
	// console.log(res)
	return {
		props: {
			time: res.data.datetime
		}
	}
}

const Time = (props) => {
	return (
		<Layout>
			<h1>Time</h1>
			<p>(gets refreshed from server in every page visit)</p>
			<pre>
				{JSON.stringify(props.time, null, 4)}
			</pre>
		</Layout>
	)
}

export default Time