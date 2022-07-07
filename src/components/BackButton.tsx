import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Props } from '../navigate/props';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function BackButton({ navigation }: Props) {
    return (
        <TouchableOpacity onPress={navigation.goBack} style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/arrow_back.png')}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10,
        left: 4,
    },
    image: {
        width: 24,
        height: 24,
    },
});
