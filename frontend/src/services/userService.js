import * as httpRequest from "~/utils/httprequest";

const token = window.localStorage.token;
export const getUser = async () => {
  try {
    const res = await httpRequest.get("account/current", {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const putUser = async ({avatar, email, username, password}) => {
  try {
    let formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);

    const res = await httpRequest.put("account/current/edit", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: "Bearer " + token,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
