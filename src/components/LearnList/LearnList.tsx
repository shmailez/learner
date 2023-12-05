import { useState } from "react";
import { useAppSelector } from "../../hooks/rtk-hooks";
import LearnItem from "../LearnItem/LearnItem";
import styles from "./LearnList.module.css";
import LongItem from "../LongItem/LongItem";

const LearnList = () => {
  const learnList = useAppSelector((state) => state.learnList.list);

  const importantList = learnList.filter((item) => item.completed === true);

  const longList = useAppSelector((state) => state.longList.long);

  const [learn, setLearn] = useState(true);

  const [vis, setVis] = useState(true);

  return (
    <>
      <button
        className={styles.memorisListbutton}
        onClick={() => setLearn((learn) => !learn)}
      >
        {learn ? "Memoris" : "Learner"}
      </button>

      {learn ? (
        <>
          <div className={styles.toggleList}>
            <button
              className={styles.toggleListbutton}
              onClick={() => setVis((vis) => !vis)}
            >
              {vis ? "важные" : "весь список"}
            </button>
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
