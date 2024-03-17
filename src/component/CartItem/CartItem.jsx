import { trash } from "../../assets";
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
          <CountItem
            onChange={(e) => {
              if (e <= 0) {
                prop.onChange(prop?.data.id);
                prop.setCountItem({
                  id: prop?.data?.id,
                  price: 0,
                });
              } else {
                prop.setCountItem({
                  id: prop?.data?.id,
                  price: Number(prop?.data?.price) * Number(e),
                });
              }
            }}
          />
          <div
            onClick={() => {
              prop.onChange(prop?.data.id);
              prop.setCountItem({
                id: prop?.data?.id,
                price: 0,
              });
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
