import axios from "axios";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./AddPet.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AddPet() {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [pet, setPet] = useState("");
  const token = window.localStorage.token;

  useEffect(() => {
    if (!token) {
      window.location = "/login";
      return;
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("image", image.data);
    formData.append("name", pet.name);
    formData.append("type", pet.type);
    formData.append("description", pet.description);

    await axios
      .post("http://localhost:1407/api/pet/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: "Bearer " + token,
        },
      })

      .then((response) => {
        window.location = "/manager/pets";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      };
      setImage(img);
    }
  };

  function handle(e) {
    const newData = { ...pet };
    newData[e.target.name] = e.target.value;
    setPet(newData);
  }

  return (
    <div className={cx("wrapper")}>
      <form className={cx("form-manager")} onSubmit={(e) => submit(e)}>
        <h1>Thêm vật nuôi</h1>

        {image.preview && (
          <img src={image.preview} alt="error-pet" className={cx("image")} />
        )}

        <p>Ảnh vật nuôi</p>
        <input type="file" name="image" onChange={handleFileChange}></input>

        <input
          type="text"
          className={cx("text-form")}
          onChange={(e) => handle(e)}
          value={pet.name || ""}
          name="name"
          placeholder="Nhập tên động vật ..."
          required
        />
        <input
          type="text"
          className={cx("text-form")}
          onChange={(e) => handle(e)}
          value={pet.description || ""}
          name="description"
          placeholder="Nhập mô tả ..."
          required
        />
        <select
          onChange={(e) => handle(e)}
          value={pet.type || ""}
          name="type"
          className={cx("text-form")}
          required
        >
          <option value="">Chọn loại vật nuôi</option>
          <option value="dogs">Chó cảnh</option>
          <option value="cats">Mèo cảnh</option>
          <option value="itemCat">Đồ dùng cho mèo</option>
          <option value="itemDog">Đồ dùng cho chó</option>
        </select>
        <Button blue className={cx("btn-add")}>
          Thêm
        </Button>
        <Button yellow onClick={(e) => window.history.back()} className={cx("btn-add")}>
          Hủy
        </Button>
      </form>
    </div>
  );
}

export default AddPet;
