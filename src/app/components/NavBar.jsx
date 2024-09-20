"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <Link href="/create" className={styles.link}>
        Create a Book
      </Link>
    </nav>
  );
}
