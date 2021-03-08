// import styles from "../styles/components/Header.module.css";
import React from "react";
import styles from "../styles/components/Column.module.css";
import ImageGallery from "./ImageGallery";

export default function Column({ data }) {
  return (
    <div className={styles.colunmGallery}>
      {data?.map((item) => {
        return <ImageGallery src={item.webformatURL} key={item.id} />;
      })}
    </div>
  );
}
