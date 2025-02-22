import Galeries from "./components/Galeries";
import Header from "./components/Header";
import VillaInfo from "./components/VillaInfo";

export default function Home() {
  return (
    <>
      <Header />
      {/* Rest of the page */}
      <Galeries />
      <VillaInfo />
    </>
  );
}
