import { useState } from "react";
import styles from "./Dashpord.module.css";
import Options from "./Options";
import useFetch from "../hooks/useFetch";
import Books from "./Books";
import Movies from "./Movies";
import Carachter from "./Carachter";
import Loding from "./Loding";

export default function DashPord() {
  const [selection, setSelection] = useState(null);
  const { data, loding } = useFetch(selection);

  function onClickhandler(clickedButton) {
    return () => {
      setSelection(clickedButton);
    };
  }

  const dataRender = {
    book: <Books data={data} />,
    movie: <Movies data={data} />,
    character: <Carachter data={data} />,
  };
  return (
    <div className={styles.dashpord}>
      <Options onClickhandler={onClickhandler} />
      {loding && <Loding />}
      {data && !loding && (
        <div className={styles["dashpord_el"]}>
          {data && !loding && dataRender[selection]}
        </div>
      )}
    </div>
  );
}
