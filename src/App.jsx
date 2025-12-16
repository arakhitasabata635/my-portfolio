import AboutSection from "./components/AboutSection";
import CodingProfile from "./components/CodingProfile";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectTimeline from "./components/ProjectTimeline";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-white ">
        <Header></Header>
        <main >
          <HeroSection></HeroSection>
          <AboutSection></AboutSection>
          <ProjectTimeline></ProjectTimeline>
          <Education></Education>
          <CodingProfile></CodingProfile>
          <Contact></Contact>
          <Footer></Footer>
        </main>
      </div>
    </>
  );
}

export default App;
