import React from "react";
import styles from "../styles/components/LayoutMode.module.css";

interface IProps {
  setColumns: React.Dispatch<React.SetStateAction<number>>;
  columns: number;
}
const LayoutMode = ({ columns, setColumns }: IProps) => {
  return (
    <div className={styles.layoutMode}>
      <label htmlFor="columns">
        Modos de exibição
        <select
          name="columns"
          onChange={(e) => setColumns(parseInt(e.target.value))}
        >
          <option disabled>Escolha um modo</option>
          <option value={1}>Uma coluna</option>
          <option value={2}>Duas colunas</option>
          <option value={3}>Três colunas</option>
        </select>
      </label>
    </div>
  );
};

export default LayoutMode;

// onChange={(e) => setColumns(parseInt(e.target.value))}
// checked={columns === 3 ? true : false}
