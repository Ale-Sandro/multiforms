import React from "react";
import style from "./InfoCart.module.css";

export default function InfoCartEnd() {
  return (
    <div className={style["container__cartInfo"]}>
      <h1>Terminé ! 👌</h1>
      <p>Voici vos données entrées dans le formulaire : </p>
    </div>
  );
}
