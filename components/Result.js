import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Result = ({ currentResult }) => (
  <View style={styles.textCont}>
    <Text style={styles.text}>{currentResult}</Text>
  </View>
);

const styles = StyleSheet.create({
  textCont: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    margin: 20
  },
  text: {
    fontSize: 30,
  }
});

export default Result;
