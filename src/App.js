import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Mega from './components/mega/Mega';

export default () => (
  <SafeAreaView style={styles.container}>
    <Mega qtNumeros={7} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    padding: 20,
  },
});
