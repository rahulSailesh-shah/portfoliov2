import ThreeDModel from "../_components/ThreeDModel";
import About from "../_pages/About";
import Header from "../_pages/Header";
import Project from "../_pages/Project";
import Skills from "../_pages/Skills";
import Work from "../_pages/Work";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <About />
      <Work />
      <Project />
      <Skills />
    </main>
  );
}
