import { useCallback, useEffect, useState } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import ListItem from "../../components/ListItem";

const ParcelsList = () => {
    const navigation = useNavigation();

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);
    const [formattedData, setFormattedData] = useState({});

    const fetchData = useCallback(async () => {
        const data = await AsyncStorage.getItem('parcelsData');
        setData(JSON.parse(data));
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // const sortedByPickupDate = data.sort((a, b) => new Date(b.pickupDate) - new Date(a.pickupDate));
        const groupByPickupDate = data.reduce((acc, current) => {
            if (acc[current.pickupDate]) {
                acc[current.pickupDate] = [...acc[current.pickupDate], current]
            } else {
                acc[current.pickupDate] = [current];
            }
            return acc;
        }, {});

        const formattedData = [];
        const temp = Object.values(groupByPickupDate);
        for (let i = 0; i < temp.length; i++) {
            let abc = temp[i];
            let obj = {
                pickupDate: abc[0].pickupDate
            }
            const itemTotalCount = abc.reduce((acc, curr) => curr.itemsCount + acc, 0);
            obj.itemTotalCount = itemTotalCount;
            obj.carrierCount = [... new Set(abc.map(x => x.carrier))].length;
            obj.parcels = abc;
            formattedData.push(obj);
        }
        // const sortedByPickupDate = formattedData.sort((a, b) => new Date(b.pickupDate) - new Date(a.pickupDate));
        // console.log(sortedByPickupDate);

        setFormattedData(formattedData);

    }, [data]);

    const onItemPressed = (data) => {
        navigation.navigate('Parcel List',{ data: data })
    }

    const renderItem = (param) => {
        const { item } = param;
        return (
            <ListItem onItemPressed={()=>onItemPressed(item.parcels)}>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 16, color: "#3A3541AD", fontWeight: '500' }}>{`Parcel List ${item.pickupDate}`}</Text>
                    <Text style={{ fontSize: 10, fontWeight: '400', color: "#3A3541AD" }}>{`${item.carrierCount} carriers will pick up the parcel today`}</Text>
                    <Text style={{ fontSize: 10, fontWeight: '400', color: "#3A3541AD" }}>{`${item.itemTotalCount} Items`}</Text>
                </View>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 12, color: "#DF0000", fontWeight: '500' }}>{item.pickupDate}</Text>
                </View>
            </ListItem>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, marginTop: 30, marginLeft: 20, marginRight: 20 }}>
                <FlatList
                    data={formattedData}
                    renderItem={renderItem}
                    keyExtractor={item => item.index}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{
                        borderBottomWidth: 1, borderBottomColor: "#3A35411F", paddingBottom: 10,
                        marginTop: 6, marginBottom: 6
                    }} />}
                    ListHeaderComponent={() => <View style={{ marginBottom: 17, marginTop: 48 }}>
                        <Text style={{ fontSize: 24, fontWeight: '500' }}>
                            Parcel Lists
                        </Text>
                    </View>}
                />
            </View>
            <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <Pressable onPress={() => setModalVisible(true)}>
                    <AntDesign name="plus" style={styles.icon} />
                </Pressable>
            </View>
            {/* <CustomModal open={modalVisible} onRequestClose={() => { setModalVisible(false) }}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Parcel and Carrier information</Text>
                    <CustomTextInput placeholder={'ID'} />
                    <CustomTextInput placeholder={'Carrier ID'} />
                    <Pressable
                        style={[styles.button]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>ADD</Text>
                    </Pressable>
                </View>
            </CustomModal> */}
        </SafeAreaView>
    );

}

export default ParcelsList;