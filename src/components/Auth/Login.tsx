import React, { useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { services, toast } from '../../helpers';
import axiosService from '../../helpers/axiosService';
import { Props } from '../../navigate/props';
import Logo from '../Logo';
export default function Login({ navigation }: Props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function onPressLogin() {
        try {
            const res = await axiosService.login(username, password);
            if (res) {
                navigation.navigate('Main');
            }
        } catch (error: any) {
            if (error.response.status && error.response.status == 401) {
                return toast.errToast({
                    name: 'Đăng nhập không thành công!',
                    message: 'Tên đăng nhập hoặc mật khẩu không chính xác.',
                });
            }
            return toast.errToast(error);
        }
    }

    return (
        <View style={styles.login}>
            <Text style={styles.hi}>Welcome Back! 👋</Text>
            <Text style={styles.again}>Photo data management application!</Text>
            <Logo />
            <View style={styles.usernameView}>
                <Text style={styles.text}>User ID</Text>
                <TextInput
                    onChangeText={(val) => setUsername(val)}
                    value={username}
                    style={styles.input}
                    placeholder="User ID"
                />
            </View>
            <View style={styles.passwordView}>
                <Text style={styles.text}>Password</Text>
                <TextInput
                    onChangeText={(val) => setPassword(val)}
                    value={password}
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
                <Text style={styles.loginText}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    hi: {
        fontWeight: '600',
        fontSize: 25,
        marginTop: 92,
        marginLeft: 29,
    },
    again: {
        fontWeight: '600',
        fontSize: 14,
        color: '#999EA1',
        marginBottom: 20,
    },
    login: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    usernameView: {
        marginTop: 20,
    },
    passwordView: {
        marginTop: 12,
    },
    text: {
        fontWeight: '600',
        fontSize: 14,
        color: '#4E0189',
    },
    input: {
        marginTop: 8,
        fontWeight: '600',
        fontSize: 14,
        color: '#4E0189',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#C6C6C6',
        borderRadius: 10,
    },
    loginBtn: {
        marginHorizontal: 27,
        marginTop: 30,
        backgroundColor: '#4E0189',
        paddingVertical: 11,
        alignItems: 'center',
        borderRadius: 10,
    },
    loginText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '600',
        width: 200,
    },
});
