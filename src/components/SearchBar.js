import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} color="black" />
      <TextInput placeholder="Search" textAlign="center" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'grey',
    height: 60,
    flexDirection: 'row',
    marginHorizontal: 15, // Fixed typo
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
