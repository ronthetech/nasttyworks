import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Services() {
	return (
		<>
			<h1 className={styles.title + " " + styles.logo} aria-label='Nastty Works Services'>
				<Link href='/'>Nastty Works</Link> Services
			</h1>

			<div className={styles.grid}>
				{/* <div className={styles.card}>
					<a href='' target='_blank' rel='noopener noreferrer'>
						<h2></h2>
						 <Image src={pokedexApp} alt='' /> 
					</a>
					<p></p>
					<button className={styles.button}>
						<a href='' target='_blank' rel='noopener noreferrer'></a>
					</button>
				</div>

				<a href='' className={styles.card} target='_blank' rel='noopener noreferrer'>
					<h2></h2>
					<p></p>
				</a> */}

				<div className={styles.card}>
					<h2>BRAKE JOBS</h2>
					<p></p>
				</div>

				<div className={styles.card}>
					<h2>CAMBER ADJUSTMENT</h2>
					<p></p>
				</div>

				<div className={styles.card}>
					<h2>COILOVERS</h2>
					<p></p>
				</div>

				<div className={styles.card}>
					<h2>CONTROL ARMS</h2>
					<p></p>
				</div>

				<div className={styles.card}>
					<h2>TIE RODS</h2>
					<p></p>
				</div>

				<div className={styles.card}>
					<h2>SERPENTINE BELTS</h2>
					<p></p>
				</div>

				<div className={styles.card}>
					<h2>MOTOR MOUNTS</h2>
					<p></p>
				</div>

				<div className={styles.card}>
					<h2>FENDER ROLLING</h2>
					<p></p>
				</div>

				<div className={styles.card}>
					<h2>FULL ADJUSTMENT</h2>
					<p></p>
				</div>

				<div className={styles.card}>
					<h2>AND MORE!</h2>
					<p></p>
				</div>
			</div>
			<div className={styles.container_text}>
				<p className={styles.description}>
					These are some of the services we provide. Head to the <Link href='/contact'>Contact Page</Link> and send us a message, or give us a call if you have a
					problem that isn&apos;t listed above!
				</p>
			</div>
			<Link href='/contact'>
				<button className={styles.button}>get in contact</button>
			</Link>
			<Link href='/media'>
				<button className={styles.button}>stay in the loop</button>
			</Link>
		</>
	);
}
