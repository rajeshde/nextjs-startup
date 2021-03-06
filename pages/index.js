import Head from "next/head";

import styles from "../styles/Home.module.css";
import TodoList from "../app/components/TodoList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo list App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TodoList />
      </main>
    </div>
  );
}
