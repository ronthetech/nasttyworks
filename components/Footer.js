import Image from "next/image";

import instagramLogo from "../public/instagram.svg";

import styles from "../styles/Home.module.css";

export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<ul>
					<li>
						<a href='https://github.com/ronthetech' target='_blank' rel='noopener noreferrer'>
							<Image alt='NasttyWorks Instagram' src={instagramLogo} />
						</a>
					</li>
				</ul>
				{/* <a href='' target='_blank' rel='noopener noreferrer'>
					Powered by RON
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a> */}
			</footer>
		</>
	);
}
