import React from "react";
import { ModalContext } from "../contexts/ModalContext";
import styles from "../styles/components/ModalAlert.module.css";

interface IProps {
  message: string;
}
const ModalAlert = ({ message }: IProps) => {
  const { closeModal } = React.useContext(ModalContext);

  return (
    <div className={styles.ModalAlert}>
      <p>{message}</p>
      <button onClick={closeModal}>Fechar</button>
    </div>
  );
};

export default ModalAlert;
