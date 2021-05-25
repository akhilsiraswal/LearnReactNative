import React from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");

    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

    return {
      headerTitle: selectedCategory.title,
    };
  };

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
