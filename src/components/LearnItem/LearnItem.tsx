import { useAppDispatch } from "../../hooks/rtk-hooks";
import { toggleCompleted } from "../../redux/slices/LearnListSlice";
import styles from "./LearnItem.module.css";

interface LearnItemInterface {
  id: string;
  title: string;
  completed: boolean;
  important: boolean;
}

const LearnItem: React.FC<LearnItemInterface> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <li className={styles.liItem} key={id}>
      <input
        type="checkbox"
        onChange={() => dispatch(toggleCompleted(id))}
        checked={completed}
        id={id}
      />
      <span>{title}</span>
    </li>
  );
};

export default LearnItem;
