import { Link, Params, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/rtk-hooks";
import styles from "./LearnItemInside.module.css";
import { useState } from "react";
import { updateDescription } from "../../redux/slices/LearnListSlice";

type ItemType = {
  id: string;
  title: string;
  completed: boolean;
  important: boolean;
  description: string;
};

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

  return (
    <div className={styles.itemInside}>
      <Link className={styles.backlink} to={"/learner/"}>
        Назад
      </Link>
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
          {item.description}
        </p>
      )}

      <button className={styles.button} onClick={descriptionSub}>
        Значение
      </button>
    </div>
  );
};

export default LearnItemInside;
