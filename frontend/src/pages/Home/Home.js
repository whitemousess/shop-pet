import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Trailer from "./Trailer";
import Dogs from "~/pages/Dogs";
import Cats from "~/pages/Cats";
import ItemDogs from "~/pages/ItemDogs";
import ItemCats from "~/pages/ItemCats";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Trailer />
      <Dogs />
      <Cats />
      <ItemDogs />
      <ItemCats />
    </div>
  );
}

export default Home;
