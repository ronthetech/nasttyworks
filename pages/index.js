import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<div className={styles.landing}>
				<h1 className={styles.logo}>Nastty Works</h1>

				{/* <Image className={styles.img} alt='' src={profileImg} height={400} width={350} /> */}
			</div>

			<div className={styles.container}>
				<Link href='/services'>
					<button className={styles.button}>see our services</button>
				</Link>
				<Link href='/contact'>
					<button className={styles.button}>get in contact</button>
				</Link>
				<Link href='/media'>
					<button className={styles.button}>stay in the loop</button>
				</Link>
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

