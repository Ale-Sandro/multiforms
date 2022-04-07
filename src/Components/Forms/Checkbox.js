import React, { useRef } from "react";
import style from "./forms.module.css";

export default function Checkbox(props) {
  const checkbox = useRef([]);

  const addCheck = (el) => {
    if (!checkbox.current.includes(el)) {
      checkbox.current.push(el);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(checkbox);
    const isCheck = checkbox.current.filter((check) => check.checked);
    let isCheckValue = isCheck.map((check) => check.value);
    if (isCheckValue.length === 0) {
      isCheckValue = "Aucune donnée entrée";
    }

    const datas = {
      cuisine: isCheckValue,
    };

    props.modifyIndex("+", datas);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={style.headerForm}>
        <h3 className={style.titleForm}>
          Quelle sont vos cuisines préférées ?
        </h3>
        <span>Choix multiples</span>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="italian">Italienne</label>
        <input
          ref={addCheck}
          type="checkbox"
          id="italian"
          value="italienne"
        ></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="japanese">Japonaise</label>
        <input
          ref={addCheck}
          type="checkbox"
          id="japanese"
          value="japonaise"
        ></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="Greek">Grecque</label>
        <input
          ref={addCheck}
          type="checkbox"
          id="Greek"
          value="Grecque"
        ></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="oriental">Orientale</label>
        <input
          ref={addCheck}
          type="checkbox"
          id="oriental"
          value="oriental"
        ></input>
      </div>
      <div className={style.buttons}>
        <button type="button" onClick={() => props.modifyIndex("-")}>
          Précédent
        </button>
        <button>Valider</button>
      </div>
    </form>
  );
}
