import React from "react";
import style from "./ContainerForm.module.css";

export default function ContainerForm(props) {
  return <div className={style["container_form"]}>{props.children}</div>;
}
