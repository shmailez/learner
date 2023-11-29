import LearnItemInput from "../components/LearnItemInput/LearnItemInput";
import LearnList from "../components/LearnList/LearnList";
import style from "./BasePage.module.css";

const BasePage: any = () => {
  return (
    <div className={style.basePage}>
      <LearnItemInput />
      <LearnList />
    </div>
  );
};

export default BasePage;
