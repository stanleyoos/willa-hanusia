import HOComponent from "@/components/Animation/HOComponent";
import Image from "next/image";
import styles from "./oferta.module.scss";
import Button from "@/components/common/Button/Button";

const OfertaPage = () => {
  return (
    <HOComponent className="flex flex-col items-center justify-center ">
      <h1 className="text-7xl my-12">Oferta</h1>
      <div className={`${styles.divContainer}`}>
        <div>
          <Image src="/ofertaRodzinna.jpeg" width={400} height={100} />
          <h1>Rodzinna</h1>
          <Button name="Czytaj więcej" href="/oferta/rodzinna" />
        </div>
        <div>
          <Image src="/ofertaGrupowa.jpeg" width={300} height={100} />
          <h1>Grupowa</h1>
          <Button name="Czytaj więcej" href="/oferta/grupowa" />
        </div>
      </div>
    </HOComponent>
  );
};

export default OfertaPage;
