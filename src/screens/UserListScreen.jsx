import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../context/UserContex';
import Loader from '../components/Loader';
import {useNavigation} from '@react-navigation/native';
import screenNames from '../utils/screenNames';
const UserListScreen = () => {
  const {users, error, loading} = useContext(UserContext);
  console.warn(users);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(screenNames.USERDETAIL, {userId: item.id})
              }>
              <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
