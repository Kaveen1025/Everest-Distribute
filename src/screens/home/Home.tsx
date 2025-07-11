import {
  DrawerActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  LogBox,
  TouchableOpacity,
  BackHandler,
  Alert,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import homeStyles from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderBar from '../../components/headerBar/HeaderBar';
import {useDispatch} from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import {FlatGrid} from 'react-native-super-grid';
import {
  endLoading,
  setSpinnerMessage,
  startLoading,
} from '../../redux/action/SpinnerAction';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [designation, setDesignation] = useState(null);
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  

  const items = [
    {
      name: 'Vehicle Loading',
      imagePath: require('../../assets/images/truck.png'),
      onPress: () =>
        navigation.navigate('VehicleLoading' as never),
    },

    // // Only display this item if designation is '1'
    // ...(designation === '1'
    //   ? [
    //       {
    //         name: 'View Representative Details',
    //         imagePath: require('../../assets/images/businessman.png'),
    //         onPress: () => navigation.navigate('Home 'as never),
    //       },
    //     ]
    //   : []),

    {
      name: 'Distribute Goods',
      imagePath: require('../../assets/images/distribution.png'),
      onPress: () =>
        navigation.navigate('Home 'as never),
    },

    {
      name: 'Vehicle Unloading',
      imagePath: require('../../assets/images/unload.png'),
      onPress: () =>
        navigation.navigate('Home 'as never),
    },
    
   

    {
      name: 'Sync Data',
      imagePath: require('../../assets/images/sync.png'),
      onPress: () => syncAllData(),
    },
  ];

  const syncAllData = async () => {
  
  };

  const loadAllRepsAccoManager = async () => {
   
  };

  const loadAllRepsDetailsAccoManager = async () => {
   
  };

  const loadAllCustomers = async () => {
   
  };

  const loadAllProducts = async () => {
    
  };

  const loadSelseRefs = async () => {
   
  };

  const loadAreaData = async () => {
   
  };

  const loadAreaDataAccoRef = async () => {
    
  };

  const getAllOrdersData = async () => {
   
  };

  return (
    <SafeAreaView style={homeStyles.container}>
      <HeaderBar
        isMenu={true}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        page="Home"
      />

      <View style={homeStyles.imageView}>
        <Image
          source={require('../../assets/images/Ehpl.png')}
          style={homeStyles.imageStyle}
        />
      </View>
      <Spinner />
      {items.length > 0 ? (
        <FlatGrid
          itemDimension={190}
          data={items}
          style={homeStyles.gridView}
          spacing={10}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[homeStyles.itemContainer, homeStyles.shadowProp]}
              onPress={item.onPress}>
              <Image source={item.imagePath} style={homeStyles.image}></Image>
              <Text style={homeStyles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={homeStyles.noDetails}>No Data to Show</Text>
      )}
    </SafeAreaView>
  );
};

export default Home;
