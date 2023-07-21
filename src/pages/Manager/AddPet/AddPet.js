import axios from "axios";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./AddPet.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AddPet() {
  const [pet, setPet] = useState("");

  function submit(e) {
    e.preventDefault();
    const headers = {
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDlkNDE0OTdmZGFkYWJhODc2MmExZjIiLCJpYXQiOjE2ODkxNjY3MzR9.NNDhiTsAO9-rL7AtLW1u1IGCaZEFi5eXeO_Yhai5rvs",
      "Content-Type": "application/json",
    }

    axios
      .post(
        `http://localhost:1407/api/pet/add`,
        {
          name: pet.name,
          image: pet.image,
          type: pet.type,
          description: pet.description,
        },
        {headers}
      )
      .then((response) => {
        window.location = "/manager/pets";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handle(e) {
    const newData = { ...pet };
    newData[e.target.name] = e.target.value;
    setPet(newData);
    console.log(newData);
  }

  return (
    <div className={cx("wrapper")}>
      <form className={cx("form-manager")} onSubmit={(e) => submit(e)}>
        <h1>Thêm vật nuôi</h1>
        <input
          type="text"
          className={cx("text-form")}
          onChange={(e) => handle(e)}
          value={pet.name || ""}
          name="name"
          placeholder="Nhập tên động vật ..."
        />
        <input
          type="text"
          className={cx("text-form")}
          onChange={(e) => handle(e)}
          value={pet.image || ""}
          name="image"
          placeholder="Nhập địa chỉ ảnh ..."
        />
        <input
          type="text"
          className={cx("text-form")}
          onChange={(e) => handle(e)}
          value={pet.description || ""}
          name="description"
          placeholder="Nhập mô tả ..."
        />
        <select
          onChange={(e) => handle(e)}
          value={pet.type || ""}
          name="type"
          className={cx("text-form")}
        >
          <option value="dog">Chó cảnh</option>
          <option value="cat">Mèo cảnh</option>
        </select>
        <Button blue className={cx("btn-add")}>
          Thêm
        </Button>
      </form>
    </div>
  );
}

export default AddPet;
