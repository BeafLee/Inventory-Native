import React from "react";
import { StyleSheet, Text, View } from 'react-native';

 const ProductsHome = () => {
  return (
    <View style={styles.container}>
      <Text>Wellcome to the Meche's store</Text>
      <Text>Products home</Text>
    </View>
  );
}

export default ProductsHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});