import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import CustomHeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No favourite meals found!!... Start adding some.
        </DefaultText>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
