import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';

export default (props) => {
  const [nome, setnome] = useState();

  return (
    <SafeAreaView>
      <Text>{nome}</Text>
      <TextInput
        value={nome}
        placeholder="Digite Seu Nome"
        onChangeText={(newText) => setnome(newText)}
      />
    </SafeAreaView>
  );
};
