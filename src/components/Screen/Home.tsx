import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Home() {
    return (
        <View style={styles.mainView}>
            <Text style={styles.h3}>Trang chủ</Text>
            <Text style={styles.body14}>Pending</Text>
            <Ionicons name="rocket" />
        </View>
    );
}

const styles = StyleSheet.create({
    img: { width: '100%', resizeMode: 'contain' },
    mainView: {
        flex: 1,
        alignItems: 'center',
    },
    h3: {
        color: '#4E0189',
        fontSize: 28,
    },
    body14: {
        fontSize: 14,
    },
});
