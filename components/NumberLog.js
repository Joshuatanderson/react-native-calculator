import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NumberLog = ({ currentLog }) => (
  <View style={styles.textCont}>
    <Text style={styles.text}>{currentLog}</Text>
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
    fontSize: 20,
  }
});

export default NumberLog;
