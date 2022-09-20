import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Button:(props) {
	return (
		<Link href={props.link}>
			<button className={styles.button}>{props.text}</button>
		</Link>
	);
}
