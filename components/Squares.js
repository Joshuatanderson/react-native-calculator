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
    console.log(symbol);
    if (symbol === 'Del') {
      return this.props.handleDelete;
    }
    return this.props.handleNumber;
  }

  createSquares = (start, end, symbols) => {
    const squares = [];
    for (let i = start; i <= end; i++) {
      squares.push(<Square key={i} id={`btn-${i}`} handlePress={this.assignFunction(symbols[i])}>{symbols[i]}</Square>);
    }
    return squares;
  }

  render() {
    return (
      <View style={styles.squareCont}>
        <View style={styles.row}>
          {this.createSquares(0, 3, symbols)}
        </View>
        <View style={styles.row}>
          {this.createSquares(4, 7, symbols)}
        </View>
        <View style={styles.row}>
          {this.createSquares(8, 11, symbols)}
        </View>
        <View style={styles.row}>
          {this.createSquares(12, 15, symbols)}
        </View>
        <View style={styles.row}>
          {this.createSquares(16, 19, symbols)}
        </View>
      </View>
    );
  }
}

const symbols = ['CE', '%', '/', 'Del', '7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '(', '+'];

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
