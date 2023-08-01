import { useState, useEffect } from "react";
import * as petSevice from "~/services/petService";
import classNames from "classnames/bind";
import styles from "./Cats.module.scss";
import ItemsPet from "./ItemsPet";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

function ItemDogs() {
  const [cat, setCat] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const endURL = window.location.href.split("/").pop();
  const params = new URLSearchParams(window.location.search);

  const page = params.get("page");

  const handlePageChange = (pageNumber) => {
    window.location = `/itemcats?page=${pageNumber}`;
  };


  useEffect(() => {
    // call Api User
    petSevice
      .getPet({ page: page, perPage: 8, type: "itemDog" })
      .then((data) => {
        setCat((prePet) => [...prePet, ...data.data]);
        setTotalPages(data.totalPages);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <span></span>
        <strong className={cx("title-dog")}>Đồ dùng cho chó</strong>
        <span></span>
      </div>
      <div className={cx("description")}>
        <span>
        Đồ dùng cho chó căn bản là những món mà người nuôi ai cũng phải sở
          hữu.Trước khi nuôi bất kỳ loài chó nào, bạn cần phải có một số thứ cần
          thiết để hỗ trợ cho sự phát triển toàn diện của chúng. Nếu lần đầu bạn
          nuôi cún thì đây có thể là một bài viết hữu ích đấy!
        </span>
      </div>
      <ItemsPet data={cat} />
      <div>
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
          <Link className={cx("btn-more")} to={config.routes.itemDogs}>
            Xem thêm
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemDogs;
