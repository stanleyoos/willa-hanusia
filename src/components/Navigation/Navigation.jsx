"use client";

import styles from "./navigation.module.scss";
import Logo from "../Logo/Logo";
import { motion } from "framer-motion";
import Link from "next/link";
import Hamburger from "./Hamburger/Hamburger";

const Navigation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={styles.navigationContainer}
    >
      <Link href="/">
        <Logo />
      </Link>
      <ul className={styles.navigationList}>
        <li>
          <Link href="#about">O nas</Link>
        </li>
        <li>
          <Link href="#gallery">Galeria</Link>
        </li>
        <li>
          <Link href="#offert">Oferta</Link>
        </li>
        <li>
          <Link href="#contact">Kontakt</Link>
        </li>
      </ul>
      <div className={styles.navigationHamburger}>
        <Hamburger />
      </div>
    </motion.div>
  );
};

export default Navigation;
