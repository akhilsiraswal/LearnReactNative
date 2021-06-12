import Orders from "../../models/orders";
import { ADD_ORDER } from "../actions/order";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Orders(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date()
      );
      console.log(newOrder);
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
      break;

    default:
      break;
  }
  return state;
};
