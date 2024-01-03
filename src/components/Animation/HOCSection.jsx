"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./section.module.scss";

const HOCSection = ({ children, side }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  let direction = side == "left" ? "translateX(-900px)" : "translateX(900px)";
  return (
    <section className={styles.sectionContainer} ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : direction,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export default HOCSection;
