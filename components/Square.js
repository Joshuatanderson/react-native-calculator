import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Square = (props) => {
    return(
        <View style={styles.square}>
              <Text style={styles.text}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
      },
    text: {
        fontSize: 17
    }
})

export default Square;