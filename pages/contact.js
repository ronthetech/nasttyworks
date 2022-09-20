import Link from "next/link";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

export default function Contact() {
	return (
		<>
			<h1>Send Us A Message</h1>
			<h1 className={styles.hidden} aria-label='Nastty Works Contact Form'>
				<Link href='/'>Nastty Works</Link> Contact Form
			</h1>
			<form id='main-content' className={styles.form}>
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
				<input type='text' name='message' id='message' aria-labelledby='message' required />

				<button className={styles.button}>Submit</button>
			</form>
			<div className={styles.container_text}>
				<p className={styles.description}>
					Send us an <a href='mailto:nasttyworks@gmail.com/'>email directly here!</a>
				</p>
			</div>

			<Button link='/services' text='see services' />
			<Button link='/media' text='stay in the loop' />
		</>
	);
}
