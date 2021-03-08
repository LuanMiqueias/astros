// import styles from "../styles/components/Header.module.css";
import React from "react";
import styles from "../styles/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="content">
        <img src="./logo_astros.svg" alt="" />
        <nav>
          <a href="/">
            Nome usuario
            <img src="./icons/user.svg" alt="" />
          </a>
        </nav>
      </div>
    </header>
  );
}
