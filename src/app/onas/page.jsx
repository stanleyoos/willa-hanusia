"use client";

import Button from "@/components/common/Button/Button";
import styles from "./onas.module.scss";
import { motion } from "framer-motion";

const ONasPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl my-12">O nas</h1>
      <div className={styles.divContainer}>
        <div>
          <ul className="mb-5">
            <li>- Rodzinna atmosfera</li>
            <li>- Domowe wyżywienie</li>
            <li>- Kryty plac zabaw</li>
            <li>- Cicha i spokojna okolica</li>
          </ul>
          to elementy dzięki którym wypoczynek będzie naprawdę udany. Wszystkie
          z nich znajdziecie Państwo w Willi Hanusia - najlepszym miejscu do
          wypoczynku z dziećmi.
        </div>
        <iframe
          width="560"
          height="415"
          src="https://www.youtube.com/embed/v3FHEiDZhzI?si=MSS0QnvJtWxzCMge"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h1 className="text-3xl mb-5">
        Zapraszamy do zapoznania się z naszą ofertą
      </h1>
      <Button name="Oferta" href="/oferta" />
      <div className="mb-40"></div>
    </motion.div>
  );
};

export default ONasPage;
