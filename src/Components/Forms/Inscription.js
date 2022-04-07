import React, { useRef } from "react";
import style from "./forms.module.css";

export default function Inscription(props) {
  const nameUserInput = useRef();
  const pseudoUserInput = useRef();
  const emailUserInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const datas = {
      name: nameUserInput.current.value,
      pseudo: pseudoUserInput.current.value,
      email: emailUserInput.current.value,
    };
    console.log(datas);

    props.modifyIndex("+", datas);
  };

  return (
    <form onSubmit={submitHandler}>
      <h3 className={style.titleForm}>Formualire d'inscription</h3>
      <div className={style.infoUser}>
        <input
          type="text"
          id="name"
          placeholder=" "
          ref={nameUserInput}
        ></input>
        <div className={style["bg-label"]}></div>
        <label htmlFor="name">Nom</label>
      </div>
      <div className={style.infoUser}>
        <input
          type="text"
          id="username"
          placeholder=" "
          ref={pseudoUserInput}
        ></input>
        <div className={style["bg-label"]}></div>
        <label htmlFor="username">Pseudo</label>
      </div>
      <div className={style.infoUser}>
        <input type="email" id="email" placeholder=" " ref={emailUserInput} />
        <div className={style["bg-label"]}></div>
        <label htmlFor="email">Email</label>
      </div>
      <div className={style.buttonsUserInfo}>
        <button>Valider</button>
      </div>
    </form>
  );
}
