import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';

import { bottomSheet, headingStyles, listStyles, styles } from './styles';
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
    const groupByPickupDate = data.reduce((acc, current) => {
      if (acc[current.pickupDate]) {
        acc[current.pickupDate] = [...acc[current.pickupDate], current];
      } else {
        acc[current.pickupDate] = [current];
      }
      return acc;
    }, {});

    const formattedData = [];
    const groupByPickupDateFlatStructure = Object.values(groupByPickupDate);
    for (let i = 0; i < groupByPickupDateFlatStructure.length; i++) {
      const localElement = groupByPickupDateFlatStructure[i];
      const obj = {
        pickupDate: localElement[0].pickupDate,
      };
      const itemTotalCount = localElement.reduce((acc, curr) => curr.itemsCount + acc, 0);
      obj.itemTotalCount = itemTotalCount;
      obj.carrierCount = [...new Set(localElement.map((x) => x.carrier))].length;
      obj.parcels = localElement;
      formattedData.push(obj);
    }

    formattedData.sort((a, b) => new Date(b.pickupDate) - new Date(a.pickupDate));

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
          <Text style={listStyles.title}>{`Parcel List ${item.pickupDate}`}</Text>
          <Text
            style={
              listStyles.content
            }>{`${item.carrierCount} carriers will pick up the parcel`}</Text>
          <Text style={listStyles.content}>{`${item.itemTotalCount} Items`}</Text>
        </View>
        <View style={listStyles.rightSection}>
          <Text style={listStyles.rightSectionContent}>{item.pickupDate}</Text>
        </View>
      </ListItem>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={headingStyles.container}>
        <Text style={headingStyles.title}>Parcel Lists</Text>
      </View>
      <View style={{ flex: 1 }}>
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
        }}
        headerText="Parcel and carrier information">
        <View style={{ width: '100%' }}>
          <Pressable onPress={() => navigation.navigate('Barcode Scanner')}>
            <AntDesign name="scan1" style={bottomSheet.scanIcon} />
          </Pressable>
          <Text style={{ textAlign: 'center', marginBottom: 10 }}>OR</Text>
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
