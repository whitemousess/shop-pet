import * as httpRequest from "~/utils/httprequest";

export const getPet = async ({ page, type }) => {
  try {
    const res = await httpRequest.get("pet/show", {
      params: {
        page,
        type
      }
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};