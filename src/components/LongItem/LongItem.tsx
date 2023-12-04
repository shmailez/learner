import { useAppDispatch } from "../../hooks/rtk-hooks";
import { removeItem } from "../../redux/slices/LongListSlice";

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
      <li key={id}>
        <span>{title}</span>
        <br />
        <span>{description}</span>
        <br />
        <span onClick={() => dispatch(removeItem(id))}>DEL</span>
      </li>
    </>
  );
};

export default LongItem;
