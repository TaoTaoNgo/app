import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function Logo() {
    return (
        <Image source={require('../assets/hust.png')} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 200,
        marginBottom: 8,
    },
});
