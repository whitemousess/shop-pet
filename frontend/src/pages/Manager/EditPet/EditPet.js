import axios from "axios";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./EditPet.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function EditPet() {
  const token = window.localStorage.token;
  const [image, setImage] = useState({ preview: "", data: "" });
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

  const submit = async (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("image", image.data);
    formData.append("name", pet.name);
    formData.append("type", pet.type);
    formData.append("description", pet.description);

    await axios.put(`http://localhost:1407/api/pet/${endURL}/edit`, 
    formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
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
        <h1>Sửa thông tin </h1>

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
          <option value="dogs">Chó cảnh</option>
          <option value="cats">Mèo cảnh</option>
          <option value="itemCat">Đồ dùng cho mèo</option>
          <option value="itemDog">Đồ dùng cho chó</option>
        </select>
        <Button blue className={cx("btn-add")}>
          Sửa
        </Button>
        <Button yellow onClick={(e) => window.history.back()} className={cx("btn-add")}>
          Hủy
        </Button>
      </form>
    </div>
  );
}

export default EditPet;
