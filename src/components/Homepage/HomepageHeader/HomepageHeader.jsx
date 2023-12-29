"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./homepageHeader.module.scss";
import { motion } from "framer-motion";

const HomepageHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="my-8 mx-2"
    >
      <Link href="/oferta">
        <Image
          className={styles.headerImg}
          src="/homepageHeader.jpeg"
          width={800}
          height={800}
        />
      </Link>
    </motion.div>
  );
};

export default HomepageHeader;
