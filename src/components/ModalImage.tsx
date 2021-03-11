import React from "react";
import { ModalContext } from "../contexts/ModalContext";
import styles from "../styles/components/ModalImage.module.css";
interface IProps {
  img: string;
}
const ModalImage = ({ img }: IProps) => {
  const { closeModal } = React.useContext(ModalContext);

  return (
    <div className={styles.ModalImage}>
      <img src={img} alt="" className={styles.image} />
      <section className={styles.ModalDescription}>
        <header>
          <span>@nomeusuario</span>
          <img src="./icons/close.svg" alt="" onClick={closeModal} />
        </header>
        <main>
          <div className={styles.ModalInfos}>
            <h1>Titulo da publicação</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              cupiditate molestias beatae modi nihil, quos quia deserunt amet
              pariatur facere, repellat illo praesentium vel itaque ratione eos
              deleniti ipsa magni! Veniam vel officia vitae, cupiditate corporis
              illo accusantium beatae rerum deleniti iusto quod sint eaque
              possimus deserunt repudiandae eligendi harum placeat esse!
              Adipisci non magnam, maxime veniam quod laborum, dignissimos ipsum
              sapiente ab nisi minima beatae. Earum magnam odit, repudiandae
              corrupti ex deleniti consequuntur.
            </p>
          </div>
        </main>
      </section>
    </div>
  );
};

export default ModalImage;
