import config from "~/config";

import Home from "~/pages/Home";
import Cats from "~/pages/Cats";
import Dogs from "~/pages/Dogs";
import ItemCats from "~/pages/ItemCats";
import ItemDogs from "~/pages/ItemDogs";
import News from "~/pages/News";
import Info from "~/pages/Info";
import Login from "~/pages/Login";
import User from "~/pages/User";
import EditUser from "~/pages/User/EditUser";
import Register from "~/pages/Register";
import Managers from "~/pages/Manager";
import AddPet from "~/pages/Manager/AddPet";
import EditPet from "~/pages/Manager/EditPet";

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.cats, component: Cats},
    {path: config.routes.dogs, component: Dogs},
    {path: config.routes.itemCats, component: ItemCats},
    {path: config.routes.itemDogs, component: ItemDogs},
    {path: config.routes.news, component: News},
    {path: config.routes.login, component: Login , layout: null},
    {path: config.routes.register, component: Register , layout: null},
    {path: config.routes.user, component: User },
    {path: config.routes.EditUser, component: EditUser },

    {path: config.routes.info, component: Info},
    {path: config.routes.manager, component: Managers},
    {path: config.routes.addPet, component: AddPet},
    {path: config.routes.editPet, component: EditPet},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };