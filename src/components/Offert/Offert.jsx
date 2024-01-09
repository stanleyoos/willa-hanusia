import HOComponent from "@/components/Animation/OpacityAnimation";
import Image from "next/image";
import styles from "./oferta.module.scss";
import Button from "@/components/common/Button/Button";

const Offert = () => {
  return (
    <div className={styles.divContainer}>
      <h1 className="text-7xl my-10 text-center">Oferta</h1>
      <div className={styles.offertWrapper}>
        <div className={styles.singleOffert}>
          <Image src="/ofertaRodzinna.jpeg" width={400} height={100} />
          <h1>Rodzinna</h1>
          <Button name="Czytaj więcej" href="/oferta/rodzinna" />
        </div>
        <div className={styles.singleOffert}>
          <Image src="/ofertaGrupowa.jpeg" width={320} height={100} />
          <h1>Grupowa</h1>
          <Button name="Czytaj więcej" href="/oferta/grupowa" />
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="mb-20">
        <h1 className="text-5xl">Lista atrakcji</h1>
      </div> */
}

export default Offert;
