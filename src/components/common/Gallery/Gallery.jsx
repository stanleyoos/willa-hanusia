"use client";

import Image from "next/image";

import styles from "./gallery.module.scss";

const Gallery = ({ photos }) => {
  console.log(photos);
  return (
    <div className={styles.galleryContainer}>
      {photos.map((photo) => (
        <Image
          src={photo}
          width={400}
          height={200}
          alt="zdjecie"
          className={styles.singlePhoto}
        />
        // <div className={styles.singlePhoto}>1</div>
      ))}
    </div>
  );
};

export default Gallery;
