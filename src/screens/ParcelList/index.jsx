import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Text, Pressable, View } from 'react-native';
import { headingStyles, listStyles } from './styles';
import ListItem from '../../components/ListItem';
import carriersData from '../../services/mocks/carriers_mm.json'

const ParcelList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;

  const getCourierName = (id) => {
    return carriersData.find(ele => ele.id.$oid === id);
  }

  const onItemPressed = (data) => {
    navigation.navigate('Carrier Parcels List', { data: data })
  }

  const renderItem = (param) => {
    const { item } = param;
    return (
      <ListItem onItemPressed={() => onItemPressed({ id: item.id.$oid, items: item.items, carrierId: item.carrier })} isDisabled={item.status === 'DELIVERED'}>
        <View style={listStyles.leftSection}>
          <FontAwesome5 name="truck" style={listStyles.icon} />
          <View style={listStyles.contentContainer}>
            <Text style={listStyles.title}>{`${item.id.$oid} Parcel List`}</Text>
            <Text style={listStyles.content}>{getCourierName(item.carrier).companyName}</Text>
            <Text style={listStyles.content}>{item.itemsCount} items to be picked up</Text>
          </View>
        </View>
        <Pressable onPress={() => console.log('navigated')}>
          <Text style={item.status === 'DELIVERED' ? listStyles.disabledButton : listStyles.rightSection}>{item.status}</Text>
        </Pressable>
      </ListItem>
    )
  }

  return (
    <>
      <View style={headingStyles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Text style={headingStyles.title}>
          {`Parcel List ${data[0].pickupDate}`}
        </Text>
      </View>
      <Text style={headingStyles.subTitle}>
        {`${data.reduce((acc, curr) => acc + curr.itemsCount, 0)} items to be picked up`}
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.$oid}
      />
    </>
  );
}

export default ParcelList;
