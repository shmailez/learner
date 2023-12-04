import { useAppDispatch } from "../../hooks/rtk-hooks";
import { removeItem } from "../../redux/slices/LongListSlice";
import styles from "./LongItem.module.css";

interface LongItemInterface {
  id: string;
  title: string;
  completed: boolean;
  important: boolean;
  description: string;
}

const LongItem: React.FC<LongItemInterface> = ({ id, title, description }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <li className={styles.longItem} key={id}>
        <span>{title}</span>
        <br />
        <span>{description}</span>
        <br />
        <span
          className={styles.delButton}
          onClick={() => dispatch(removeItem(id))}
        >
          DEL
        </span>
      </li>
    </>
  );
};

export default LongItem;
