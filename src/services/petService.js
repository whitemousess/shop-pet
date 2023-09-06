import * as httpRequest from "~/utils/httprequest";

const token = window.localStorage.token;

export const getPet = async ({ page , perPage , type ,q }) => {
  try {
    const res = await httpRequest.get("pet/show", {
      params: {
        page,
        per_page: perPage,
        type,
        q
      }
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const petDelete = async ({deleteID}) => {
  try {
    const res = await httpRequest.deleteData(`pet/${deleteID}/delete`, 
    {
      headers: {
        authorization: "Bearer " + token,
      }
    })
  } catch (error) {
    console.log(error);
  }
}