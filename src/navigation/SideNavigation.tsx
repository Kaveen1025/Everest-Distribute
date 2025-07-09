import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDraverContent from '../components/sideNavBar/SideNav';
import Home from '../screens/home/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDraverContent {...props} />}>
      <Drawer.Screen
        key="home"
        name="Home"
        component={Home}
        options={{headerShown: false, swipeEnabled: false, unmountOnBlur: true}}
      />    
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
