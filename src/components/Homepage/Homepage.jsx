import styles from "./homepage.module.scss";
import HomepageHeader from "./HomepageHeader/HomepageHeader";
import Image from "next/image";
import Button from "../common/Button/Button";
import HOCSection from "../Animation/HOCSection";
import SectionComponent from "../common/Section/SectionComponent";
import Gallery from "../common/Gallery/Gallery";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Offert from "../Offert/Offert";

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
      <div className={`${styles.tilesContainer} flex flex-col mt-30 mb-10`}>
        <HOCSection>
          <div className={`${styles.tile} mb-20 flex`}>
            <Image
              src="/atrakcje.jpeg"
              width={200}
              height={300}
              alt="Obiekt"
              className={styles.tileImg}
            />
            <div className="flex flex-col items-center mx-10">
              <h1 className="text-center mt-2 mb-10 text-4xl">Atrakcje</h1>
              <Button href="/oferta/atrakcje" name="Lista atrakcji" />
            </div>
          </div>
        </HOCSection>
        <HOCSection>
          <div className={`${styles.tile} mb-20 flex`}>
            <div className="flex flex-col items-center mx-10">
              <h1 className="text-center mt-2 mb-6 text-4xl">Obiekt</h1>
              <ul className="mb-6">
                <li>- 10 pokoi</li>
                <li>- kryty plac zabaw</li>
                <li>- spokojna okolica</li>
                <li>- boisko sportowe</li>
              </ul>
            </div>
            <Image
              src="/obiekt.jpeg"
              width={200}
              height={300}
              alt="Atrakcje"
              className={styles.tileImg}
            />
          </div>
        </HOCSection>
        <HOCSection>
          <div className={`${styles.tile} mb-20 flex`}>
            <Image
              src="/jadalnia.jpeg"
              width={200}
              height={300}
              alt="Oferta"
              className={styles.tileImg}
            />
            <div className="flex flex-col items-center mx-10">
              <h1 className="text-center mt-2 text-4xl">Oferta</h1>
              <p className="mt-4 mb-8">
                Posiadamy bogatą ofertę zarówno dla rodzin jak i dla grup
                zoragnizowanych
              </p>
              <Button href="/oferta" name="Sprawdź ofertę" />
            </div>
          </div>
        </HOCSection>
      </div>
      <SectionComponent idName="about" side="left">
        <AboutUs />
      </SectionComponent>
      <SectionComponent idName="offert">
        <Offert />
      </SectionComponent>
      <SectionComponent idName="gallery" side="left">
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
