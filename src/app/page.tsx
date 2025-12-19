import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Capabilities } from "@/components/sections/Capabilities";
import { Cases } from "@/components/sections/Cases";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Insights } from "@/components/sections/Insights";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Stars } from "@/components/ui/Stars";
import styles from "./page.module.css";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className={styles.page}>
      <Stars />
      <div className={styles.content}>
        <Navbar />
        <main className={styles.main}>
          <Hero />
          <Highlights />
          <Services />
          <Solutions />
          <Capabilities />
          <Cases />
          <Insights />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
