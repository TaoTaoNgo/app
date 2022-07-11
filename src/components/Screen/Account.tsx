import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    FlatList,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
} from 'react-native';
import { toast } from '../../helpers';
import { Props } from '../../navigate/props';
import axiosService from '../../helpers/axiosService';
import { contants } from '../../constants';

interface IItem {
    userid: string;
    phone: string;
    registrationetime: string;
    updatetime: string;
    email: string;
    address: string;
    avatar: number;
}

export default function Account({ navigation }: Props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            setLoading(true);
            await getInforUser();
            setLoading(false);
        }

        fetch();
    }, []);

    async function getInforUser() {
        try {
            const res = await axiosService.get(contants.API_PATH.GET_USER);
            setData(res.data);
        } catch (error) {
            return toast.errToast(error);
        }
    }

    function getTime(time: string) {
        const arr = time.split('-');
        const day = arr[2].split('T');
        return day[0] + '-' + arr[1] + '-' + arr[0];
    }

    // const itemOnPress = (item: IItem) => {
    //     return navigation.navigate('ListImage', {
    //         dicid: item.dicid,
    //         dicName: item.dicname,
    //     });
    // };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.listItem}
                // onPress={() => itemOnPress(item)}
            >
                <View style={styles.nameView}>
                    <View>
                        <Text>UserID</Text>
                        <Text>Phone</Text>
                        <Text>Email</Text>
                        <Text>Address</Text>
                    </View>
                </View>
                <View style={styles.nameView}>
                    <View>
                        <Text>{item.userid}</Text>
                        <Text>{item.phone}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.list}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.userid}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    loadingView: {
        marginTop: 30,
        alignItems: 'center',
    },
    list: { marginTop: 10 },
    mainView: {
        padding: 16,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    icon: {
        marginHorizontal: 10,
    },
    title: { fontSize: 16, fontWeight: '400' },
    time: {
        fontSize: 12,
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
});
