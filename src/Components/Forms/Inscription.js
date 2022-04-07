import React, { useRef, useState } from "react";
import style from "./forms.module.css";

export default function Inscription(props) {
  const nameUser = useRef();
  const pseudoUser = useRef();
  const emailUser = useRef();

  const [datasUser, setDatasUser] = useState({
    name: "",
    pseudo: "",
    email: "",
    favoriteCuisine: [],
    continent: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setDatasUser({
      ...datasUser,
      name: nameUser.current.value,
      pseudo: pseudoUser.current.value,
      email: emailUser.current.value,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h3 className={style.titleForm}>Formualire d'inscription</h3>
      <div className={style.infoUser}>
        <input type="text" id="name" placeholder=" " ref={nameUser}></input>
        <div className={style["bg-label"]}></div>
        <label htmlFor="name">Nom</label>
      </div>
      <div className={style.infoUser}>
        <input
          type="text"
          id="username"
          placeholder=" "
          ref={pseudoUser}
        ></input>
        <div className={style["bg-label"]}></div>
        <label htmlFor="username">Pseudo</label>
      </div>
      <div className={style.infoUser}>
        <input type="email" id="email" placeholder=" " ref={emailUser} />
        <div className={style["bg-label"]}></div>
        <label htmlFor="email">Email</label>
      </div>
      <div className={style.buttonsUserInfo}>
        <button onClick={() => props.modifyIndex("+", datasUser)}>
          Valider
        </button>
      </div>
    </form>
  );
}
