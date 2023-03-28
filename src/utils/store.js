import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeSetterAppend = async (key, data) => {
  const currentData = await AsyncStorage.getItem(key);
  let value = [data];
  if (currentData && JSON.parse(currentData).length) {
    value = [...JSON.parse(currentData), data];
  }
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const storeSetterBulkAdd = async (key, data) => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

export const storeGetter = async (key) => {
  const currentData = await AsyncStorage.getItem(key);
  if (currentData && JSON.parse(currentData).length) {
    return JSON.parse(currentData);
  }
  return [];
};
