"use client";

import Image from "next/image";
import styles from "./gallery.module.scss";

const Gallery = ({ photos, name }) => {
  return (
    <>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.galleryContainer}>
        {photos.map((photo, index) => (
          <Image
            key={index}
            src={photo}
            width={400}
            height={200}
            alt="zdjecie"
            className={styles.singlePhoto}
          />
          // <div className={styles.singlePhoto}>1</div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
