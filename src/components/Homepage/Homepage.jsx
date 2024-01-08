import HomepageHeader from "./HomepageHeader/HomepageHeader";
import SectionComponent from "../common/Section/SectionComponent";
import Gallery from "../common/Gallery/Gallery";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Offert from "../Offert/Offert";
import Atrakcje from "../Atrakcje/Atrakcje";
import HomePageWidgets from "./HomePageWidgets/HomePageWidgets";

const Homepage = () => {
  const atrakcje = [
    "/atrakcje/01.jpeg",
    "/atrakcje/02.jpeg",
    "/atrakcje/03.jpeg",
    "/atrakcje/04.jpeg",
  ];
  const pokoje = [
    "/pokoje/01.jpg",
    "/pokoje/02.jpg",
    "/pokoje/03.jpg",
    "/pokoje/04.jpg",
  ];
  return (
    <>
      <HomepageHeader />

      <SectionComponent idName="widgets">
        <HomePageWidgets />
      </SectionComponent>
      <SectionComponent idName="about">
        <AboutUs />
      </SectionComponent>
      <SectionComponent idName="offert">
        <Offert />
      </SectionComponent>
      <SectionComponent idName="atrakcje">
        <Atrakcje />
      </SectionComponent>
      <SectionComponent idName="gallery">
        <Gallery photos={atrakcje} name="Atrakcje" />
        <Gallery photos={pokoje} name="Pokoje" />
      </SectionComponent>
      <SectionComponent idName="contact">
        <Contact />
      </SectionComponent>
    </>
  );
};

export default Homepage;
