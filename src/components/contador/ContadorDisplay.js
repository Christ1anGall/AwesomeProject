import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../styles';

export default (props) => {
  return (
    <Text style={[styles.normal, style.DisplayText, style.Display]}>
      {props.number}
    </Text>
  );
};

const style = StyleSheet.create({
  Display: {
    backgroundColor: 'black',
    padding: 20,
    width: 300,
  },
  DisplayText: {
    color: 'white',
  },
});
