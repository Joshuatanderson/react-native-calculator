import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Square = ({children, handlePress}) => {
    return(
        <TouchableOpacity activeOpacity={.5} onPress={ handlePress } style={styles.square}>
              <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: 'plum',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('25%'),
        height: wp('25%'),
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    text: {
        fontSize: 17
    }
})

export default Square;