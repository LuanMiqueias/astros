import React from "react";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.css";
import Head from "next/head";

export default function Login() {
  return (
    <div className="login">
      <Head>
        <title>Astros | Login</title>
      </Head>
      <Header />
      <div className={`content ${styles.loginContent}`}></div>
    </div>
  );
}
