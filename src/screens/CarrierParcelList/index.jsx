import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Text, Pressable, View } from 'react-native';
import { footerStyles, headingStyles, listStyles } from './styles';
import { useState } from 'react';
import itemsData from '../../services/mocks/items_mm.json';
import carriersData from '../../services/mocks/carriers_mm.json'
import ListItem from '../../components/ListItem';
import ReusableBottomSheet from '../../components/ReusableBottomSheet';
import ReusableModal from '../../components/ReusableModal';
import { patchParcelListForStatus } from '../../services/api';
import CustomTextInput from '../../components/TextInput';

const CarrierParcelList = () => {
  const navigation = useNavigation();
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [driverName, setDriverName] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const route = useRoute();
  const { data } = route.params;
  console.log(data);

  const renderItem = (param) => {
    const { item } = param;
    return (
      <ListItem>
        <View style={listStyles.leftSection}>
          <FontAwesome name={item.type} style={listStyles.icon} />
          <View style={listStyles.contentContainer}>
            <Text style={listStyles.title}>{item.id.$oid}</Text>
            <Text style={listStyles.content}>{item.weight}</Text>
          </View>
        </View>
      </ListItem>
    )
  }

  const getItemData = (items) => {
    return items.map(item => itemsData.find(it => it.id.$oid === item.$oid));
  }

  const getCarrierData = (id) => {
    return carriersData.find(ele => ele.id.$oid === id);
  }

  const updateDeliveryStatus = async () => {
    await patchParcelListForStatus(data.id);
  }

  const validateDetails = () => {
    const carrierData = getCarrierData(data.carrierId);
    if (carrierData.driver === driverName && carrierData.licensePlate === licensePlate) {
      setShowBottomSheet(false);
      setShowSuccessModal(true);
    } else {
      setShowErrorModal(true);
    }
  }

  return (
    <>
      <View style={headingStyles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Text style={headingStyles.title}>
          {`${data.id} Parcel List`}
        </Text>
      </View>
      <FlatList
        data={getItemData(data.items)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.$oid}
      />
      <Pressable onPress={() => { setShowBottomSheet(true) }} style={footerStyles.buttonContainer}>
        <Text style={footerStyles.buttonText}>DELIVERY</Text>
      </Pressable>

      <ReusableBottomSheet visible={showBottomSheet} onClose={() => setShowBottomSheet(false)} footerBtnText="Next" onFooterBtnPress={() => {
        validateDetails();
      }}>
        <View style={{ width: '100%' }}>
          <CustomTextInput placeholder="Driver's name" onChangeHandler={text => setDriverName(text)} />
          <CustomTextInput placeholder="License plate" onChangeHandler={text => setLicensePlate(text)} />
        </View>
      </ReusableBottomSheet>

      <ReusableModal visible={showSuccessModal} onClose={async () => {
        await updateDeliveryStatus();
        setShowSuccessModal(false);
        navigation.navigate('Parcels List', { isUpdated: true });
      }} footerBtnText="GO TO PARCEL LIST" icon="checkcircleo">
        <Text style={{ maxWidth: '70%', textAlign: 'center' }}>Parcel successfully delivered to the carrier</Text>
      </ReusableModal>

      <ReusableModal visible={showErrorModal} onClose={() => {
        setShowErrorModal(false);
      }} footerBtnText="Back" icon="dislike1">
        <Text style={{ maxWidth: '70%', textAlign: 'center' }}>Some information is wrong</Text>
      </ReusableModal>
    </>
  );
}

export default CarrierParcelList;
