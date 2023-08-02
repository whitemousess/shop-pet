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

export const postUser = async ({ username, password, email }) => {
    const res = await httpRequest.post(
      "account/register",
      { username, password, email },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
};
