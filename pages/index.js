import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Party at the Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Image
            src="/images/partyatthepark.jpeg" // Route of the image file
            height={300} // Desired size with correct aspect ratio
            width={400} // Desired size with correct aspect ratio
            alt="party at the park"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <h1 className={styles.title}>
          Welcome to{" "}
          <span style={{ color: "#009aff", textDecoration: "underline" }}>
            Party at the Park
          </span>
        </h1>
        <h2 className={styles.description}>
          An inclusive silent disco party that benefits the park.
        </h2>

        <div className={styles.grid}>
          <Link className={styles.card} href="/principles">
            <h1>Our Principles</h1>
          </Link>

          <Link className={styles.card} href="/about-us">
            <h1>About Us</h1>
          </Link>

          <Link
            className={styles.card}
            href="https://widget-cb642b36205445e786c7959b22432981.elfsig.ht"
          >
            <h1>Schedule</h1>
          </Link>
        </div>
      </main>

      <footer>
        <p>made with love in nyc 🫶</p>
      </footer>

      <style jsx>{`
        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
