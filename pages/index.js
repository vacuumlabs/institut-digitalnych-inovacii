import Head from "next/head";

import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Activities from "../components/Activities";
import Members from "../components/Members";
import Goals from "../components/Goals";
import Hero from "../components/Hero";
import Board from "../components/Board";
import Footer from "../components/Footer";
import { meta } from "../data/meta";

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#328BF2" />
        <meta name="theme-color" content="#328BF2" />
      </Head>
      <Header />
      <main>
        <Hero />
        <div id="goals">
          <Goals />
        </div>
        <div className="bg-brand-light" id="activities">
          <Activities />
        </div>
        <div id="about-us">
          <AboutUs />
        </div>
        <Members />
        <Board />
      </main>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
