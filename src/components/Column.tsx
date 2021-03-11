// import styles from "../styles/components/Header.module.css";
import React from "react";
import styles from "../styles/components/Column.module.css";
import ImageGallery from "./ImageGallery";

export default function Column({ data }) {
  return (
    <div className={styles.colunmGallery}>
      {data?.map((item, index) => {
        const random = Math.floor(Math.random() * 99999999);
        return (
          <ImageGallery
            src={item.webformatURL}
            key={`image_${item.id}_${index}_${random}`}
          />
        );
      })}
    </div>
  );
}
