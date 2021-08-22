import {Rowing} from '@material-ui/icons';
import React, {useState} from 'react';
// import {Navigation} from 'react-native-navigation';
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
} from 'react-native';

// var width = Dimensions.get('window').width; //full width
// var height = Dimensions.get('window').height; //full height

const SECTIONS = [
  {
    category: 'Cleaning',
    data: [
      {
        id: 1,
        title: 'Toothpaste',
        price: null,
        imgSource: require('drCodeTest/assets/images/toothpaste.jpg'),
        description: 'I am toothpaste, the BEST toothpaste',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et. Amet dictum sit amet justo donec enim. Felis imperdiet proin fermentum leo vel.',
        imgURL: `https://i.pravatar.cc/`,
        category: 'cleaning',
      },
      {
        id: 4,
        title: 'Fabreeze Spray',
        price: 7.99,
        discountAvailable: true,
        discountPercent: 0.2,
        imgSource: require('drCodeTest/assets/images/fabreeze.jpg'),
        description: 'Amazing air freshner for the home',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et. Amet dictum sit amet justo donec enim. Felis imperdiet proin fermentum leo vel.',
        imgURL: `https://i.pravatar.cc/`,
        category: 'cleaning',
      },
      {
        id: 7,
        title: 'Hoover',
        price: 89.99,
        discountAvailable: true,
        discountAmount: 10,
        imgSource: require('drCodeTest/assets/images/Hoovers.jpg'),
        description: 'Bran spanking new hoover by Byson',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et. Amet dictum sit amet justo donec enim. Felis imperdiet proin fermentum leo vel.',
        imgURL: `https://i.pravatar.cc/`,
        category: 'cleaning',
      },
    ],
  },
  {
    category: 'Puppies',
    data: [
      {
        id: 2,
        title: 'Dino Bear',
        price: 5.99,
        discountAvailable: true,
        discountPercent: 0.5,
        imgSource: require('drCodeTest/assets/images/deno-dinosaur.jpg'),
        description: 'Amazing Dino teddy bear for puppies',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et. Amet dictum sit amet justo donec enim. Felis imperdiet proin fermentum leo vel.',
        imgURL: `https://i.pravatar.cc/`,
        category: 'puppy',
      },
      {
        id: 5,
        title: 'Beagle Puppy',
        price: 6.99,
        discountAvailable: false,
        imgSource: require('drCodeTest/assets/images/Sherlock.jpg'),
        description: 'cuteness level of infinity',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et. Amet dictum sit amet justo donec enim. Felis imperdiet proin fermentum leo vel.',
        imgURL: `https://i.pravatar.cc/`,
        category: 'puppy',
      },
      {
        id: 8,
        title: 'Squeeky ball set',
        price: 7.99,
        discountAvailable: true,
        discountPercent: 0.2,
        imgSource: require('drCodeTest/assets/images/squeeky.jpg'),
        description: 'Annoying, but a very welcome distraction',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et. Amet dictum sit amet justo donec enim. Felis imperdiet proin fermentum leo vel.',
        imgURL: `https://i.pravatar.cc/`,
        category: 'puppy',
      },
    ],
  },
  {
    category: 'Sports',
    data: [
      {
        id: 3,
        title: 'Ping Pong Table',
        price: 202.99,
        discountAvailable: true,
        discountAmount: 3,
        imgSource: require('drCodeTest/assets/images/tabletennis.jpg'),
        description: 'Home ping pong table',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et. Amet dictum sit amet justo donec enim. Felis imperdiet proin fermentum leo vel.',
        imgURL: `https://i.pravatar.cc/`,
        category: 'sports',
      },
      {
        id: 6,
        title: 'Tennis shorts',
        price: 13.99,
        discountAvailable: false,
        imgSource: require('drCodeTest/assets/images/tennisshorts.jpg'),
        description: 'Very fashionable tennis shorts that turn into trousers!',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et. Amet dictum sit amet justo donec enim. Felis imperdiet proin fermentum leo vel.',
        imgURL: `https://i.pravatar.cc/`,
        category: 'sports',
      },

      {
        id: 9,
        title: 'Nike Football',
        price: 24.99,
        discountAvailable: true,
        discountPercent: 0.2,
        imgSource: require('drCodeTest/assets/images/nike.jpeg'),
        description: 'Because everyone needs a ball',
        fullDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae et. Amet dictum sit amet justo donec enim. Felis imperdiet proin fermentum leo vel.',
        imgURL: `https://i.pravatar.cc/`,
        category: 'sports',
      },
    ],
  },
];

const Item = ({item, navigation}) => {
  const [itemClicked, setItemClicked] = useState(true);
  // const animatedButtonScale = new Animated.Value(1);
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
      onPress={() => navigation.push('ProductDetails', {product: item})}
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
                  £{' '}
                  {parseFloat(
                    item.price - item.price * item.discountPercent,
                  ).toFixed(2)}
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

const Product = ({navigation}) => {
  const renderItem = ({item}) => <Item item={item} navigation={navigation} />;
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
    transform: [{scale: 1.4}],
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // aspectRatio: 4 / 3,
    resizeMode: 'cover',
    // width: '100%'
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
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 4,
  },
  textSecondary: {
    color: '#BDBDBD',
    fontWeight: 'normal',
    fontSize: 12,
    margin: 4,
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
    fontSize: 24,
    color: '#555',
    marginTop: 20,
    marginBottom: 16,
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
