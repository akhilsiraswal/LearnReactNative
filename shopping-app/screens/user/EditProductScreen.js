import React, { useState, useEffect, useCallback } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import * as productsActions from "../../store/actions/products";
const EditProductScreen = (props) => {
  const dispatch = useDispatch();
  const prodId = props.navigation.getParam("productId");

  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");

  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );

  const [price, setPrice] = useState("");

  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );

  const submitHandler = useCallback(() => {
    if (editedProduct) {
      dispatch(
        productsActions.updateProduct(prodId, title, description, imageUrl)
      );
    } else {
      dispatch(
        productsActions.createProduct(title, description, price, imageUrl)
      );
    }
    props.navigation.goBack();
  }, [dispatch, title, description, price, imageUrl, prodId]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image Url</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}

        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = (navData) => {
  const submitFn = navData.navigation.getParam("submit");
  return {
    headerTitle: navData.navigation.getParam("productId")
      ? "Edit Product"
      : "Add Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    ),
  };
};

export default EditProductScreen;

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
