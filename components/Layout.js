import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from "../styles/Home.module.css";
import Button from "./Button";

const Layout = ({ children }) => {
	return (
		<div>
			{/* <div className={styles.container}> */}
			<Head>
				<title>Nastty Works</title>
				<meta name='description' content='Nastty Works' />
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>
			<a className={styles.skip} href='#main-content'>
				Skip To Main Content
			</a>
			<Navbar />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
