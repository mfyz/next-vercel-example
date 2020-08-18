import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
	const router = useRouter()
	return (
		<div className="header">
			<h1>Site</h1>
			<ul>
				<li className={(router.pathname == '/' ? 'active' : '')}>
					<Link href="/"><span>Home</span></Link>
				</li>
				<li className={(router.pathname == '/about' ? 'active' : '')}>
					<Link href="/about"><span>About</span></Link>
				</li>
				<li className={(router.pathname == '/user' ? 'active' : '')}>
					<Link href="/user"><span>User</span></Link>
				</li>
				<li className={(router.pathname == '/time' ? 'active' : '')}>
					<Link href="/time"><span>Time</span></Link>
				</li>
			</ul>
		</div>
	)
}

export default Header