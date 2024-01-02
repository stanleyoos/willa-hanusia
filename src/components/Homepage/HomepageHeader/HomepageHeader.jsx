import Image from "next/image";
import Link from "next/link";
import styles from "./homepageHeader.module.scss";
import HOComponent from "@/components/Animation/HOComponent";
import { client, urlFor } from "@/sanity/client";

const HomepageHeader = async () => {
  const headerPicture = await client.fetch(
    `*[_type == "Pictures" && opis == 'Strona Główna']`
  );

  const url = urlFor(headerPicture[0].picture.asset._ref).url();
  return (
    <HOComponent className="my-8 mx-2">
      <Link href="/oferta">
        <Image
          className={styles.headerImg}
          src={url}
          width={800}
          height={800}
        />
      </Link>
    </HOComponent>
  );
};

export default HomepageHeader;
