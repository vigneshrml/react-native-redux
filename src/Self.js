
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

import {useSelector,useDispatch} from "react-redux";
import {deletecart} from "./store/actions";

const Self = () => {

    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

  return (
        <View style={styles.container}>
            
          {
            cart.map((data,i)=>{
              return(
                <View key={i} style={styles.product}>
                  <Text style={styles.cartText}>{data.title}</Text>
                  <Button title='Delete' color="#222222" onPress={()=>dispatch(deletecart(data,i))} />
                </View>
              )
            })
          }
        </View>
  );
};

const styles = StyleSheet.create({
  container : {
    marginBottom : 25,
    marginHorizontal : 20,
},
  product : {
    flexDirection : 'row',
    alignItems : "center",
    justifyContent : "space-between",
    width : 350,
    marginBottom : 10
  },
  cartText : {
    fontSize : 18
  },
});

export default Self;
