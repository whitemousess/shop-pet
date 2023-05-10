import classNames from "classnames/bind";
import styles from "./Dogs.module.scss";
import ItemsPet from "~/components/ItemsPet";

const cx = classNames.bind(styles);

function Dogs() {
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
      <ItemsPet />
    </div>
  );
}

export default Dogs;
