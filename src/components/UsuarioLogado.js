import React from 'react';
import { Text } from 'react-native';
import Logado from './Logado';

export default ({ usuario = {} }) => {
  return (
    <>
      <Logado teste={usuario && usuario.name && usuario.email}>
        <Text>
          {usuario.name} - {usuario.email}
        </Text>
      </Logado>
    </>
  );
};
