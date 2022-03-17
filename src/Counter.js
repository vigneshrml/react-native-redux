
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';

import {useSelector , useDispatch} from "react-redux";
import {addtion , subtract , addcart} from "./store/actions";


import Self from './Self';
import Cart from './Cart';

const Counter = () => {

    const data = useSelector((state)=>state.counter);
    const dispatch = useDispatch();

    const item = [{
      title : "carrot",
      price : 50
    },{
      title : "curry leaf",
      price : 10
    },{
      title : "Brinjal",
      price : 25
    },{
      title : "Tomato",
      price : 58
    }]

  return (
        <View style={styles.container}>
          <Text style={styles.cartHeaderText}>Vanigam E-commerce</Text>

          
          <View style={styles.cart}>
              <Cart/>
              <Self/>
          </View>
{/*             
            <Button title='ADD' onPress={()=>dispatch(addtion())} />
            <Text>Counter: {data}</Text>
            
            <Button title='MINUS' onPress={()=>dispatch(subtract())} /> */}

            <Text style={styles.cartHeaderText}>Add Product to cart!</Text>

          {
            item.map((data,i)=>{
              return(
                  <View key={i} style={styles.product}>
                    <Text style={styles.cartText}>{data.title}</Text>
                    <Button title='ADD CART' color="#222222" onPress={()=>dispatch(addcart(data))} />
                  </View>
              )
            })
          }

        </View>
  );
};

const styles = StyleSheet.create({
  container : {
      flex : 1,
      alignItems : "center",
      justifyContent : "center",
      marginHorizontal : 20
  },
  product : {
    flexDirection : 'row',
    alignItems : "center",
    justifyContent : "space-between",
    width : "100%",
    marginBottom : 10
  },
  cartText : {
    fontSize : 18
  },
  cartHeaderText : {
    fontSize : 18,
    marginBottom : 30
  },
  cart : {
    alignItems : "center",
    justifyContent : "center",
    backgroundColor  : "#F9F9F9"
  }
});

export default Counter;
