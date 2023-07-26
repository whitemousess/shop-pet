import * as httpRequest from "~/utils/httprequest";

export const search = async (q) => {
  try {
    const res = await httpRequest.get("pet/show", {
      params: {
        q,
        page: 1,
        per_page: 5
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
