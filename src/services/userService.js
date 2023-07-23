import * as httpRequest from "~/utils/httprequest";

export const getUser= async () => {
  try {
    const token = window.localStorage.token;
    const res = await httpRequest.get("account/current", {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  };
}