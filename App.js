import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Mathjs from 'mathjs';
import Squares from './components/Squares';
import Result from './components/Result';
import NumberLog from './components/NumberLog';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentResult: '',
      stack: [],
      parenthesesIsOpening: true
    };
  }

  handleNumber = (number) => {
    const currentStack = this.state.stack;
    const last = currentStack[currentStack.length - 1] || '';
    this.setState({
      stack: [...currentStack, last + number],
      currentResult: this.calcResult(last + number)
    });
  }

  handleDelete = () => {
    const updated = this.state.stack.filter((item, index) => index !== this.state.stack.length - 1);
    const lastState = updated[updated.length - 1] || '';
    this.setState({
      stack: updated,
      currentResult: this.calcResult(lastState)
    });
    const currentStack = this.state.stack;
    const lastStackItem = currentStack[currentStack.length - 1] || '';
    const lastCharacter = lastStackItem[lastStackItem.length - 1];
    this.conditionallyToggleParentheses(lastCharacter);
  }

  clearAll = () => {
    this.setState({
      stack: [],
      currentResult: null
    });
  }

  handleOperator = (operator) => {
    const currentStack = this.state.stack;
    const lastStackItem = currentStack[currentStack.length - 1] || '';
    const lastCharacter = lastStackItem[lastStackItem.length - 1];

    console.log(lastCharacter);
    if (lastCharacter.match(/\d|(|)/)) {
      this.setState({
        stack: [...currentStack, lastStackItem + operator],
        currentResult: this.calcResult(lastStackItem + operator)
      });
    } else {
      const trimmedStackItem = lastStackItem.slice(0, -1);
      this.setState({
        stack: [...currentStack, trimmedStackItem + operator],
        currentResult: this.calcResult(trimmedStackItem + operator)
      });
    }
    this.conditionallyToggleParentheses(operator);
  }
  // todo: add replacement for % operator
  // validate input for consecutive operators


  calcResult = (inputString) => {
    let total = this.state.currentResult;
    const symbols = ['(', ')', '/', '+', '-', '*', '/', '.'];
    const replacementDivision = inputString.replace(/÷/, '/');
    const replacementString = replacementDivision.replace(/×/, '*');
    const lastCharacter = replacementString[replacementString.length - 1];
    if (symbols.find(element => element === lastCharacter)) {
      return total;
    }
    total = Mathjs.eval(replacementString);
    return total;
  }

  conditionallyToggleParentheses = (character) => {
    console.log(`running with ${character}`);
    if (character === '(' || character === ')') {
      this.setState({
        parenthesesIsOpening: !this.state.parenthesesIsOpening
      });
    }
  }

  render() {
    const squareConfig = {
      CE: this.clearAll,
      '%': this.handleOperator,
      '/': this.handleOperator,
      Del: this.handleDelete,
      7: this.handleNumber,
      8: this.handleNumber,
      9: this.handleNumber,
      '÷': this.handleOperator,
      4: this.handleNumber,
      5: this.handleNumber,
      6: this.handleNumber,
      '×': this.handleOperator,
      1: this.handleNumber,
      2: this.handleNumber,
      3: this.handleNumber,
      '-': this.handleOperator,
      0: this.handleNumber,
      '.': this.handleOperator,
      '(': this.handleOperator,
      ')': this.handleOperator,
      '+': this.handleOperator
    };
    return (
      <View style={styles.container}>
        <Result
          currentResult={this.state.currentResult}
        />
        <NumberLog
          currentLog={this.state.stack[this.state.stack.length - 1]}
        />
        <Squares
          squareConfig={squareConfig}
          parenthesesState={this.state.parenthesesIsOpening}
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
