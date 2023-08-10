import React from 'react';
import styles from './styles';
import { Text } from 'react-native';

export default ({ min, max }) => {
  return (
    <Text style={styles.normal}>
      O Valor min = {min} é
      <Text style={styles.large}>{min < max ? ' Menor ' : ' Maior '}</Text>que o
      max = {max}
    </Text>
  );
};
