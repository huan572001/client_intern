import { check, nike, trash } from "../../assets";
import { CountItem } from "../countItem";
import style from "./CartItem.module.css";

export const CartItem = (prop) => {
  return (
    <div className={style.CartItem}>
      <div className={style.ImgCartItemOut}>
        <div className={style.ImgCartItemIn}>
          <img src={prop?.data.image} alt="" />
        </div>
      </div>

      <div className={style.CartRight}>
        <div className={style.CartName}></div>
        <div className={style.Price}></div>
        <div className={style.ActionCart}>
          <CountItem onChange={(e) => console.log(e)} />
          <div
            onClick={() => {
              prop.onChange(prop?.data.id);
            }}
            className={style.RemoveCart}
          >
            <img src={trash}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
