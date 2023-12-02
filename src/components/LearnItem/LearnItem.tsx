import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/rtk-hooks";
import { deleteItem, toggleCompleted } from "../../redux/slices/LearnListSlice";
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
      <span
        className={styles.deleteliItemButton}
        onClick={() => dispatch(deleteItem(id))}
      >
        {" "}
        X{" "}
      </span>
    </li>
  );
};

export default LearnItem;
