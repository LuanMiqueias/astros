// import styles from "../styles/components/Header.module.css";
import React from "react";
import styles from "../styles/components/Gallery.module.css";
import Column from "./Column";

interface IProps {
  dataImages: IDados;
  columns: number;
}
interface IDados {
  hits: IPropsImages[];
}
interface IPropsImages {
  webformatURL: string;
  id: number;
}
function splitColumns(array: IPropsImages[], cols: number): IPropsImages[] {
  let newArray = [];
  if (array.length === 0 || cols === 0) {
    newArray.push(array);
    return newArray;
  } else {
    const size = Math.ceil(array.length / cols);
    for (let i = 0; i < cols; i++) {
      const start = i * cols;
      newArray.push(array.slice(start, start + size));
    }
  }
  return newArray;
}
const Gallery: React.FC<IProps> = ({ dataImages, columns }) => {
  const arrayColunm = splitColumns(dataImages.hits, columns);
  return (
    <div
      className={styles.gallery}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {arrayColunm.map((item, index) => {
        return <Column data={item} key={`column_${index}`} />;
      })}
    </div>
  );
};
export default Gallery;
