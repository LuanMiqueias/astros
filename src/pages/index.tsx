import React from "react";
import Column from "../components/Column";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import styles from "../styles/pages/Home.module.css";
import LayoutMode from "../components/LayoutMode";
import Loading from "../components/Loading";
import { ModalContext } from "../contexts/ModalContext";
import ModalAlert from "../components/ModalAlert";
import Head from "next/head";

interface IDados {
  hits: IPropsImages[];
  totalHits?: number;
}
interface IPropsImages {
  webformatURL: string;
  id: number;
}
export default function Home() {
  //-------------UseContext----------

  const { InsertContent, openModal } = React.useContext(ModalContext);
  function showAlert(message: string) {
    //Mostrar Alerta
    InsertContent(<ModalAlert message={message} />);
    openModal();
  }
  //-------------End - UseContext----------

  //------------useState-----------

  const [dataGallery, setDataGallery] = React.useState<IDados>({
    hits: [
      {
        webformatURL: "",
        id: 0,
      },
    ],
  });
  const [columns, setColumns] = React.useState(3);
  const [pagina, setPagina] = React.useState(1);
  const [scroll, setScroll] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  //------------end - useState-----------

  let pageHeight = 0;
  React.useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, []);
  React.useEffect(() => {
    pageHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    if (scroll > pageHeight - 50 && scroll > 0) {
      if (dataGallery.totalHits >= dataGallery.hits.length) {
        (async () => {
          setLoading(true);
          const responce = await fetch(
            `https://pixabay.com/api/?key=20316077-4245a7498135799a2f3cd25e2&q=astronomy&safesearch=true&page=${pagina}&category=science`
          );
          const data: IDados = await responce.json();
          if (responce.status !== 200) {
            setError(responce.statusText);
          }
          setLoading(false);
          const newArray: IPropsImages[] = [...dataGallery.hits, ...data.hits];
          setDataGallery({ ...dataGallery, ["hits"]: [...newArray] });
          setPagina(pagina + 1);
        })();
      } else {
        showAlert("Sem mais imagens para carregar");
      }
    }
  }, [scroll]);
  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const responce = await fetch(
        `https://pixabay.com/api/?key=20316077-4245a7498135799a2f3cd25e2&q=astronomy&safesearch=true&page=${pagina}&category=science`
      );
      setLoading(false);
      if (responce.status !== 200) {
        setError(responce.statusText);
      }
      const data = await responce.json();
      setDataGallery(data);
    })();
  }, []);

  return (
    <div className="home">
      <Head>
        <title>Astros</title>
      </Head>
      <Header />
      <div className={`content ${styles.homeContent}`}>
        {error && error}
        <>
          {loading && (
            <div className={styles.loadingContainerGalery}>
              <Loading />
            </div>
          )}
          <LayoutMode setColumns={setColumns} columns={columns} />
          <Gallery dataImages={dataGallery} columns={columns} />
        </>
      </div>
    </div>
  );
}
