import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = () => {
  return <MealList />;
};

FavouritesScreen.navigationOptions = { headerTitle: "Your Favourites" };

export default FavouritesScreen;
