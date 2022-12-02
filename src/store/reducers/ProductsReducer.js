import { SET_PRODUCTS_ACTION } from "../actions/ProductTypes";

import product1 from "../../images/product/4.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import pic5 from "../../images/pic5.jpg";
import pic6 from "../../images/pic6.jpg";
import pic8 from "../../images/contacts/2.jpg";
import pic9 from "../../images/contacts/3.jpg";
import pic10 from "../../images/contacts/4.jpg";
import pic11 from "../../images/contacts/5.jpg";

const initialState = {
  productsState: [
    {
      id: 1,
      image: product1,
      name: "Womens Vintage Retro Bodycon Ladies",
      profile: "BL003 DRESS01",
    },
    {
      id: 2,
      image: pic2,
      name: "Gretchen Aminoff",
      profile: "Redblue Studios.",
    },
    { id: 3, image: pic3, name: "Davis Siphron", profile: "Beep Beep Inc." },
    { id: 4, image: pic4, name: "Zaire Lubin", profile: "Redblue Studios" },
    { id: 5, image: pic5, name: "Jakob Gouse", profile: "Highspeed Inc." },
    { id: 6, image: pic6, name: "Gretchen Aminoff", profile: "Beep Beep Inc." },
    { id: 7, image: pic3, name: "Davis Siphron", profile: "Redblue Studios." },
    { id: 8, image: pic8, name: "Zaire Lubin", profile: "Highspeed Inc." },
    { id: 9, image: pic9, name: "Jakob Gouse", profile: "Beep Beep Inc." },
    {
      id: 10,
      image: pic10,
      name: "Davis Siphron",
      profile: "Redblue Studios.",
    },
    {
      id: 11,
      image: pic11,
      name: "Gretchen Aminoff",
      profile: "Highspeed Inc.",
    },
    { id: 12, image: pic5, name: "Zaire Lubin", profile: "Beep Beep Inc." },
  ],
};

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS_ACTION:
      const updatedState = {
        ...state,
        ...state.productState,
        productsState: action.products,
      };
      return updatedState;
    
    default:
      return state
  }
}
