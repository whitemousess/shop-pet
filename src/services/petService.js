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

export const postPet = async () => {
  try {
    const res = await httpRequest.post("pet/show");
    return res.data;
  } catch (error) {
    console.log(error);
  };
}