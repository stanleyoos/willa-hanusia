"use client";

import styles from "./navigation.module.scss";
import Logo from "../Logo/Logo";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <ul>
        <li>
          <Link href="/onas">O nas</Link>
        </li>
        <li>
          <Link href="/galeria">Galeria</Link>
        </li>
        <li>
          <Link href="/oferta">Oferta</Link>
        </li>
        <li>
          <Link href="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navigation;
