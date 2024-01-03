import { useState } from "react";
import styles from "./hamburger.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, sync, useCycle } from "framer-motion";
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
            <Link onClick={() => setShowMenu(false)} href="/onas">
              O nas
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} href="/galeria">
              Galeria
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} href="/oferta">
              Oferta
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} href="/kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
