import React from 'react';
// import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import Product from 'drCodeTest/src/components/screens/Product';
import ProductDetails from 'drCodeTest/src/components/screens/ProductDetails';
import {createStackNavigator} from '@react-navigation/stack';

const MarketStack = createStackNavigator();

const MarketStackScreen = () => {
  return (
    <MarketStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <MarketStack.Screen
        name="Product"
        component={Product}
        // options={{navigation}}
        // options={{
        //   headerTitle: 'Products',
        // }}
      />
      <MarketStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        // options={{navigation}}
      />
    </MarketStack.Navigator>
  );
};

// export default class Market extends Component {
//   render() {
//     return (
//       <SafeAreaView>
//         <View>
//           <Product SECTIONS={SECTIONS} />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

export default MarketStackScreen;

// const styles = StyleSheet.create({});
