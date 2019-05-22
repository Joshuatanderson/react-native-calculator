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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsPressed: []
    };
  }

  // add state to handle button available / disabled

  handleNumber = (children) => {
    const updated = [...this.state.buttonsPressed, children];
    this.setState({ buttonsPressed: updated });
  }

  handleDelete = () => {
    const updated = this.state.buttonsPressed.filter((item, index )=> index !== this.state.buttonsPressed.length - 1);
    this.setState({ buttonsPressed: updated });
  }

  render() {
    return (
      <View style={styles.container}>
        <Result />
        <Squares
          handleNumber={this.handleNumber}
          handleDelete={this.handleDelete}
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
