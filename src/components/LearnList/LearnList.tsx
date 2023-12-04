import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/rtk-hooks";
import LearnItem from "../LearnItem/LearnItem";
import styles from "./LearnList.module.css";
import { transItem } from "../../redux/slices/LongListSlice";
import LongItem from "../LongItem/LongItem";

const LearnList = () => {
  const learnList = useAppSelector((state) => state.learnList.list);
  console.log(learnList);

  const importantList = learnList.filter((item) => item.completed === true);
  console.log(importantList);

  const longList = useAppSelector((state) => state.longList.long);

  console.log(longList);

  const [learn, setLearn] = useState(true);

  const [vis, setVis] = useState(true);

  return (
    <>
      <button
        className={styles.memorisListbutton}
        onClick={() => setLearn((learn) => !learn)}
      >
        мемориз
      </button>

      {learn ? (
        <>
          <div className={styles.toggleList}>
            {vis ? (
              <button
                className={styles.toggleListbutton}
                onClick={() => setVis((vis) => !vis)}
              >
                важные
              </button>
            ) : (
              <button
                className={styles.toggleListbutton}
                onClick={() => setVis((vis) => !vis)}
              >
                весь список
              </button>
            )}
          </div>
          <div className="learn">
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
          </div>
        </>
      ) : (
        <div className="long">
          <ul className={styles.ulList}>
            {longList.map((item) => (
              <LongItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default LearnList;
