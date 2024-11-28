import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={'large'} color={'green'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
  },
});
