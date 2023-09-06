import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Dogs.module.scss";
import ItemsPet from "./ItemsPet";
import * as petService from "~/services/petService";
import config from "~/config";

const cx = classNames.bind(styles);

function Dogs() {
  const [dog, setDog] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const endURL = window.location.href.split("/").pop();
  const params = new URLSearchParams(window.location.search);

  const page = params.get("page");

  const handlePageChange = (pageNumber) => {
    window.location = `/dogs?page=${pageNumber}`;
  };

  useEffect(() => {
    // call Api User
    petService
      .getPet({ page: page, perPage: 8, type: "dogs" })
      .then((data) => {
        setDog((prePet) => [...prePet, ...data.data]);
        setTotalPages(data.totalPages);
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
      <ItemsPet data={dog} />
      {endURL ? (
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              className={cx("btn-page")}
              key={index}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      ) : (
        <Link className={cx("btn-more")} to={config.routes.dogs}>
          Xem thêm
        </Link>
      )}
    </div>
  );
}

export default Dogs;
