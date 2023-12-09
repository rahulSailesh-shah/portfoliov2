import ThreeDModel from "../_components/ThreeDModel";
import About from "../_pages/About";
import Header from "../_pages/Header";
import Work from "../_pages/Work";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <About />
      <Work />
    </main>
  );
}
