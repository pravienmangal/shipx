import { SET_PRODUCTS_ACTION } from "./ProductTypes";

export const setProductsAction = (products) => {
  return (dispatch) => {
    dispatch(setProducts(products));
  };
}

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS_ACTION,
    products: products,
  };
}
