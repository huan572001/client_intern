import { useState } from "react";
import { check, nike, trash } from "../../assets";
import style from "./style.module.css";
import { useEffect } from "react";

export const CountItem = (prop) => {
  const [count, setCount] = useState(1);

  return (
    <div className={style.CountProduct}>
      <div
        className={style.Increment}
        onClick={() => {
          setCount(count - 1);
          prop.onChange(count + 1);
        }}
      >
        -
      </div>
      <div className={style.QuantityProduct}>{count}</div>
      <div
        className={style.Reduce}
        onClick={() => {
          setCount(count + 1);
          prop.onChange(count + 1);
        }}
      >
        +
      </div>
    </div>
  );
};
