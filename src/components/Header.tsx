// import styles from "../styles/components/Header.module.css";
import React from "react";
import Link from "next/link";
import styles from "../styles/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="content">
        <Link href="/">
          <img src="./logo_astros.svg" alt="" />
        </Link>
        <nav>
          <Link href="/login">
            Login
            {/* <img src="./icons/user.svg" alt="" /> */}
          </Link>
        </nav>
      </div>
    </header>
  );
}
