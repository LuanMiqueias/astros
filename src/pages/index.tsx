import React from "react";
import Column from "../components/Column";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import styles from "../styles/pages/Home.module.css";

interface IDados {
  hits: [IPropsImages];
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
  const [columns, setColumns] = React.useState(4);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(
        "https://pixabay.com/api/?key=20316077-4245a7498135799a2f3cd25e2&q=space"
      );
      const data = await responce.json();
      setDataGallery(data);
    })();
  }, []);
  return (
    <div className="home">
      <Header />
      <div className={`content ${styles.homeContent}`}>
        <Gallery dataImages={dataGallery} columns={columns} />
      </div>
    </div>
  );
}
