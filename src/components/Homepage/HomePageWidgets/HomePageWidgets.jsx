import HOCSection from "@/components/Animation/LeftAnimation";
import styles from "./homepagewidgets.module.scss";
import Image from "next/image";
import Button from "@/components/common/Button/Button";

const HomePageWidgets = () => {
  return (
    <div className={styles.tilesContainer}>
      <HOCSection>
        <div className={`${styles.tile} mb-20 flex`}>
          <Image
            src="/atrakcje.jpeg"
            width={100}
            height={200}
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
            width={100}
            height={200}
            alt="Atrakcje"
            className={styles.tileImg}
          />
        </div>
      </HOCSection>
      <HOCSection>
        <div className={`${styles.tile} mb-20 flex`}>
          <Image
            src="/jadalnia.jpeg"
            width={100}
            height={200}
            alt="Oferta"
            className={styles.tileImg}
          />
          <div className="flex flex-col items-center mx-10">
            <p className="mt-4 mb-8">
              Posiadamy bogatą ofertę zarówno dla rodzin jak i dla grup
              zoragnizowanych
            </p>
            <Button href="/oferta" name="Oferta" />
          </div>
        </div>
      </HOCSection>
    </div>
  );
};

export default HomePageWidgets;
