import React, { useState, useEffect, use } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {

  const [term, setTerm] = useState(""); 

  return (
    <View style={styles.container}>
      <SearchBar 
        term={term}
        onTermChange={setTerm} 
        onTermSubmit={() => searchApi(term)} 
      />  
      {errorMessage ? <Text>{errorMessage}</Text> : null} 
    

      <Text>We have found {results.length} results</Text>
    </View>
  );
};
//can shorten these call back functions to reference to the function itself
// onTermSubmit={() => searchApi() }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default SearchScreen;
