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
      
    </SafeAreaView>
  );
};

export default Home;
