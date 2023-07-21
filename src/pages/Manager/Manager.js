import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Manager.module.scss";
import SideBarManager from "./SideBarManager/SideBarManager";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

function Manager() {
  const [currentUser, setCurrentUser] = useState();
  
  useEffect(() => {
    const token = window.localStorage.token;
    if (!token) {
      setCurrentUser(false);
    }
  }, []);

  return (
    <div className={cx("wrapper")}>
      {currentUser ? (<div className={cx("manager")}>
        <SideBarManager />
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
              <tr>
                <td className={cx("data-table")}>Mark</td>
                <td>
                  <img
                    className={cx("image-pet")}
                    src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTWnKRJPFfspJMMLVkgjOwYoANB-_vbGhXnkNb15z4TKpCG3G8MCV736HaDNjyP7_Cb"
                    alt="s"
                  />
                </td>
                <td className={cx("data-table")}>
                  <Button blue>Sửa</Button>
                  <Button yellow>Xóa</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>) : (
                        <div>
                            <Button blue>Upload</Button>
                            <Button yellow>Log in</Button>
                        </div>
                    )}
    </div>
  );
}

export default Manager;
