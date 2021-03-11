import Modal from "../components/Modal";
import { ModalProvider } from "../contexts/ModalContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
      <Modal />
    </ModalProvider>
  );
}

export default MyApp;
