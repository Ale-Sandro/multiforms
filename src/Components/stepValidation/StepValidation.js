import React, { useState } from "react";
import style from "./StepValidation.module.css";

export default function StepValidation(props) {
  const one_step = 100 / Number(props.lengthOfForms - 2); //2 correspond a cartBegin et cartEnd;

  let progressBar = "";
  console.log(props.formIndex);

  if (props.formIndex === 2) {
    progressBar = one_step;
  } else if (props.formIndex === 3) {
    progressBar = one_step * 2;
  } else if (props.formIndex === 4) {
    progressBar = one_step * 3;
  }

  const stepActive = style["step--active"];

  return (
    <div className={style["progress_steps"]}>
      <div
        className={`${style["progress_bar"]}`}
        style={{ width: `${progressBar}%` }}
      ></div>

      <div className={`${style["progress_step"]} ${style["step--active"]}`}>
        1
      </div>
      <div
        className={`${style["progress_step"]} ${
          props.formIndex >= 2 ? stepActive : ""
        }`}
      >
        2
      </div>
      <div
        className={`${style["progress_step"]} ${
          props.formIndex >= 3 ? stepActive : ""
        }`}
      >
        3
      </div>
      <div
        className={`${style["progress_step"]} ${
          props.formIndex >= 4 ? stepActive : ""
        }`}
      >
        4
      </div>
    </div>
  );
}
