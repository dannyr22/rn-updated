import {Rowing} from '@material-ui/icons';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  SectionList,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

// var width = Dimensions.get('window').width; //full width
// var height = Dimensions.get('window').height; //full height

const Item = ({item}) => {
  const newScale = 2;
  const [itemClicked, setItemClicked] = useState(true);

  const animatedButtonScale = new Animated.Value(1);

  const onPressIn = () => {
    // Animated.spring(animatedButtonScale, {
    //   toValue: 1.5,
    //   useNativeDriver: true,
    // }).start();
    setItemClicked(prev => !prev);
  };

  const onPressOut = () => {
    // Animated.spring(animatedButtonScale, {
    //   toValue: 1,
    //   useNativeDriver: true,
    // }).start();
    setItemClicked(prev => !prev);
  };

  //   const animatedScaleStyle = {
  //     transform: [{scale: animatedButtonScale}],
  //   };
  return (
    <TouchableOpacity
      //   onPress={onPressIn}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View style={styles.item}>
        <Image
          style={itemClicked ? styles.itemImage : styles.itemClicked}
          source={item.imgSource}
        />
        <View style={styles.itemInfo}>
          <View style={styles.itemText}>
            <Text style={styles.textPrimary}>{item.title}</Text>
            <View style={styles.priceContainer}>
              {item.discountAvailable ? (
                <Text style={styles.textPrimaryVoid}>£{item.price}</Text>
              ) : (
                <Text style={styles.textPrimary}>£{item.price}</Text>
              )}

              {item.discountPercent && (
                <Text style={styles.textPrimary}>
                  £{item.price - item.price * item.discountPercent}
                </Text>
              )}
              {item.discountAmount && (
                <Text style={styles.textPrimary}>
                  £{item.price - item.discountAmount}
                </Text>
              )}
              {item.price === null && <Text style={styles.textFree}>Free</Text>}
            </View>
            <Text style={styles.textSecondary}>{item.description}</Text>
          </View>
          <View>
            <Image style={styles.itemAvatar} source={{uri: item.imgURL}} />
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const Product = ({SECTIONS}) => {
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SectionList
          contentContainerStyle={{paddingHorizontal: 10}}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({section}) => (
            <>
              <Text style={styles.sectionHeader}>{section.category}</Text>
              <FlatList
                horizontal
                data={section.data}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
          renderItem={({item, section}) => {
            return null;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 8,
    flexDirection: 'column',
  },
  itemClicked: {
    transform: [{scale: 1.2}],
  },
  itemImage: {
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    aspectRatio: 4 / 3,
    resizeMode: 'cover',
  },
  itemImageContainer: {
    aspectRatio: 4 / 3,
    height: '100%',
    width: '100%',
  },
  itemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    resizeMode: 'cover',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textPrimary: {
    // color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 4,
    color: '#4863A0',
  },
  textSecondary: {
    // color: '#BDBDBD',
    fontWeight: 'normal',
    fontSize: 12,
    margin: 4,
    color: '#4863A0',
  },
  textFree: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 4,
  },
  itemAvatar: {
    borderRadius: 50 / 2,
    height: 50,
    width: 50,
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    // color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
    color: '#4863A0',
    paddingLeft: 40,
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
