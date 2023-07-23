import * as httpRequest from "~/utils/httprequest";

export const getPet = async ({ page, perPage,type }) => {
  try {
    const res = await httpRequest.get("pet/show", {
      params: {
        page,
        type,
        per_page: perPage,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  };
}