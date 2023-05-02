import config from "~/config";

import Home from "~/pages/Home";
import BuyCats from "~/pages/BuyCats";
import BuyDogs from "~/pages/BuyDogs";
import Cats from "~/pages/Cats";
import Dogs from "~/pages/Dogs";
import ItemCats from "~/pages/ItemCats";
import ItemDogs from "~/pages/ItemDogs";
import News from "~/pages/News";

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.home, component: BuyCats},
    {path: config.routes.home, component: BuyDogs},
    {path: config.routes.home, component: Cats},
    {path: config.routes.home, component: Dogs},
    {path: config.routes.home, component: ItemCats},
    {path: config.routes.home, component: ItemDogs},
    {path: config.routes.home, component: News},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
