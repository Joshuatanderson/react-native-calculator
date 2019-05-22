import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import Square from './Square';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Squares extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  createSquares = (start, end, symbols) => {
    let squares = [];
    for(let i = start; i <= end; i++){
      squares.push(<Square key={i} id={`btn-${i}`} handlePress={this.props.handlePress}>{symbols[i]}</Square>)
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

const symbols = ['CE', '%', '/', 'Del', '7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '(', '+']

const styles = StyleSheet.create({
    squareCont: {
      backgroundColor:'#555',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex: 1,
      width: wp('100%')
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: wp('100%'),
    }
})