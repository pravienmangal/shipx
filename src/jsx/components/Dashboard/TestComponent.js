import React from "react"
import { useStateValue } from "../../../store/selectors/useStateValue"

const SubTitle = () => {
  const { products } = useStateValue();
  return <h2>{products.productsState[0].name}</h2>;
}

export default SubTitle;
