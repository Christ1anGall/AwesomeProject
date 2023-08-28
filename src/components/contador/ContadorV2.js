import React, { useState } from 'react';
import { Text } from 'react-native';
import styles from '../styles';
import ContadorDisplay from './ContadorDisplay';
import Bottoes from './Bottoes';
export default (props) => {
  const [number, setNumber] = useState(0);

  const inc = () => {
    setNumber((old) => old + 1);
  };
  const dec = () => {
    setNumber((old) => old - 1);
  };

  return (
    <>
      <Text style={styles.normal}>Contador V2</Text>
      <ContadorDisplay number={number} />
      <Bottoes inc={inc} dec={dec} />
    </>
  );
};
