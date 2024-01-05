import Image from "next/image";
import Link from "next/link";
import styles from "./homepageHeader.module.scss";
import HOComponent from "@/components/Animation/HOComponent";

const HomepageHeader = async () => {
  return (
    <HOComponent className="my-8 mx-2">
      <Link href="/oferta">
        <Image
          className={styles.headerImg}
          src={"/homepageHeader.jpeg"}
          width={800}
          height={800}
        />
      </Link>
    </HOComponent>
  );
};

export default HomepageHeader;
