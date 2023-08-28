import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ num }) => {
  return (
    <View style={style.container}>
      <Text style={style.num}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: 'black',

    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  num: {
    color: 'white',
  },
});
