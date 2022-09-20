import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

export default function Media() {
	return (
		<>
			<h1 className={styles.title} aria-label='Nastty Works Media'>
				<span className={styles.logo}>Nastty Works</span> Media
			</h1>
			<div id='main-content' className={styles.container_text}>
				<p>When we&apos;re not under the hood or jacking up a car, here&apos;s where you can find us!</p>
			</div>
			<div className={styles.grid}>
				<div className={styles.card}>
					<p>When we&apos;re not under the hood or jacking up a car, here&apos;s where you can find us!</p>
				</div>

				<div className={styles.card}>
					<h2>
						Follow our service page on{" "}
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
			<Button link='/services' text='see services' />
			<Button link='/contact' text='contact us' />
		</>
	);
}
