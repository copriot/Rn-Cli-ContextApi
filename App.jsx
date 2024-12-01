import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './src/router/Routes';
import {UserProvider} from './src/context/UserContex';
import {TaskProvider} from './src/context/TaskContext';

const App = () => {
  return (
    <UserProvider>
      <TaskProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </TaskProvider>
    </UserProvider>
  );
};

export default App;
