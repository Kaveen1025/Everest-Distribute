import { SET_CATALOG_CATEGORIES } from "../../constant/ReduxConstant";




export const setCatalogCategories = (data: any) => ({
  type: SET_CATALOG_CATEGORIES,
  payload: data,
});