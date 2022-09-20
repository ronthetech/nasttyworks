import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Media() {
	return (
		<>
			<h1 className={styles.title + " " + styles.logo} aria-label='Nastty Works Media'>
				<Link href='/'>Nastty Works</Link> Media
			</h1>
			<div className={styles.container_text}>
				<p>
					When we&apos;re not under the hood or jacking up a car, heres where you can find us!
					<span style={{ color: "yellowgreen" }}> Stay in the Loop</span>
				</p>
			</div>
			<div className={styles.grid}>
				<div className={styles.card}>
					<p>
						When we&apos;re not under the hood or jacking up a car, heres where you can find us!
						<span style={{ color: "yellowgreen" }}> Stay in the Loop</span>
					</p>
				</div>

				<div className={styles.card}>
					<h2>
						Follow us on{" "}
						<a href='https://www.instagram.com/nasttyworks_/' target='_blank' rel='noopener noreferrer'>
							<span style={{ color: "yellowgreen" }}> Instagram</span>
						</a>
					</h2>
				</div>

				<div className={styles.card}></div>
				{/* <a href='' className={styles.card} target='_blank' rel='noopener noreferrer'>
					<h2></h2>
					<p></p>
				</a>

				<a href='' className={styles.card} target='_blank' rel='noopener noreferrer'>
					<h2></h2>
					<p></p>
				</a> */}
			</div>
			<Link href='/contact'>
				<button className={styles.button}>get in contact</button>
			</Link>
			<Link href='/services'>
				<button className={styles.button}>see our services</button>
			</Link>
		</>
	);
}
