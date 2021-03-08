import React from "react";
import Column from "../components/Column";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import styles from "../styles/pages/Home.module.css";
import LayoutMode from "../components/LayoutMode";

interface IDados {
  hits: IPropsImages[];
  total?: number;
}
interface IPropsImages {
  webformatURL: string;
  id: number;
}
export default function Home() {
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
    if (scroll > pageHeight - 200 && scroll > 0) {
      (async () => {
        const responce = await fetch(
          `https://pixabay.com/api/?key=20316077-4245a7498135799a2f3cd25e2&q=astronomy&safesearch=true&page=${pagina}&category=science`
        );
        const data: IDados = await responce.json();
        const newArray: IPropsImages[] = [...dataGallery.hits, ...data.hits];
        setDataGallery({ ...dataGallery, ["hits"]: [...newArray] });
        setPagina(pagina + 1);
      })();
    }
  }, [scroll]);
  React.useEffect(() => {
    (async () => {
      const responce = await fetch(
        `https://pixabay.com/api/?key=20316077-4245a7498135799a2f3cd25e2&q=astronomy&safesearch=true&page=${pagina}&category=science`
      );
      const data = await responce.json();
      setDataGallery(data);
    })();
  }, []);

  return (
    <div className="home">
      <Header />
      <div className={`content ${styles.homeContent}`}>
        <LayoutMode setColumns={setColumns} columns={columns} />
        <Gallery dataImages={dataGallery} columns={columns} />
      </div>
    </div>
  );
}
