import { useAppDispatch } from "../../hooks/rtk-hooks";
import { addItem } from "../../redux/slices/LearnListSlice";
import { useState } from "react";
import styles from "./LearnItemInput.module.css";

const LearnItemInput = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const handleTItle = () => {
    dispatch(addItem(title));
    setTitle("");
  };

  return (
    <div className={styles.generalInput}>
      <input
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className={styles.addButton} onClick={() => handleTItle()}>
        add
      </button>
    </div>
  );
};

export default LearnItemInput;
