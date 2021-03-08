import React from "react";
import styles from "../styles/components/ImageGallery.module.css";

const ImageGallery = ({ src }) => {
  return <img className={styles.ImageGallery} src={src} />;
};

export default ImageGallery;
