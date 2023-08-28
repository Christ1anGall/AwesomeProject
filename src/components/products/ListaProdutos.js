import { React } from 'react';
import { Text, FlatList } from 'react-native';

import produtos from './index';

export default () => {
  return (
    <>
      <Text>Lista de Produtos - FlatList</Text>
      <FlatList
        data={produtos}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.id} {item.name} {item.price}
            </Text>
          );
        }}
      />
      {produtos.map((produto) => {
        return (
          <Text key={produto.id}>
            {produto.id}
            {produto.name}
            {produto.price}
          </Text>
        );
      })}
    </>
  );
};

/*export default () => {
  return (
    <>
      <Text>Lista de Produtos</Text>
      {produtos.map((produto) => {
        return (
          <Text key={produto.id}>
            {produto.id}
            {produto.name}
            {produto.price}
          </Text>
        );
      })}
    </>
  );
}; */
