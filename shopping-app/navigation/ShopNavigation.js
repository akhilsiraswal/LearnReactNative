import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductOverviewScreen";

import { Platform } from "react-native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.accent,
    },
  }
);

export default createAppContainer(ProductsNavigator);
