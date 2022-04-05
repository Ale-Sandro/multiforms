import React from "react";
import style from "./StepValidation.module.css";

export default function StepValidation() {
  return (
    <div className={style["progress_steps"]}>
      <div className={style["progress_bar"]}></div>
      <div className={`${style["progress_step"]} ${style["step--active"]}`}>
        1
      </div>
      <div className={style["progress_step"]}>2</div>
      <div className={style["progress_step"]}>3</div>
      <div className={style["progress_step"]}>4</div>
    </div>
  );
}
