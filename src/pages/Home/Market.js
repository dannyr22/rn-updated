import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import Product from 'drCodeTest/src/components/Product/index';

const products = [
  {
    id: 1,
    title: 'toothpaste',
    price: 2.99,
    discountAvailable: false,
    imgSource: require('drCodeTest/assets/images/toothpaste.jpeg'),
    description: 'I am toothpaste, the BEST toothpaste',
    imgURL: `https://i.pravatar.cc/`,
    category: 'cleaning',
  },
  {
    id: 2,
    title: 'Dino Bear',
    price: 5.99,
    discountAvailable: true,
    imgSource: require('drCodeTest/assets/images/deno-dinosaur.jpeg'),
    description: 'Amazing Dino teddy bear for puppies',
    imgURL: `https://i.pravatar.cc/`,
    category: 'puppy',
  },
  {
    id: 3,
    title: 'Ping Pong Table',
    price: 202.99,
    discountAvailable: true,
    imgSource: require('drCodeTest/assets/images/tabletennis.jpg'),
    description: 'Home ping pong table',
    imgURL: `https://i.pravatar.cc/`,
    category: 'sports',
  },
  {
    id: 4,
    title: 'Fabreeze Spray',
    price: 7.99,
    discountAvailable: true,
    imgSource: require('drCodeTest/assets/images/fabreeze.jpeg'),
    description: 'Amazing air freshner for the home',
    imgURL: `https://i.pravatar.cc/`,
    category: 'cleaning',
  },
  {
    id: 5,
    title: 'Slippers',
    price: 6.99,
    discountAvailable: false,
    imgSource: require('drCodeTest/assets/images/Sherlock.jpeg'),
    description: 'Chewable slippers for puppies',
    imgURL: `https://i.pravatar.cc/`,
    category: 'puppy',
  },
  {
    id: 6,
    title: 'Tennis shorts',
    price: 13.99,
    discountAvailable: false,
    imgSource: require('drCodeTest/assets/images/tennisshorts.jpeg'),
    description: 'Very fashionable tennis shorts that turn into trousers!',
    imgURL: `https://i.pravatar.cc/`,
    category: 'sports',
  },
  {
    id: 7,
    title: 'hoover',
    price: 89.99,
    discountAvailable: true,
    imgSource: require('drCodeTest/assets/images/hoover.jpeg'),
    description:
      'Bran spanking new hoover created by Byson, the big brother of Dyson',
    imgURL: `https://i.pravatar.cc/`,
    category: 'cleaning',
  },
  {
    id: 8,
    title: 'Squeeky ball set',
    price: 7.99,
    discountAvailable: true,
    imgSource: require('drCodeTest/assets/images/squeeky.jpg'),
    description: 'Annoying as hell but a very welcome distraction',
    imgURL: `https://i.pravatar.cc/`,
    category: 'cleaning',
  },
  {
    id: 9,
    title: 'Nike Football',
    price: 24.99,
    discountAvailable: true,
    imgSource: require('drCodeTest/assets/images/nike.jpeg'),
    description: 'Because everyone needs a ball',
    imgURL: `https://i.pravatar.cc/`,
    category: 'sports',
  },
];
export default class Market extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Product products={products} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
