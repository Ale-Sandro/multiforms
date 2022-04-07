import React from "react";
import style from "./forms.module.css";

export default function formRadio(props) {
  return (
    <form>
      <div className={style.headerForm}>
        <h3 className={style.titleForm}>
          Sur quel continent <br></br>habitez-vous ?
        </h3>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="america">Amérique</label>
        <input
          type="radio"
          id="america"
          value="america"
          name="continent"
        ></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="africa">Afrique</label>
        <input type="radio" id="africa" value="africa" name="continent"></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="asie">Asie</label>
        <input type="radio" id="asie" value="asie" name="continent"></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="europe">Europe</label>
        <input type="radio" id="europe" value="europe" name="continent"></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="oceanie">Océanie</label>
        <input
          type="radio"
          id="oceanie"
          value="oceanie"
          name="continent"
        ></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="antarctique">Antarctique</label>
        <input
          type="radio"
          id="antarctique"
          value="antarctique"
          name="continent"
        ></input>
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
