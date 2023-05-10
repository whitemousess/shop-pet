import classNames from "classnames/bind";
import styles from "./Cats.module.scss";
import ItemsPet from "~/components/ItemsPet";

const cx = classNames.bind(styles);

function Dogs() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <span></span>
        <strong className={cx("title-dog")}>MÈO CẢNH</strong>
        <span></span>
      </div>
      <div className={cx("description")}>
        <span>
          Mèo cảnh thuần chủng được nhập khẩu & nhân giống tại trại mèo Dogily
          Cattery thành viên Hiệp hội mèo thế giới TICA.
        </span>
      </div>
      <ItemsPet />
    </div>
  );
}

export default Dogs;
