import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  // term is the prop name and newTerm is the prop value
  // onTermChange is the prop name and setTerm is the prop value
  // term and onTermChange are props passed from the parent component
  // term is the value of the input field
  // onTermChange is the function that updates the value of the input field

  return (
    <View style={styles.background}>
      <Feather name="search" size={30} color="black" />
      <TextInput
        autoCapitalize="none" // these props are used to prevent the keyboard from auto capitalizing the input
        autoCorrect={false} // these props are used to prevent the keyboard from auto correcting the input
        placeholder="Search"
        textAlign="center"
        style={styles.input}
        value={term}
        onChangeText={onTermChange} // this is the child component taking the props from the parent
        onEndEditing={onTermSubmit} // when the user submits the input, the function onTermSubmit is called
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'grey',
    height: 60,
    flexDirection: 'row',
    marginHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
});

export default SearchBar;
