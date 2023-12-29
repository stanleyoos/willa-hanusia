import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="flex items-center">
        <Link target="_blank" href="https://www.facebook.com/willa.hanusia">
          <FaFacebookSquare className="mr-6" />
        </Link>
        <Link
          target="_blank"
          href="https://www.dzieciochatki.pl/miejsce-przyjazne-dzieciom/willa-hanusia"
        >
          <Image src="/dzieciochatki.jpg" width={50} height={50} />
        </Link>
      </div>
      <p className="font-sans text-sm text-center">
        Copyright © 2023 WILLA HANUSIA. Wszystkie prawa zastrzeżone.
      </p>
    </div>
  );
};

export default Footer;
