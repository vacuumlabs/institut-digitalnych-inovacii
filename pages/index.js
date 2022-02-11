import Head from "next/head";
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
      <header className="h-[78px]">HEADER</header>
      <main>
        <Hero />
        <Goals />
        <div className="bg-brand-light">
          <Activities />
        </div>
        <AboutUs />
        <FoundingMembers />
        <OtherMembers />
      </main>
      <footer>FOOTER</footer>
    </>
  );
}
