import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<Link href='/'>
				<a>
					<h3>Nastty Works</h3>
				</a>
			</Link>
			<ul>
				<li>
					<Link href='/media'>Media</Link>
				</li>
				<li>
					<Link href='/services'>Services</Link>
				</li>
				<li>
					<Link href='/shop'>Shop</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
