import React from 'react';

import { StyleSheet, View } from 'react-native';
import Quadrado from './Quadrado';

export default () => {
  return (
    <View style={styles.FlexV1}>
      <Quadrado color={'red'} />
      <Quadrado />
      <Quadrado color={'green'} />
      <Quadrado color={'red'} />
      <Quadrado />
      <Quadrado color={'green'} />
    </View>
  );
};

const styles = StyleSheet.create({
  FlexV1: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    height: '50%',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  },
});
