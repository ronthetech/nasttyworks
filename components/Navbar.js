import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<Link href='/'>
				<a>
					<h3 className={styles.logo}>Nastty Works</h3>
				</a>
			</Link>
			<ul>
				<li>
					<Link href='/media'>
						<a>Media</a>
					</Link>
				</li>
				<li>
					<Link href='/services'>
						<a>Services</a>
					</Link>
				</li>
				<li>
					<Link href='/shop'>
						<a>Shop</a>
					</Link>
				</li>
				<li>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
