import { useState } from "react";
import styles from "./Dashpord.module.css";
import Options from "./Options";
import useFetch from "../hooks/useFetch";

export default function DashPord() {
  const { selection, setSelection } = useState(null);
  const { data, loding, error } = useFetch(selection);

  function onClickhandler(clickedButton) {
    setSelection(clickedButton);
  }

  return (
    <div className={styles.dashpord}>
      <Options onClickhandler={onClickhandler} selection={selection} />
    </div>
  );
}
