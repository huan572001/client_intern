import { check, nike } from "../../assets";
import style from "./Card.module.css";

export const Card = ({ children, title }) => {
  return (
    <div className={style.card}>
      <div className={style.iconTop}>
        <img className={style.iconCardTop} src={nike} />
      </div>

      <div className={style.titleCard}> {title}</div>
      <div className={style.cardBody}>{children}</div>
    </div>
  );
};
