import React from "react";
import style from "./forms.module.css";

export default function Checkbox(props) {
  return (
    <form>
      <div className={style.headerForm}>
        <h3 className={style.titleForm}>
          Quelle sont vos cuisines préférées ?
        </h3>
        <span>Choix multiples</span>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="italian">Italienne</label>
        <input type="checkbox" id="italian" value="italian"></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="japanese">Japonaise</label>
        <input type="checkbox" id="japanese" value="japanese"></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="Greek">Grecque</label>
        <input type="checkbox" id="Greek" value="Greek"></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="oriental">Orientale</label>
        <input type="checkbox" id="oriental" value="oriental"></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="oriental">Orientale</label>
        <input type="checkbox" id="oriental" value="oriental"></input>
      </div>
      <div className={style.buttons}>
        <button type="button" onClick={() => props.modifyIndex("-")}>
          Précédent
        </button>
        <button onClick={() => props.modifyIndex("+")}>Valider</button>
      </div>
    </form>
  );
}
