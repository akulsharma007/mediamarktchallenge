import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';

import { headingStyles, styles } from './styles';
import CustomDropdown from '../../components/Dropdown';
import ListItem from '../../components/ListItem';
import ReusableBottomSheet from '../../components/ReusableBottomSheet';
import CustomTextInput from '../../components/TextInput';
import { getParcelList, setParcelsList } from '../../services/api';
import carrierData from '../../services/mocks/carriers_mm.json';

const ParcelsList = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [formattedData, setFormattedData] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [parcelId, setParcelId] = useState('');

  const items = useMemo(() => {
    return carrierData.map((carrier) => {
      return {
        label: `${carrier.driver} (${carrier.companyName})`,
        value: carrier.id.$oid,
      };
    });
  }, []);

  const fetchData = useCallback(async () => {
    const data = await getParcelList();
    setData(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [route.params]);

  const addParcels = async () => {
    await setParcelsList({ parcelId, carrierId: selectedItem.value });
    fetchData();
  };

  useEffect(() => {
    // const sortedByPickupDate = data.sort((a, b) => new Date(b.pickupDate) - new Date(a.pickupDate));
    const groupByPickupDate = data.reduce((acc, current) => {
      if (acc[current.pickupDate]) {
        acc[current.pickupDate] = [...acc[current.pickupDate], current];
      } else {
        acc[current.pickupDate] = [current];
      }
      return acc;
    }, {});

    const formattedData = [];
    const temp = Object.values(groupByPickupDate);
    for (let i = 0; i < temp.length; i++) {
      const abc = temp[i];
      const obj = {
        pickupDate: abc[0].pickupDate,
      };
      const itemTotalCount = abc.reduce((acc, curr) => curr.itemsCount + acc, 0);
      obj.itemTotalCount = itemTotalCount;
      obj.carrierCount = [...new Set(abc.map((x) => x.carrier))].length;
      obj.parcels = abc;
      formattedData.push(obj);
    }
    // const sortedByPickupDate = formattedData.sort((a, b) => new Date(b.pickupDate) - new Date(a.pickupDate));
    // console.log(sortedByPickupDate);

    setFormattedData(formattedData);
  }, [data]);

  const onItemPressed = (data) => {
    navigation.navigate('Parcel List', { data });
  };

  const renderItem = (param) => {
    const { item } = param;
    return (
      <ListItem onItemPressed={() => onItemPressed(item.parcels)}>
        <View style={{ flex: 2 }}>
          <Text
            style={{
              fontSize: 16,
              color: '#3A3541AD',
              fontWeight: '500',
            }}>{`Parcel List ${item.pickupDate}`}</Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: '#3A3541AD',
            }}>{`${item.carrierCount} carriers will pick up the parcel`}</Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: '#3A3541AD',
            }}>{`${item.itemTotalCount} Items`}</Text>
        </View>
        <View
          style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 12, color: '#DF0000', fontWeight: '500' }}>
            {item.pickupDate}
          </Text>
        </View>
      </ListItem>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={headingStyles.container}>
        <Text style={headingStyles.title}>Parcel Lists</Text>
      </View>
      <View style={{ flex: 1, marginTop: 30, marginLeft: 20, marginRight: 20 }}>
        <FlatList
          data={formattedData}
          renderItem={renderItem}
          keyExtractor={(item) => item.pickupDate}
        />
      </View>
      <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Pressable onPress={() => setShowModal(true)}>
          <AntDesign name="plus" style={styles.icon} />
        </Pressable>
      </View>
      <ReusableBottomSheet
        visible={showModal}
        onClose={() => setShowModal(false)}
        footerBtnText="ADD"
        onFooterBtnPress={() => {
          addParcels();
          setShowModal(false);
        }}>
        <View style={{ width: '100%' }}>
          <CustomTextInput placeholder="ID" onChangeHandler={(text) => setParcelId(text)} />
          <CustomDropdown
            placeholder="Carrier ID"
            setIsDropdownVisible={setIsDropdownVisible}
            isDropdownVisible={isDropdownVisible}
            items={items}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        </View>
      </ReusableBottomSheet>
    </SafeAreaView>
  );
};

export default ParcelsList;
