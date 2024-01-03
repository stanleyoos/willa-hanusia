import styles from "./homepage.module.scss";
import HomepageHeader from "./HomepageHeader/HomepageHeader";
import Image from "next/image";
import Button from "../common/Button/Button";
import HOCSection from "../Animation/HOCSection";

const Homepage = () => {
  return (
    <>
      <HomepageHeader />
      <div
        className={`${styles.tilesContainer} flex flex-col w-100 h-100 mt-30 mb-10 mt-10`}
      >
        <HOCSection side={"left"}>
          <div className={`${styles.tile} mx-2 mb-20 flex`}>
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
        <HOCSection side={"right"}>
          <div className={`${styles.tile} mx-2 mb-20 flex`}>
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
        <HOCSection side={"left"}>
          <div className={`${styles.tile} mx-2 mb-20 flex`}>
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
    </>
  );
};

export default Homepage;
