import classNames from "classnames/bind";
import styles from "./Trailer.module.scss";
import Button from "~/components/Button";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

function Trailer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("img-shop")}></div>
      <div className={cx("content")}>
        <h1 className={cx("title")}>Dogily Farm & Petshop</h1>
        <p className={cx("description")}>
          <strong>Dogily</strong> là thương hiệu đầu tiên tại Việt Nam xây dựng thành công hệ
          sinh thái liên kết khép kín gồm các Trang trại nhập khẩu, nhân giống
          chó mèo cảnh, chuỗi siêu thị thú cưng, Phòng khám thú y, dịch vụ Spa &
          Grooming tại <strong>Tphcm, Hà Nội & Đà Lạt</strong>
        </p>
       <Link to={config.routes.dogs}><Button className={cx("btn-dog")} yellow>CHÓ CẢNH</Button></Link>
        <Link to={config.routes.cats}><Button blue>MÈO CẢNH</Button></Link>
      </div>
    </div>
  );
}

export default Trailer;
