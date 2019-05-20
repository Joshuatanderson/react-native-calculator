import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import Square from './Square';

export default class Squares extends Component {

  createSquares = (start, end, symbols) => {
    let squares = [];
    for(let i = start; i <= end; i++){
      squares.push(<Square key={i}>{symbols[i]}</Square>)
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
            {this.createSquares(16, 18, symbols)}
          </View>
        </View>
      );
    }
  }

const symbols = ['AC', '±', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

const styles = StyleSheet.create({
    text: {
        color: 'purple',
    },
    squareCont: {
      backgroundColor:'#f55',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: 360,
      height: 120
    }
})