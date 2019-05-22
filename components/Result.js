import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Result = () => (
  <View style={styles.textCont}>
    <Text style={styles.text}>{"text"}</Text>
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

export default Result;
