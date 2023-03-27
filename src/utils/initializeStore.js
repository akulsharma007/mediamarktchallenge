import parcelsData from '../../mocks/parcels_mm.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

// await (async()=>{
//     await AsyncStorage.setItem('parcelsData', JSON.stringify(parcelsData));
// })();

const checkParcelDataExist = async() => {
    const data = await AsyncStorage.getItem('parcelsData');
    if(JSON.parse(data).length){
        return true;
    }
    return false;
}

export const initializeStore = async() => {
    // if(!checkParcelDataExist()){
        const value = JSON.stringify(parcelsData);
        await AsyncStorage.setItem('parcelsData', value);
    // }
}