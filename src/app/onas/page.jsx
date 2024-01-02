import Button from "@/components/common/Button/Button";
import styles from "./onas.module.scss";
import HOComponent from "@/components/Animation/HOComponent";

const ONasPage = () => {
  return (
    <HOComponent className="flex flex-col items-center justify-center">
      <h1 className="text-7xl my-12">O nas</h1>
      <div className={styles.divContainer}>
        <div>
          <ul className="mb-5">
            <li>- Rodzinna atmosfera</li>
            <li>- Domowe wyżywienie</li>
            <li>- Kryty plac zabaw</li>
            <li>- Cicha i spokojna okolica</li>
          </ul>
          to elementy dzięki którym wypoczynek będzie naprawdę udany. Wszystkie
          z nich znajdziecie Państwo w Willi Hanusia - najlepszym miejscu do
          wypoczynku z dziećmi.
        </div>
        <iframe
          width="560"
          height="415"
          src="https://www.youtube.com/embed/v3FHEiDZhzI?si=MSS0QnvJtWxzCMge"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="text-3xl text-center px-3 mb-10">
        Zapraszamy do zapoznania się z naszą ofertą
      </h1>
      <Button name="Sprawdź ofertę" href="/oferta" />
      <div className="mb-40"></div>
    </HOComponent>
  );
};

export default ONasPage;
