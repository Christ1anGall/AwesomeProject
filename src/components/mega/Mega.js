import React, { Component } from 'react';
import { Button, Text, TextInput } from 'react-native';
import styles from '../styles';

export default class Mega extends Component {
  state = {
    qtNumeros: this.props.qtNumeros,
    numeros: [],
  };

  alterarQtNumeros = (qtde) => {
    this.setState({ qtNumeros: +qtde });
  };

  gerarNumeroNContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtNumeros)
      .fill()
      .reduce((n) => [...n, this.gerarNumeroNContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({ numeros });
  };

  render() {
    return (
      <>
        <Text style={styles.large}>
          Gerador de Mega-Sena {this.state.qtNumeros}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtd de Numeros"
          value={this.state.qtNumeros}
          onChangeText={this.alterarQtNumeros}
        />
        <Button title="gerar" onPress={this.gerarNumeros} />
        <Text>{this.state.numeros.join(',')}</Text>
      </>
    );
  }
}
