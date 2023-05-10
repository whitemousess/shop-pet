import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("footer-header")}>
          <div className={cx("description")}>
            <img
              className={cx("img-shop")}
              src="https://dogily.vn/wp-content/uploads/2022/07/Logo-Footer-3.png"
              alt="logo"
            />
            <p className={cx("label")}>
              Dogily Farm & Petshop là đơn vị đầu tiên tại Việt Nam xây dựng thành
              công hệ sinh thái liên kết khép kín gồm trang trại chó mèo cảnh, cửa
              hàng thức ăn và phụ kiện thú cưng, phòng khám thú y, spa chó mèo..
            </p>
          </div>
          <div className={cx("description")}>
            <img
              className={cx("img-face")}
              src="https://dogily.vn/wp-content/uploads/2022/07/FanPage-Dogily.jpg"
              alt="logo"
            />
          </div>
          <div className={cx("description")}>
            <div>
              <strong className={cx("title")}>VỀ DOGILY</strong>
              <span></span>
              <p>
                <strong>Cửa hàng : </strong>
                <Link
                  to="https://goo.gl/maps/Vk63zdqqRxcmfuz3A"
                  className={cx("address-des")}
                >
                  606/121 đường 3 tháng 2, phường 14, quận 10, thành phố Hồ Chí
                  Minh.
                </Link>
                <strong>(Hẻm Xe Hơi lớn đỗ cửa). Pet Farm Đà Lạt:</strong> Km 2,
                đường Quảng Thắng, xã Xuân Thọ, Tp. Đà Lạt, tỉnh Lâm Đồng. Hotline:
                0965.086.079 Website: https://dogily.vn Email: dogily.vn@gmail.com
              </p>
            </div>
          </div>
      </div>

      <div className={cx("content")}>
        <strong className={cx("title")}>
          Địa chỉ shop, cửa hàng mua chó mèo cảnh, thú cưng uy tín ở đâu tại
          Tphcm, Hà nội?
        </strong>
        <ul>
          <li>
            <Link to="https://goo.gl/maps/k2PXYBPprvcj732V8">
              606/121 đường 3 tháng 2, phường 14, quận 10, thành phố Hồ Chí
              Minh.
            </Link>{" "}
            <strong>(Hẻm Xe Hơi lớn đỗ cửa).</strong>
          </li>
          <li>
            <Link to="https://goo.gl/maps/53yPBdN397NghnELA">
              171 Quang Trung, Phường 10, quận Gò Vấp, thành phố Hồ Chí Minh
            </Link>
          </li>
          <li>
            <Link to="https://goo.gl/maps/gqi3eayHsoZrZQTWA">
              Số 95, đường Nghi Tàm, phường Yên Phụ, quận Tây Hồ, Tp Hà Nội.
            </Link>
          </li>
          <li>
            <strong>Tiệm cà phê chó mèo thú cưng MeowGo Cafe Đà Lạt:</strong>
            <Link to="https://goo.gl/maps/K8bSmNaxkDASU34n6">
              {" "}
              70/1 Pasteur, phường 4, thành phố Đà Lạt, tỉnh Lâm Đồng.
            </Link>
          </li>
          <li>
            <strong>Pet Farm Đà Lạt:</strong>{" "}
            <Link to="https://goo.gl/maps/RjDCnVRFQpEoRA3b9">
              Km 2, đường Quảng Thắng, xã Xuân Thọ, Tp. Đà Lạt, tỉnh Lâm Đồng.
            </Link>
          </li>
        </ul>
      </div>

      <div className={cx("content")}>
        <strong className={cx("title")}>Thông báo</strong>
        <p>
          Tuân thủ Nghị định số 185/2013/NĐ-CP của Chính phủ và luật quảng cáo
          số 16/2012/ QH13 về kinh doanh bán hàng qua mạng, Dogily.vn không mua
          bán sản phẩm online trực tuyến qua mạng internet. Website chỉ là kênh
          thông tin tư vấn, tham khảo về cách nuôi, chăm sóc, giá bán & nơi mua
          chó mèo cảnh, thú cưng ở đâu uy tín? Bạn đọc có nhu cầu xin liên hệ
          Hotline: 0965.086.079 hoặc đến trực tiếp các cửa hàng, nông trại chó
          mèo cảnh để được tư vấn trực tiếp.
        </p>
        <p className={cx("tks")}>Chân thành cảm ơn!</p>
      </div>

      <div className={cx("footer")}>
        <p className={cx("copy-right")}><strong>Bản quyền 2023 © Dogily PetShop</strong></p>
      </div>
    </div>
  );
}

export default Footer;
