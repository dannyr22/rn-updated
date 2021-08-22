import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Pressable,
} from 'react-native';

const ProductDetails = ({route, navigation}) => {
  const product = route.params.product;
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.product}>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back to products</Text>
        </Pressable>
        <View style={styles.content}>
          <Image style={styles.productImage} source={product.imgSource} />
          <View style={styles.productInfo}>
            <View style={styles.productText}>
              <Text style={styles.textPrimary}>{product.title}</Text>
              <View style={styles.priceContainer}>
                {product.discountAvailable ? (
                  <Text style={styles.textPrimaryVoid}>£{product.price}</Text>
                ) : (
                  <Text style={styles.textPrimary}>£{product.price}</Text>
                )}

                {product.discountPercent && (
                  <Text style={styles.textPrimary}>
                    £{' '}
                    {parseFloat(
                      product.price - product.price * product.discountPercent,
                    ).toFixed(2)}
                  </Text>
                )}
                {product.discountAmount && (
                  <Text style={styles.textPrimary}>
                    £{product.price - product.discountAmount}
                  </Text>
                )}
                {product.price === null && (
                  <Text style={styles.textFree}>Free</Text>
                )}
              </View>
              <Text style={styles.textSecondary}>
                {product.fullDescription}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  product: {
    flex: 1,
    alignItems: 'flex-start',
    // backgroundColor: '#DDD',
  },
  buttonContainer: {
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#4863A0',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
    // justifyContent: 'space-evenly',
    flex: 1,
  },
  productImage: {
    height: 450,
    aspectRatio: 1 / 1,
    // borderColor: 'red',
    // borderWidth: 4,
    resizeMode: 'cover',
    alignSelf: 'center',
    // width: '100%',
  },
  productInfo: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // resizeMode: 'cover',
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: 8,
    // alignSelf: 'center',
  },
  textPrimary: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 4,
    color: '#4863A0',
  },
  textSecondary: {
    fontWeight: 'normal',
    fontSize: 16,
    margin: 4,
    color: '#4863A0',
  },
  textFree: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 4,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  textPrimaryVoid: {
    color: '#CCC',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 4,
    textDecorationLine: 'line-through',
  },
});
