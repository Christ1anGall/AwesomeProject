import React from 'react';
import { StyleSheet, View } from 'react-native';
import MinMAx from './components/MinMax';
import Titulo from './components/Titulo';
import Contador from './components/Contador';

export default () => (
  <View style={styles.container}>
    <Contador inicial={10} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    height: '100%',
    alignItems: 'center',
  },
});
