import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Partners />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
