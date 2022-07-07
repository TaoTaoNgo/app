import axios from 'axios';
import { contants } from '../constants';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import stringInject from 'stringinject';

export default {
    async login(username: string, password: string) {
        try {
            const res = await axios.post(
                contants.API + contants.API_PATH.LOGIN,
                {
                    userid: username,
                    password,
                },
            );
            contants.LOGIN_SCREEN.TOKEN_NAME = res.data.token;
            window.localStorage.setItem(
                contants.LOGIN_SCREEN.TOKEN_NAME,
                res.data.token,
            );
            return res;
        } catch (error: any) {
            throw error;
        }
    },

    async get(path: string) {
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            axios.defaults.headers.common['Authorization'] =
                localStorage.getItem(contants.LOGIN_SCREEN.TOKEN_NAME);
            axios.defaults.baseURL = contants.API;
            return await axios.get(path);
        } catch (error) {
            throw error;
        }
    },
    async post(path: string, data: object) {
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            axios.defaults.headers.common['Authorization'] =
                localStorage.getItem(contants.LOGIN_SCREEN.TOKEN_NAME);
            axios.defaults.baseURL = contants.API;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            return await axios.post(path, data);
        } catch (error) {
            throw error;
        }
    },
    async put(path: string, data: object) {
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            axios.defaults.headers.common['Authorization'] =
                localStorage.getItem(contants.LOGIN_SCREEN.TOKEN_NAME);
            axios.defaults.baseURL = contants.API;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            return await axios.put(path, data);
        } catch (error) {
            throw error;
        }
    },
    async delete(path: string, data: object) {
        try {
            axios.create({
                baseURL: contants.API,
                timeout: 1000,
            });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            axios.defaults.headers.common['Authorization'] =
                localStorage.getItem(contants.LOGIN_SCREEN.TOKEN_NAME);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            return await axios.delete(path, data);
        } catch (error) {
            throw error;
        }
    },
};
