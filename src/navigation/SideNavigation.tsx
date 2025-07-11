import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDraverContent from '../components/sideNavBar/SideNav';
import Home from '../screens/home/Home';
import VehicleListScreen from '../screens/vehicleLoading/vehicleLoading';
import CatalogCategoriesScreen from '../screens/catalogCategories/catalogCategories';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      
          screenOptions={{
           
        drawerStyle: {
          width: '75%', // 👈 this makes it open half the screen width
        },
      }}
      drawerContent={props => <CustomDraverContent {...props} />}>
      <Drawer.Screen
        key="home"
        name="Home"
        component={Home}
        options={{headerShown: false, swipeEnabled: false, unmountOnBlur: true}}
       
      />   

      <Drawer.Screen
        key="vehicleLoading"
        name="VehicleLoading"
        component={VehicleListScreen}
        options={{headerShown: false, swipeEnabled: false, unmountOnBlur: true}}
       
      />    

        <Drawer.Screen
        key="catalogCategories"
        name="CatalogCategories"
        component={CatalogCategoriesScreen}
        options={{headerShown: false, swipeEnabled: false, unmountOnBlur: true}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
