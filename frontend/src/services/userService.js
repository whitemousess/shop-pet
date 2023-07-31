import * as httpRequest from "~/utils/httprequest";

const token = window.localStorage.token;
export const getUser= async () => {
  try {
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