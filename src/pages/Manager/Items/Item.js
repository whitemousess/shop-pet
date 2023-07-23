import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import config from "~/config";
import styles from "./Item.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Item({ data = [] }) {

  return (
    <div>
      <input type="text" className={cx("search-manager")} placeholder="Tìm kiếm ..."/>
      <Link to={config.routes.addPet}><Button blue>Thêm</Button></Link>
      <div className={cx("manager")}>
        <div className={cx("container")}>
          <table className={cx("table")}>
            <thead>
              <tr>
                <th className={cx("header")}>Tên vật nuôi</th>
                <th className={cx("header")}>Hình ảnh</th>
                <th className={cx("header")}>Xử lý</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => (
                <tr key={data._id}>
                  <td className={cx("data-table")}>{data.name}</td>
                  <td>
                    <img
                      className={cx("image-pet")}
                      src={data.image}
                      alt={data.name}
                    />
                  </td>
                  <td className={cx("data-table")}>
                    <Button blue>Sửa</Button>
                    <Button yellow>Xóa</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Item;
