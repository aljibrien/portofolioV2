import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import CertificatesSection from "../components/CertificatesSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <CertificatesSection />
      <Contact />
      <Footer />
    </>
  );
}
