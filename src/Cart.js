
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useSelector} from "react-redux";

const Cart = () => {

    const cart = useSelector((state)=>state.cart);

  return (
        <View style={styles.container}>
             <Text style={styles.cartText}>Cart Count: <Text style={styles.cart}> {cart.length} </Text></Text>
        </View>
  );
};

const styles = StyleSheet.create({
  container : {
    marginBottom : 25,
    marginHorizontal : 20
},
   cartText : {
      fontSize : 18
   },
    cart : {
        backgroundColor : "#222222",
        color : "white",
        fontSize : 18
    }
});

export default Cart;
