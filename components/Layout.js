import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Nastty Works</title>
				<meta name='description' content='Nastty Works' />
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>

			<Navbar />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
