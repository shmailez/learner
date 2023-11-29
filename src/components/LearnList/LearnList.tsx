import { useAppSelector } from "../../hooks/rtk-hooks";
import LearnItem from "../LearnItem/LearnItem";
import styles from "./LearnList.module.css";

const LearnList = () => {
  const learnList = useAppSelector((state) => state.learnList.list);
  console.log(learnList);

  return (
    <ul className={styles.ulList}>
      {learnList.map((item) => (
        <LearnItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default LearnList;
