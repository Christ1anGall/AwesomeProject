import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function Comp({ children }) {
  return <Text style={styles.large}>Comp #Original + {children}</Text>;
}

export function Comp1() {
  return <Text style={styles.large}>Comp #Children </Text>;
}

export function Comp2() {
  return <Text style={styles.large}>Comp #02</Text>;
}

export default Comp;
