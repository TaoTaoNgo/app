import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { toast } from '../../helpers';
import { Props } from '../../navigate/props';
import axiosService from '../../helpers/axiosService';
import { contants } from '../../constants';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import stringInject from 'stringinject';
interface IItem {
    imgid: string;
    imgname: string;
    memo: any;
    dicid: string;
    registrationetime: string;
    updatetime: string;
    url: string;
    status: string;
    likenum: number;
}

export default function ListImage({ route, navigation }: Props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            setLoading(true);
            await getListImg();
            setLoading(false);
        }

        fetch();
    }, []);

    async function getListImg() {
        try {
            const res = await axiosService.get(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                stringInject(contants.API_PATH.IMG_GET_LIST_BY_ID, {
                    dicid: route.params.dicid,
                }),
            );
            console.log(res.data);
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

    const itemOnPress = (item: IItem) => {
        return navigation.navigate('ViewImage', {
            imgName: item.imgname,
            uri: contants.IMAGE_HOST + item.url, //uri: item.url,
        });
    };

    const renderItem: ListRenderItem<IItem> = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.listItem}
                onPress={() => itemOnPress(item)}
            >
                <View style={styles.nameView}>
                    <Image
                        source={{
                            uri: contants.IMAGE_HOST + item.url, // uri: item.url,
                        }}
                        style={styles.miniImg}
                    />
                    <View>
                        <Text style={styles.title}>{item.imgname}</Text>
                    </View>
                </View>
                <Text style={styles.time}>
                    {getTime(item.registrationetime)}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.mainView}>
            {/*<TouchableOpacity*/}
            {/*    onPress={navigation.goBack}*/}
            {/*    style={styles.container}*/}
            {/*>*/}
            {/*    <Image*/}
            {/*        style={styles.image}*/}
            {/*        source={require('../../assets/arrow_back.png')}*/}
            {/*    />*/}
            {/*</TouchableOpacity>*/}
            <View style={styles.headerView}>
                <Text>Tên file</Text>
                <Text>Ngày tạo</Text>
            </View>
            {loading ? (
                <View style={styles.loadingView}>
                    <ActivityIndicator size="large" color={'#4E0189'} />
                </View>
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.imgid}
                />
            )}
        </View>
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
    miniImg: { width: 50, height: 50, marginRight: 8 },
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
    title: { fontSize: 16, fontWeight: '400' },
    time: {
        fontSize: 12,
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
