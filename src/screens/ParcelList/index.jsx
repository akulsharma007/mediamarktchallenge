import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { headingStyles, listStyles } from './styles';
import ListItem from '../../components/ListItem';
import carriersData from '../../../mocks/carriers_mm.json';

const ParcelList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {data} = route.params;
  console.log(data);

  const getCourierName = (id) => {
    return carriersData.find(ele=>ele.id.$oid===id);
  }

  const onItemPressed = (data) => {
    navigation.navigate('Carrier Parcels List',{ data: data })
  }

  const renderItem = (param) => {
    const { item } = param;
    return (
        <ListItem onItemPressed={()=>onItemPressed({id: item.id.$oid ,items: item.items})}>
            <View style={listStyles.leftSection}>
            <FontAwesome5 name="truck" style={listStyles.icon} />
            <View style={listStyles.contentContainer}>
              <Text style={listStyles.title}>{`${item.id.$oid} Parcel List`}</Text>
              <Text style={listStyles.content}>{getCourierName(item.carrier).companyName}</Text>
              <Text style={listStyles.content}>{item.itemsCount} items to be picked up</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => console.log('navigated')}>
            <Text style={listStyles.rightSection} >DELIVERY</Text>
          </TouchableOpacity>
        </ListItem>
    )
  }

  return (
    <>
      <View style={headingStyles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={headingStyles.title}>
          {`Parcel List ${data[0].pickupDate}`}
        </Text>
      </View>
      <Text style={headingStyles.subTitle}>
        {`${data.reduce((acc,curr)=>acc+curr.itemsCount,0)} items to be picked up`}
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.parcelTitle}
      />
    </>
  );
}

export default ParcelList;
