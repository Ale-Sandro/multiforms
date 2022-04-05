import React from "react";
import style from "./forms.module.css";

export default function Inscription() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Formualire d'inscription</h3>
      <div>
        <input type="text" id="name" placeholder=" "></input>
        <div className={style["bg-label"]}></div>
        <label htmlFor="name">Nom</label>
      </div>
      <div>
        <input type="text" id="username" placeholder=" "></input>
        <div className={style["bg-label"]}></div>
        <label htmlFor="username">Pseudo</label>
      </div>
      <div>
        <input type="email" id="email" placeholder=" " />
        <div className={style["bg-label"]}></div>
        <label htmlFor="email">Email</label>
      </div>
      <div className={style.buttons}>
        <button>Valider</button>
      </div>
    </form>
  );
}
