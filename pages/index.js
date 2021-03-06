import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Henri Chapron EV</title>
        <meta
          name="description"
          content="Taking classic into the 21st Century. Coming soon."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={"/logo.png"} height={200} width={400} />
      </main>
    </div>
  );
}
