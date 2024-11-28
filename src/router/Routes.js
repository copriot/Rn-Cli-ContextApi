import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskScreen from '../screens/TaskScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import UserListScreen from '../screens/UserListScreen';
import screenNames from '../utils/screenNames';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.USERLIST}>
      <Stack.Screen
        name={screenNames.USERDETAIL}
        component={UserDetailScreen}
      />
      <Stack.Screen name={screenNames.TASK} component={TaskScreen} />
      <Stack.Screen name={screenNames.USERLIST} component={UserListScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
