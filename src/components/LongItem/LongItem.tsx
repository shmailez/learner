import { useState } from "react";
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

  const [vis, setVis] = useState(false);

  return (
    <>
      <li className={styles.longItem} key={id}>
        <span className={styles.longItemTitle}>{title}</span>

        <span
          className={styles.longItemDesc}
          onClick={() => setVis((vis) => !vis)}
        >
          {description}
        </span>

        <span
          className={styles.delButton}
          onClick={() => dispatch(removeItem(id))}
        >
          DEL
        </span>
        {vis && (
          <div
            className={styles.longItemModal}
            onClick={() => setVis((vis) => !vis)}
          >
            <h3 className={styles.longItemModalh3}>{title}</h3>
            <span className={styles.longItemModalTitle}>{description}</span>
          </div>
        )}
      </li>
    </>
  );
};

export default LongItem;
