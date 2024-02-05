"use client";

import Image from "next/image";
import Head from "next/head";
import "./styles/globals.css";
import Header from "./components/Header";
import Main from "./components/main";

export default function Home() {
  return (
    <section className="main">
      <Head>
        <title>Beans Staking</title>
      </Head>
      <Header />
      <Main />
      <h1>Heyyy</h1>
    </section>
  );
}
