import React, { useState } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';

const Counter = ({ inicial }) => {
  const [number, setNumber] = useState(inicial);

  const increment = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const decrement = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{number}</Text>
      <Button title="+" onPress={increment} style={styles.button} />
      <Button title="-" onPress={decrement} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
  numberText: {
    fontSize: 24,
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
  },
});

export default Counter;
