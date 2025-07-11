import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './Styles';

interface IProps {
  vehicleNumber: string;
  driverName: string;
  imageUrl: any;
  status : string;
  onPress?(): void;
}
const VehicleCard = ({vehicleNumber, driverName, imageUrl, status, onPress}: IProps) =>  {
  return (
    <View style={Styles.card}>
      <Image source={imageUrl}  style={Styles.image} />
      <View style={Styles.infoContainer}>
        <Text style={Styles.vehicleNumber}>{vehicleNumber}</Text>
         <Text style={Styles.details}>
          <Text style={Styles.label}>Driver Name: </Text>
          <Text style={Styles.value}>{driverName}</Text>
        </Text>

        <Text style={Styles.details}>
          <Text style={Styles.label}>Loading Status: </Text>
          <Text   style={[
      Styles.value,
      status === 'Loaded' ? Styles.statusLoaded : Styles.statusPending,
    ]}>{status}</Text>
        </Text>
        <TouchableOpacity
          style={Styles.button}
          onPress={onPress}>
          <Text style={Styles.buttonText}>Load Vehicle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VehicleCard;
