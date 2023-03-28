import parcelsData from './mocks/parcels_mm.json';
import { storeGetter, storeSetterAppend, storeSetterBulkAdd } from '../utils/store';

export const getParcelList = async () => {
  const data = await storeGetter('parcelsData');
  return data;
};

export const setParcelsList = async (payload) => {
  const { parcelId, carrierId } = payload;

  const parcels = parcelsData.find((parcel) => parcel.id.$oid === parcelId);

  if (parcels === undefined) {
    return new Error('Please Enter a valid Parcel ID');
  }

  await storeSetterAppend('parcelsData', {
    ...parcels,
    carrier: carrierId,
    status: 'DELIVERY',
  });
};

export const patchParcelListForStatus = async (parcelId) => {
  const data = await storeGetter('parcelsData');
  const updatedData = data.map((ele) => {
    if (ele.id.$oid === parcelId) {
      return {
        ...ele,
        status: 'DELIVERED',
      };
    }
    return ele;
  });

  await storeSetterBulkAdd('parcelsData', updatedData);
};
