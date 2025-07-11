import {StyleSheet} from 'react-native';
import MainStyles from '../../constant/MainStyles';

export default StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: MainStyles.COLORS.WHITE,
      },
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
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
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  vehicleNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  driverName: {
    fontSize: 14,
    color: '#555',
  },
  status: {
    fontSize: 14,
    marginBottom: 6,
    color: '#007BFF',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
