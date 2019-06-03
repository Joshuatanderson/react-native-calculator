import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Square from './Square';

export default class Squares extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  assignFunction = (symbol) => {
    const isSymbol = ['%' || '/' || '÷' || '×' || '-' || '+'].find(item => item === symbol);
    console.log(isSymbol);
    if (symbol === 'Del') {
      return this.props.handleDelete;
    } if (isSymbol !== undefined) {
      return this.props.handleOperator;
    }
    return this.props.handleNumber;
  }

  createSquares = (start, end, symbols, squareConfig) => {
    const squares = [];
    for (let i = start; i <= end; i += 1) {
      squares.push(<Square key={i} id={`btn-${i}`} handlePress={squareConfig[symbols[i]]}>{symbols[i]}</Square>);
    }
    return squares;
  }

  render() {
    const parentheses = this.props.parenthesesState ? '(' : ')';
    const symbols = ['CE', '%', '/', 'Del', '7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', parentheses, '+'];
    const { squareConfig } = this.props;
    return (
      <View style={styles.squareCont}>
        <View style={styles.row}>
          {this.createSquares(0, 3, symbols, squareConfig)}
        </View>
        <View style={styles.row}>
          {this.createSquares(4, 7, symbols, squareConfig)}
        </View>
        <View style={styles.row}>
          {this.createSquares(8, 11, symbols, squareConfig)}
        </View>
        <View style={styles.row}>
          {this.createSquares(12, 15, symbols, squareConfig)}
        </View>
        <View style={styles.row}>
          {this.createSquares(16, 19, symbols, squareConfig)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  squareCont: {
    backgroundColor: '#555',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexBasis: wp('125'),
    width: wp('100%')
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: wp('100%'),
  }
});
