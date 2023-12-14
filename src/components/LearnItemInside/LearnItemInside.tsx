import { Link, Params, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/rtk-hooks";
import styles from "./LearnItemInside.module.css";
import { useState } from "react";
import {
  deleteItem,
  updateDescription,
} from "../../redux/slices/LearnListSlice";
import { transItem } from "../../redux/slices/LongListSlice";

const LearnItemInside: React.FC = () => {
  const param: Readonly<Params<string>> = useParams();

  const item: any = useAppSelector((state) => state.learnList.list).find(
    (item) => item.id === param.id
  );

  const dispatch = useAppDispatch();

  const [vis, setVis] = useState(false);

  const [desc, setDesc] = useState(item.description);

  const descriptionSub = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setVis((vis) => !vis);

    dispatch(updateDescription({ id: item.id, description: desc }));
  };

  const toMemoris = () => {
    dispatch(
      transItem({
        id: item.id,
        title: item.title,
        completed: item.completed,
        important: item.important,
        description: item.description,
      })
    );
    dispatch(deleteItem(item.id));
  };

  const first = item.description.split(" ");
  const other = [...first];

  other.shift();

  return (
    <div className={styles.itemInside}>
      <div className={styles.itemInsideHead}>
        <span>
          <Link className={styles.backlink} to={"/learner/"}>
            Назад
          </Link>
        </span>

        <span onClick={() => toMemoris()}>
          <Link className={styles.tomemorisbutton} to={"/learner/"}>
            В мемориз
          </Link>
        </span>

        <span onClick={() => dispatch(deleteItem(item.id))}>
          <Link className={styles.deletebutton} to={"/learner/"}>
            Удалить{" "}
          </Link>
        </span>
      </div>

      <span className={styles.word}>{item.title}</span>

      {vis ? (
        <form onSubmit={descriptionSub}>
          <input
            className={styles.descInput}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </form>
      ) : (
        <p className={styles.descText} onClick={() => setVis((vis) => !vis)}>
          {first[0]}
        </p>
      )}

      {item.description && <p className={styles.other}>{item.description}</p>}
      <button className={styles.button} onClick={descriptionSub}>
        Добавить значение
      </button>
    </div>
  );
};

export default LearnItemInside;
