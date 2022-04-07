import React, { useState } from "react";
import style from "./forms.module.css";

export default function FormRadio(props) {
  const [continent, setContinent] = useState("Aucune donnée entrée");

  const radioHandler = (e) => {
    setContinent(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(continent);
    const data = {
      continent: continent,
    };
    props.modifyIndex("+", data);
  };

  return (
    <form onSubmit={submitHandler}>
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
          value="amerique"
          name="continent"
          onChange={radioHandler}
        ></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="africa">Afrique</label>
        <input
          type="radio"
          id="africa"
          value="afrique"
          name="continent"
          onChange={radioHandler}
        ></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="asie">Asie</label>
        <input
          type="radio"
          id="asie"
          value="asie"
          name="continent"
          onChange={radioHandler}
        ></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="europe">Europe</label>
        <input
          type="radio"
          id="europe"
          value="europe"
          name="continent"
          onChange={radioHandler}
        ></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="oceanie">Océanie</label>
        <input
          type="radio"
          id="oceanie"
          value="oceanie"
          name="continent"
          onChange={radioHandler}
        ></input>
      </div>
      <div className={style.containerInput}>
        <label htmlFor="antarctique">Antarctique</label>
        <input
          type="radio"
          id="antarctique"
          value="antarctique"
          name="continent"
          onChange={radioHandler}
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
