import PropTypes from 'prop-types'
import axios from "axios";
import classNames from "classnames/bind";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";

import styles from "./Item.module.scss";
import Button from "~/components/Button";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function Item({ data = [], token }) {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleClose = () => setShow(false);

  const handleClickId = (id) => {
    setDeleteId(id);
    setShow(true);
  };

  function deleteBtn(e) {
    e.preventDefault();
    axios
      .delete(`http://localhost:1407/api/pet/${deleteId}/delete`, {
        headers: {
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

  return (
    <div>
      <div className={cx("manager")}>
        <div className={cx("container")}>
          <table className={cx("table")}>
            <thead>
              <tr>
                <th className={cx("header")}>#</th>
                <th className={cx("header")}>Tên vật nuôi</th>
                <th className={cx("header")}>Hình ảnh</th>
                <th className={cx("header")}>Xử lý</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={data._id}>
                  <td className={cx("data-table")}>{index + 1}</td>
                  <td className={cx("data-table")}>{data.name}</td>
                  <td>
                    <Image
                      className={cx("image-pet")}
                      src={data.image}
                      alt={data.name}
                    />
                  </td>
                  <td className={cx("data-table")}>
                    <Button blue href={`/manager/edit/${data._id}`}>
                      Sửa
                    </Button>
                    <Button
                      yellow
                      id="btn-delete"
                      onClick={() => handleClickId(data._id)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa thông tin này</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc xóa thông tin này!</Modal.Body>
        <Modal.Footer>
          <Button className={cx("secondary")} onClick={handleClose}>
            Đóng
          </Button>
          <Button className={cx("ranger")} onClick={deleteBtn}>
            Xóa!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Item;

Item.propTypes = {
  data: PropTypes.array,
  token:  PropTypes.string,
}