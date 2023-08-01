const routes = {
  notfound: "*",

  home: "/",

  user: "/user/profile",
  EditUser: "/user/profile/edit",

  info: "/pet/:id",
  cats: "/cats",
  dogs: "/dogs",
  itemCats: "/itemcats",
  itemDogs: "/itemdogs",

  login: "/login",
  register: "/register",

  addPet: "/manager/add",
  editPet: "/manager/edit/:id",
  manager: "/manager/pets",
};

export default routes;
