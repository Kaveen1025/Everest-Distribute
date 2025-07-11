// screens/VehicleListScreen.js
import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import Styles from './Styles';
import VehicleCard from '../../components/vehicleCard/vehicleCard';
import HeaderBar from '../../components/headerBar/HeaderBar';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

const VehicleListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [vehicles, setVehicles] = useState([
    {
      id: '1',
      imageUrl: require('../../assets/images/truck.png'),
      vehicleNumber: 'AB-1234',
      driverName: 'John Doe',
      status: 'Pending',
      onPress: () => {navigation.navigate('CatalogCategories' as never)}
    },
    {
      id: '2',
      imageUrl: require('../../assets/images/truck.png'),
      vehicleNumber: 'CD-5678',
      driverName: 'Jane Smith',
      status: 'Loaded',
      onPress:() => {navigation.navigate('CatalogCategories' as never)}
    },

     {
      id: '3',
      imageUrl: require('../../assets/images/truck.png'),
      vehicleNumber: 'CD-5678',
      driverName: 'Jane Smith',
      status: 'Loaded',
      onPress: () => {navigation.navigate('CatalogCategories' as never)}
    },
    // Add more items as needed
  ]);

  const handleLoadPress = (id:any) => {
    setVehicles((prev) =>
      prev.map((v) =>
        v.id === id ? {...v, status: 'Loaded'} : v
      )
    );
  };

  return (
<SafeAreaView style={Styles.container}>
    <HeaderBar
        isMenu={false}
        onPress={() => navigation.navigate('Home' as never)}
        page="Vehicle Loading"
      />
    <View style={Styles.screen}>
      <FlatList
         data={vehicles}
         keyExtractor={(item) => item.id}
        renderItem={({item}) => (
           <VehicleCard vehicleNumber={item.vehicleNumber} driverName={item.driverName} imageUrl={item.imageUrl} status={item.status} onPress={item.onPress}/>
         )}
     />
    </View>
    </SafeAreaView>
  );
};

export default VehicleListScreen;
