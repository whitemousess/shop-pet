import axios from "axios";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./EditPet.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function EditPet() {
  const token = window.localStorage.token;
  const [pet, setPet] = useState("");
  const endURL = window.location.href.split("/").pop();

  useEffect(() => {
    if (!token) {
      window.location = "/login";
      return;
    }

    fetch(`http://localhost:1407/api/pet/show/${endURL}`)
            .then((res) => res.json())
            .then((res) => {
              setPet(res.data)
            })
            .catch((error) => {console.log(error)});
  }, []);

  function submit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:1407/api/pet/${endURL}/edit`, {
        name: pet.name,
        image: pet.image,
        type: pet.type,
        description: pet.description,
      },
      {headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    })
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
          required
        >
          <option value="">Chọn loại vật nuôi</option>
          <option value="dog">Chó cảnh</option>
          <option value="cat">Mèo cảnh</option>
        </select>
        <Button blue className={cx("btn-add")}>
          Sửa
        </Button>
      </form>
    </div>
  );
}

export default EditPet;
