import {
  Button,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import screenNames from '../utils/screenNames';

const Error = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        height: '10%',
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 14,
          fontWeight: 'bold',
          marginHorizontal: 10,
        }}>
        An Error Has Been Occured Pls Try Again Later !
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(screenNames.USERLIST)}>
        <Text style={styles.buttonText}>Turn Back To User List Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
