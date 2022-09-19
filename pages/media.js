import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Media() {
	return (
		<>
			<h1>More About Me</h1>
			<div className={styles.grid}>
				<div className={styles.card}>
					<a href='' target='_blank' rel='noopener noreferrer'>
						<h2></h2>
					</a>
					<p>
						<span style={{ color: "gold" }}> Gold</span>
					</p>
				</div>

				<div className={styles.card}>
					<a href='' target='_blank' rel='noopener noreferrer'>
						<h2></h2>
						{/* <Image src={pokedexApp} alt='' /> */}
					</a>
					<p></p>
				</div>

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
				<button className={styles.button}>see my projects</button>
			</Link>
		</>
	);
}
