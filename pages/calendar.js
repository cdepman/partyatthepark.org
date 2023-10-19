import Script from "next/script";
import Head from "next/head";

export default function Calendar() {
  return (
    <div>
      <Head>
        <title>Calendar</title>
      </Head>
      <div className="elfsight-app-cb642b36-2054-45e7-86c7-959b22432981"></div>
      <Script
        id="calendar"
        src="https://static.elfsight.com/platform/platform.js"
        strategy="onLazyLoad"
        onLoad={() =>
          console.log(
            `script loaded correctly, window. calendar has been populated`
          )
        }
      />
    </div>
  );
}
