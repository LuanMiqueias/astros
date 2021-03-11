import React from "react";
import { ModalContext } from "../contexts/ModalContext";
import styles from "../styles/components/ImageGallery.module.css";
import ModalImage from "./ModalImage";

const ImageGallery = ({ src }) => {
  const { InsertContent, openModal } = React.useContext(ModalContext);
  function showModal() {
    InsertContent(<ModalImage img={src} />);
    openModal();
  }
  return <img className={styles.ImageGallery} src={src} onClick={showModal} />;
};

export default ImageGallery;
