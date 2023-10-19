import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function FirstPost() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Principles</title>
      </Head>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h1>Our Principles</h1>
      <ol>
        <li>Welcome to all</li>
        <ul>
          <li>
            Party at the Park is open to people with bodies and minds of all
            shapes and dimensions. This is an inclusive event that welcomes
            anyone to dance and enjoy the park.
          </li>
        </ul>
        <li>Leave it better</li>
        <ul>
          <li>
            Respect the land and the environment. Leave the place we were
            blessed to dance at nicer than we found it - that means any rubbish
            or mess that was there also gets picked before we leave.
          </li>
        </ul>
        <li>Give back</li>
        <ul>
          <li>
            We donate 50% of all ticket proceeds directly to the park so that we
            support the services and efforts that go into preserve this precious
            green space.
          </li>
        </ul>
        <li>Lead with kindness</li>
        <ul>
          <li>
            Assume positive intent and lead with curiosity over assumptions.
          </li>
        </ul>
      </ol>
    </div>
  );
}
