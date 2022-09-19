import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<div className={styles.landing}>
				<h1>Nastty Works</h1>
				<h2></h2>

				{/* <Image className={styles.img} alt='' src={profileImg} height={400} width={350} /> */}
			</div>

			<div className={styles.section}>
				<h2></h2>
				<div className={styles.container_text}>
					<p></p>
					<Link href='/'>
						<button className={styles.button}></button>
					</Link>
				</div>
			</div>

			{/* <div className={styles.grid}>
					<a href='' className={styles.card}>
						<h2></h2>
						<p></p>
					</a>

					<a href='' className={styles.card}>
						<h2></h2>
						<p></p>
					</a>
				</div> */}
		</>
	);
}

