import Image from "next/image";
import Link from "next/link";
import styles from "./homepageHeader.module.scss";

const HomepageHeader = () => {
  return (
    <div className="my-8 mx-2">
      <Link href="/oferta">
        <Image
          className={styles.headerImg}
          src="/homepageHeader.jpeg"
          width={800}
          height={800}
        />
      </Link>
    </div>
  );
};

export default HomepageHeader;
