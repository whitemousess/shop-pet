import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Trailer from "./Trailer";
import Dogs from "~/pages/Dogs";
import Cats from "~/pages/Cats";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Trailer />
      <Dogs />
      <Cats />
    </div>
  );
}

export default Home;
