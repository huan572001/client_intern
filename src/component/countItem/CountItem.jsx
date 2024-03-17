import { useEffect, useState } from "react";
import style from "./style.module.css";

export const CountItem = (prop) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    prop.onChange(count);
  }, []);
  return (
    <div className={style.CountProduct}>
      <div
        className={style.Increment}
        onClick={() => {
          setCount(count - 1);
          prop.onChange(count - 1);
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
