import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, FlatList, Text, Pressable, View } from 'react-native';
import { footerStyles, headingStyles, listStyles } from './styles';
// import ReusableModal from '../../shared/Modal';
import { useState } from 'react';
import itemsData from '../../../mocks/items_mm.json';
import ListItem from '../../components/ListItem';

const CarrierParcelList = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const route = useRoute();
  const { data } = route.params;

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
    console.log(items.map(item => itemsData.find(it => it.id.$oid === item.$oid)));
    return items.map(item => itemsData.find(it => it.id.$oid === item.$oid));
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
      <Pressable onPress={() => { }} style={footerStyles.buttonContainer}>
        <Text style={footerStyles.buttonText}>DELIVERY</Text>
      </Pressable>
      {/* <Button title="Open Modal" onPress={()=>setIsModalVisible(true)} /> */}
      {/* <ReusableModal visible={isModalVisible} onClose={()=>setIsModalVisible(false)} footerBtnText="GO TO PARCEL LIST">
        <Text style={{maxWidth: '70%', textAlign: 'center'}}>Parcel successfully delivered to the carrier</Text>
      </ReusableModal> */}
    </>
  );
}

export default CarrierParcelList;
