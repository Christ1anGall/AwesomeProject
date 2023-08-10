import React from 'react';
import { Button } from 'react-native';

export default (props) => {
  function Executar() {
    console.warn('BATAAT');
  }
  return (
    <>
      <Button title="Executar!" onPress={Executar} />

      <Button
        title="Executar!2"
        onPress={(props) => {
          console.warn(props);
        }}
      />

      <Button
        title="Executar!3"
        onPress={(props) => {
          console.warn(!!true);
        }}
      />
    </>
  );
};
