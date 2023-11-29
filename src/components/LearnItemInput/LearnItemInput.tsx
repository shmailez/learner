import { useAppDispatch } from "../../hooks/rtk-hooks";
import { addItem } from "../../redux/slices/LearnListSlice";
import { useState } from "react";

const LearnItemInput = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => dispatch(addItem(title))}>add</button>
    </>
  );
};

export default LearnItemInput;
