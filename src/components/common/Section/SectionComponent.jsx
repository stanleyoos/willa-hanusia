"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

import styles from "./section.module.scss";

const SectionComponent = ({ children, idName }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id={idName} className={styles.sectionDiv} ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export default SectionComponent;
