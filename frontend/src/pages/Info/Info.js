import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./Info.module.scss"
import Image from "~/components/Image";

const cx = classNames.bind(styles)

function Info() {
  const [info, setInfo] = useState(true);

  // Example
  const url = window.location.href.split("/").pop();
  
  useEffect(() => {
    fetch(`http://localhost:1407/api/pet/show/${url}`)
      .then((res) => res.json())
      .then((res) => {
        setInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <><Image className={cx("image-pet")} src={info.image} alt={info.name} /></>
      <div className={cx("content")}>
        <h1 className={cx("header")}>{info.name}</h1>
        <p className={cx("description")}>{info.description}</p>
      </div>
    </div>
  );
}

export default Info;