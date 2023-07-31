import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Dogs.module.scss";
import ItemsPet from "./ItemsPet";
import * as petService from "~/services/petService";

const cx = classNames.bind(styles);

function Dogs() {
  const [dog, setDog] = useState([])
  useEffect(() => {
    // call Api User
    petService
    .getPet({type: "dog"})
    .then((data) => {
      setDog((prePet) => [...prePet, ...data]);
    })
    .catch((error) => console.log(error));
}, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <span></span>
        <strong className={cx("title-dog")}>CHÓ CẢNH</strong>
        <span></span>
      </div>
      <div className={cx("description")}>
        <span>
          Nhập khẩu & nhân giống bởi Trang trại Dogily Kennel thành viên Hiệp
          hội những người nuôi chó giống tại Việt Nam (VKA)
        </span>
      </div>
      <ItemsPet data={dog}/>
    </div>
  );
}

export default Dogs;
