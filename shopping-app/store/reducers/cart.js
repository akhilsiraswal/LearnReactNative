import CartItem from "../../models/cart-item";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      let updatedOrNewCartItem;
      if (state.items[addedProduct.id]) {
        // already in the list ...
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };
    case REMOVE_FROM_CART:
      const cartItem = state.items[action.pid];
      const currentQuantity = cartItem.quantity;
      let updatedCartItem;
      if (currentQuantity > 1) {
        updatedCartItem = new CartItem(
          cartItem.quantity - 1,
          cartItem.productPrice,
          cartItem.productTitle,
          cartItem.sum - cartItem.productPrice
        );
      } else {
        const updatedCartItem = { ...state.items };
        delete updatedCartItem[action.pid];
      }
      return {
        ...state,
        items: updatedCartItem,
        totalAmount: state.totalAmount - cartItem.productPrice,
      };

    default:
      break;
  }

  return state;
};
