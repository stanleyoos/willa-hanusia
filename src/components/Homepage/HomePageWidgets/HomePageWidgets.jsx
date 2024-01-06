import HOCSection from "@/components/Animation/LeftAnimation";
import styles from "./homepagewidgets.module.scss";
import Image from "next/image";
import Button from "@/components/common/Button/Button";

const HomePageWidgets = () => {
  return (
    <div className={styles.tilesContainer}>
      <HOCSection>
        <div className={styles.tile}>
          <Image
            src="/atrakcje.jpeg"
            width={200}
            height={100}
            alt="Obiekt"
            className={styles.tileImg}
          />
          <div>
            <h1>Atrakcje</h1>
            <Button href="#atrakcje" name="Lista atrakcji" />
          </div>
        </div>
      </HOCSection>
      <HOCSection>
        <div className={styles.tile}>
          <div>
            <h1>Obiekt</h1>
            <ul className="mb-2">
              <li>- 10 pokoi</li>
              <li>- kryty plac zabaw</li>
              <li>- spokojna okolica</li>
              <li>- boisko sportowe</li>
            </ul>
          </div>
          <Image
            src="/obiekt.jpeg"
            width={200}
            height={100}
            alt="Atrakcje"
            className={styles.tileImg}
          />
        </div>
      </HOCSection>
      <HOCSection>
        <div className={styles.tile}>
          <Image
            src="/jadalnia.jpeg"
            width={200}
            height={100}
            alt="Oferta"
            className={styles.tileImg}
          />
          <div>
            <p>
              Posiadamy bogatą ofertę zarówno dla rodzin jak i dla grup
              zoragnizowanych
            </p>
            <Button href="#offert" name="Oferta" />
          </div>
        </div>
      </HOCSection>
    </div>
  );
};

export default HomePageWidgets;
