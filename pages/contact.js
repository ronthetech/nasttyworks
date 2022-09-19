import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Contact() {
	return (
		<>
			<h1>Send Me A Message</h1>
			<h1 className={styles.hidden} aria-label='Nastty Works Contact Form'>
				Contact <Link href='/'>Nastty Works!</Link>
			</h1>
			<form className={styles.form}>
				<label htmlFor='name' aria-label='name'>
					Name
				</label>
				<input type='text' id='name' name='name' aria-labelledby='name' />

				<label htmlFor='email' aria-label='email'>
					Email Address
				</label>
				<input type='email' name='email' id='email' aria-labelledby='email' required />

				<label htmlFor='phone' aria-label='phone'>
					Phone Number
				</label>
				<input type='tel' name='phone' id='phone' aria-labelledby='phone' required />

				<label htmlFor='message' aria-label='message'>
					Message To Describe Service You Need
				</label>
				<input type='text' rows={4} cols={5} name='message' id='message' aria-labelledby='message' required />

				<button className={styles.button}>Submit</button>
			</form>
			<p className={styles.description}>
				Send us an email <a href='mailto:nasttyworks@gmail.com/'>directly here!</a>
			</p>

			<Link href='/services'>
				<button className={styles.button}>see my projects</button>
			</Link>
		</>
	);
}
