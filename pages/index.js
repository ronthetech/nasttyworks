import Link from "next/link";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<div className={styles.landing}>
				<h1 className={styles.logo}>Nastty Works</h1>

				{/* <Image className={styles.img} alt='' src={profileImg} height={400} width={350} /> */}
			</div>

			<div id='main-content' className={styles.container}>
				<Button link='/services' text='see services' />
				<Button link='/contact' text='contact us' />
				<Button link='/media' text='stay in the loop' />
			</div>

			{/* <div className={styles.section}>
				<h2></h2>
				<div className={styles.container_text}>
					<p></p>
				</div>
			</div> */}

			{/* <div className={styles.grid}>
					<a href='' className={styles.card}>
						<h2></h2>
						<p></p>
					</a>
				</div> */}
		</>
	);
}

