import classNames from "classnames/bind";
import styles from "./NotFound.module.scss";

const cx = classNames.bind(styles);

function NotFound() {
  return (
    <div className={cx("not-found-container")}>
      <h1 className={cx("not-found-heading")}>404 - Page Not Found</h1>
      <p className={cx("not-found-message")}>Oops! The page you are looking for does not exist.</p>
      {/* Thêm các yếu tố khác tùy chỉnh giao diện, ví dụ: hình ảnh, nút quay lại trang chủ, vv. */}
    </div>
  );
}

export default NotFound;
