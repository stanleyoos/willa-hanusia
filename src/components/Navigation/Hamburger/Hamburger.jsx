import { useState } from "react";
import styles from "./hamburger.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.divContainer}>
      {showMenu ? (
        <IoMdClose onClick={() => setShowMenu(false)} />
      ) : (
        <GiHamburgerMenu onClick={() => setShowMenu(true)} />
      )}
      <div className={`${styles.sidebar} ${showMenu ? "" : `${styles.hide}`}`}>
        <ul>
          <li>
            <Link onClick={() => setShowMenu(false)} href="#about">
              O nas
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} href="#gallery">
              Galeria
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} href="#offert">
              Oferta
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} href="#contact">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
