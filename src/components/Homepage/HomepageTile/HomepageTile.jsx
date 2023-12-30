import styles from "./homepagetile.module.scss";
import Image from "next/image";

const HomepageTile = ({ item }) => {
  return (
    <div className="mx-2">
      <Image
        src={item.img}
        width={300}
        height={300}
        alt="Hanusia"
        className={styles.tileImg}
      />
      <h1 className="text-center mt-2 text-2xl">{item.opis}</h1>
    </div>
  );
};

export default HomepageTile;
