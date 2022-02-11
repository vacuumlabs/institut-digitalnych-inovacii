import Head from "next/head";

import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Activities from "../components/Activities";
import FoundingMembers from "../components/FoundingMembers";
import Goals from "../components/Goals";
import Hero from "../components/Hero";
import OtherMembers from "../components/OtherMembers";

export default function Home() {
  return (
    <>
      <Head>
        <title>Institut digitalnych inovacii</title>
        <meta name="description" content="Some description" />
        <link rel="icon" href="/favicon.ico" />
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
        <FoundingMembers />
        <OtherMembers />
      </main>
      <footer id="contact">FOOTER</footer>
    </>
  );
}
