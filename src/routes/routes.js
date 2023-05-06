import config from "~/config";

import Home from "~/pages/Home";
import Cats from "~/pages/Cats";
import Dogs from "~/pages/Dogs";
import ItemCats from "~/pages/ItemCats";
import ItemDogs from "~/pages/ItemDogs";
import News from "~/pages/News";

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.cats, component: Cats},
    {path: config.routes.dogs, component: Dogs},
    {path: config.routes.itemcats, component: ItemCats},
    {path: config.routes.itemdogs, component: ItemDogs},
    {path: config.routes.news, component: News},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
