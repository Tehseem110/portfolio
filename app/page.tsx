import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import OpenSourceSection from "./components/OpenSourceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GSAPInit from "./components/GSAPInit";

export default function Home() {
  return (
    <>
      <GSAPInit />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <OpenSourceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
