import Footer from "./components/Footer";
import Galeries from "./components/Galeries";
import Header from "./components/Header";
import Reservation from "./components/Reservation";
import { VillaInfo } from "./components/VillaInfo";

export default function Home() {
  return (
    <>
      <Header />
      {/* Rest of the page */}
      <Galeries />
      <VillaInfo
        square={120}
        bedrooms={6}
        bathrooms={6}
        hasPool={true}
        hasKitchen={true}
        fence={true}
      />
      <Reservation />
      <Footer />
    </>
  );
}
