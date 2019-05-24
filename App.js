/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Squares from './components/Squares';
import Result from './components/Result';
import NumberLog from './components/NumberLog';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: null,
      stack: []
    };
  }

  handleNumber = (number) => {
    const currentStack = this.state.stack;
    const last = currentStack[currentStack.length - 1] || '';
    const added = number;
    this.setState({
      stack: [...currentStack, last + number],
      currentValue: added
    });
    // run calcCurrentTotal function
  }

  handleDelete = () => {
    const updated = this.state.stack.filter((item, index) => index !== this.state.stack.length - 1);
    const last = this.state.stack[this.state.stack.length - 1];
    this.setState({ 
      stack: updated,
      currentValue: last
    });
  }

  handleOperator = (operator) => {
    console.log(`i ran ${operator}`);
    this.setState({
      stack: [...this.state.stack, operator],
    });
  }

  render() {
    const squareConfig = {
      'CE': this.handleDelete,
      '%': this.handleOperator,
      '/': this.handleOperator,
      'Del': this.handleDelete,
      '7': this.handleNumber,
      '8': this.handleNumber,
      '9': this.handleNumber,
      '÷': this.handleOperator,
      '4': this.handleNumber,
      '5': this.handleNumber,
      '6': this.handleNumber,
      '×': this.handleOperator,
      '1': this.handleNumber,
      '2': this.handleNumber,
      '3': this.handleNumber,
      '-': this.handleOperator,
      '0': this.handleNumber,
      '.': this.handleOperator,
      '(': this.handleOperator,
      '+': this.handleOperator
    };
    return (
      <View style={styles.container}>
        <Result
          currentResult={this.state.currentValue}
        />
        <NumberLog
          currentLog={this.state.stack[this.state.stack.length - 1]}
        />
        <Squares
          squareConfig={squareConfig}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',
    width: wp('100%')
  },
  noStyle: {

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'purple'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {

  }
});
