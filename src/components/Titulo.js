import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default ({ principal, secundario }) => {
  return (
    <View>
      <Text style={styles.title}>{principal}</Text>
      <Text style={styles.normal}>{secundario}</Text>
    </View>
  );
};
