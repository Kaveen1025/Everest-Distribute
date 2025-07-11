import {StyleSheet} from 'react-native';
import MainStyles from '../../constant/MainStyles';

export default StyleSheet.create({

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 25,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  vehicleNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  driverName: {
    fontSize: 15,
    color: '#555',
    marginTop: 5
  },
  status: {
    fontSize: 15,
    marginBottom: 6,
    color: '#007BFF',
     marginTop: 5
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginTop: 15,
    marginBottom: 5

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  details:{
marginTop: 5
  },

  label: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333', // or any color you want for the label
  
},
value: {
  fontSize: 16,
  color: MainStyles.COLORS.GREY, // or another color for the value
    fontWeight: '400'
},


statusLoaded: {
  color: 'green',
  fontWeight: '500'
},
statusPending: {
  color: 'red',
  fontWeight: '500'
},
});
