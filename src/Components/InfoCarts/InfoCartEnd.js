import React from "react";
import style from "./InfoCart.module.css";

export default function InfoCartEnd({ datasUser }) {
  console.log(datasUser);

  const firstCapitalLetter = (data) => {
    return data.at(0).toUpperCase().concat(data.slice(1));
  };

  let cuisine = datasUser.cuisine;
  if (typeof cuisine === "object") {
    console.log("je suis dans le if");
    cuisine = cuisine.map((el) => firstCapitalLetter(el)).join(", ");
  }

  return (
    <div className={style["container__cartInfo"]}>
      <h1>Terminé ! 👌</h1>
      <p>Voici vos données entrées dans le formulaire : </p>

      <div className={style["container__datas"]}>
        {datasUser &&
          Object.keys(datasUser).map((data, i) => {
            return (
              <div className={style.data} key={i}>
                <p className={style.title}>{firstCapitalLetter(data)}</p>
                <p className={style.answer}>
                  {data != "continent" && data != "cuisine" && datasUser[data]}
                  {data === "continent" && firstCapitalLetter(datasUser[data])}
                  {data === "cuisine" && cuisine}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
