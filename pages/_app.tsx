import type { AppProps } from "next/app";
import Head from "next/head";

import "@fontsource/lexend";
import "@fontsource/ia-writer-quattro";

import "../styles/main.css";

// Check that PostHog is client-side (used to handle Next.js SSR)
// if (typeof window !== "undefined") {
//   posthog.init("phc_Ud6pwqtRXUUeeC5zAjDoPZ7MYE41EdRWPMY2gdni1Yt", {
//     api_host: "https://app.posthog.com" || "https://us.i.posthog.com",
//     person_profiles: "identified_only",
//     // Enable debug mode in development
//     loaded: (posthog) => {
//       if (process.env.NODE_ENV === "development") posthog.debug();
//     },
//   });
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
