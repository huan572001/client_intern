import { useEffect, useState } from "react";
import { check, nike } from "../../assets";
import style from "./ProductItem.module.css";

export const ProductItem = (prop) => {
  const { data } = prop;
  const [action, setAction] = useState(false);

  useEffect(() => {
    setAction(prop.status);
  }, [prop.status]);

  return (
    <div>
      <div className={style.ImageProduct}>
        <img src={data?.image} />
      </div>

      <div className={style.NameProduct}> {data?.name}</div>
      <div className={style.DescriptionProd}>{data?.description}</div>
      <div className={style.PriceBuy}>
        <div className={style.Price}> {data?.price}</div>
        <div
          onClick={() => {
            setAction(true);
            prop.onChange(data);
          }}
          className={style.AddToCart}
        >
          {action ? <img src={check} /> : <p>Add to cart</p>}
        </div>
      </div>
    </div>
  );
};
