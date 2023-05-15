import { https, logger } from 'firebase-functions';
import { getDatabase, ref, get, set, remove } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC4PntxT9MwicUmtpOATJrCRpO2NRSqm44',
  authDomain: 'truck-reference.firebaseapp.com',
  databaseURL: 'https://truck-reference-default-rtdb.firebaseio.com',
  projectId: 'truck-reference',
  storageBucket: 'truck-reference.appspot.com',
  messagingSenderId: '386059523205',
  appId: '1:386059523205:web:2bc4e05ab56135c4f885ec',
};

initializeApp(firebaseConfig);

export const getVehicle = https.onRequest(async (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  const params = request.query;

  const databaseReference = ref(getDatabase(), 'vehicles/');
  const data = await get(databaseReference);

  const returnData: Array<any> = [];

  data.forEach((vehicle) => {
    if (params.unitNumber) if (params.unitNumber === JSON.parse(vehicle.val()).unitNumber) returnData.push(JSON.parse(vehicle.val()));
    if (params.customerUnitNumber) if (params.customerUnitNumber === JSON.parse(vehicle.val()).customerUnitNumber) returnData.push(JSON.parse(vehicle.val()));
    if (params.vin) if (params.vin === JSON.parse(vehicle.val()).vin) returnData.push(JSON.parse(vehicle.val()));
    if (params.last8) if (params.last8 === JSON.parse(vehicle.val()).unitNumber.substring(8)) returnData.push(JSON.parse(vehicle.val()));
  });

  if (returnData.length > 0) {
    response.json({ data: returnData });
  } else {
    response.status(400).json({ message: 'Vehicle Not Found' });
  }
});

export const updateVehicle = https.onRequest(async (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  if (request.method !== 'POST') response.status(400).json({ message: 'Please send a POST request' });
  console.log(JSON.parse(request.body).vin);

  const databaseReference = ref(getDatabase(), 'vehicles/' + JSON.parse(request.body).vin);
  const data = await set(databaseReference, request.body);

  response.json({ data });
});

export const deleteVehicle = https.onRequest(async (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  if (request.method !== 'POST') response.status(400).json({ message: 'Please send a POST request' });

  const params = request.query;

  if (!params.vin) response.status(400).json({ message: 'Please send a vin' });

  const databaseReference = ref(getDatabase(), `vehicles/${params.vin}`);
  const data = await remove(databaseReference);

  logger.log(data);
  response.json({ data });
});
