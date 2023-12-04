import { useState } from "react";
import { useAppSelector } from "../../hooks/rtk-hooks";
import LearnItem from "../LearnItem/LearnItem";
import styles from "./LearnList.module.css";

const LearnList = () => {
  const learnList = useAppSelector((state) => state.learnList.list);
  console.log(learnList);

  const importantList = learnList.filter((item) => item.completed === true);
  console.log(importantList);

  const [vis, setVis] = useState(true);

  return (
    <>
      <div className={styles.toggleList}>
        <button
          className={styles.toggleListbutton}
          onClick={() => setVis((vis) => !vis)}
        >
          переключить
        </button>
      </div>
      {vis ? (
        <ul className={styles.ulList}>
          {learnList.map((item) => (
            <LearnItem key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <ul className={styles.ulList}>
          {importantList.map((item) => (
            <LearnItem key={item.id} {...item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default LearnList;
