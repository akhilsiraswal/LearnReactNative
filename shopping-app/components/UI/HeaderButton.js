import React from "react";

import { Platform, StyleSheet, Text, View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      colors={Platform.OS === "android" ? "white" : Colors.primary}
    />
  );
};

export default CustomHeaderButton;

