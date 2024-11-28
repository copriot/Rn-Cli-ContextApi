import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../context/UserContex';
import Loader from '../components/Loader';
const UserListScreen = () => {
  const {users, error, loading} = useContext(UserContext);
  console.warn(users);
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({});
