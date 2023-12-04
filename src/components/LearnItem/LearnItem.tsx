import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/rtk-hooks";
import { toggleCompleted } from "../../redux/slices/LearnListSlice";
import styles from "./LearnItem.module.css";

interface LearnItemInterface {
  id: string;
  title: string;
  completed: boolean;
  important: boolean;
  description: string;
}

const LearnItem: React.FC<LearnItemInterface> = ({
  id,
  title,
  completed,
  important,
}) => {
  const dispatch = useAppDispatch();
  return (
    <li className={styles.liItem} key={id}>
      <label className={styles.labelcheckboxItem}>
        <input
          type="checkbox"
          className={styles.checkboxItem}
          onChange={() => dispatch(toggleCompleted(id))}
          checked={completed}
          id={id}
        />
        <span>★</span>
      </label>

      <Link className={styles.liItemText} to={`/learner/${id}`}>
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default LearnItem;
