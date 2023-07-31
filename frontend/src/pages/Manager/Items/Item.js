import axios from "axios";
import classNames from "classnames/bind";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

import styles from "./Item.module.scss";
import Button from "~/components/Button";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function Item({}) {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const token = window.localStorage.token;

  const handleClose = () => setShow(false);

  const handleClickId = (id) => {
    setDeleteId(id);
    setShow(true);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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

  useEffect(() => {
    if (!token) {
      window.location = "/login";
      return;
    }
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1407/api/pet/show?page=${currentPage}`
      );
      setData(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

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
          <div>
            {Array.from({ length: totalPages }, (_, index) => (
              <button className={cx("btn-page")} key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
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
