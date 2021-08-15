import {Rowing} from '@material-ui/icons';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
} from 'react-native';
import {Dimensions} from 'react-native';

// var width = Dimensions.get('window').width; //full width
// var height = Dimensions.get('window').height; //full height

const Item = ({item}) => (
  <View style={styles.productContainer}>
    <View style={styles.productImageContainer}>
      <Image style={styles.productImage} source={item.imgSource} />
    </View>
    <View style={styles.productInfo}>
      <View style={styles.productText}>
        <Text style={styles.textPrimary}>{item.title}</Text>
        <Text style={styles.textPrimary}>£{item.price}</Text>
        <Text style={styles.textSecondary}>{item.description}</Text>
      </View>
      <View>
        <Image style={styles.productAvatar} source={{uri: item.imgURL}} />
      </View>
    </View>
  </View>
);

const Product = ({products}) => {
  const renderItem = ({item}) => <Item item={item} />;

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  test: {
    color: 'blue',
  },
  image: {
    width: 50,
    height: 50,
  },
  productContainer: {
    // borderColor: 'red',
    // borderWidth: 4,
    // aspectRatio: 4 / 3,
  },
  //   productItem: {},
  productImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productImageContainer: {
    aspectRatio: 4 / 3,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderColor: 'red',
    // borderWidth: 4,
    width: '100%',
    resizeMode: 'cover',
    // height: '100%',
    // aspectRatio: 4 / 3,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textPrimary: {
    color: '#FFF',
    fontWeight: 'bold',
    // fontFamily: 'IM Fell DW Pica',
    fontSize: 16,
    margin: 4,
  },
  textSecondary: {
    color: '#BDBDBD',
    fontWeight: 'normal',
    fontSize: 12,
    margin: 4,
  },
  productAvatar: {
    borderRadius: 50 / 2,
    height: 50,
    width: 50,
  },
});
