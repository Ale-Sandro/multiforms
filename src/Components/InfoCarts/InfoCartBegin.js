import React from "react";
import style from "./InfoCartBegin.module.css";

export default function InfoCartBegin(props) {
  return (
    <div className={style["container__cartbegin"]}>
      <h1>Pratique de différents formulaire 📑</h1>
      <p>Exercice perso pour s'exercer avec react</p>
      <button onClick={() => props.modifyIndex(1)}>COMMENCER</button>
    </div>
  );
}
