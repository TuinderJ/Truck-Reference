import * as firebaseFunctions from 'firebase-functions';
import { getDatabase, ref, get } from 'firebase/database';
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

export const helloWorld = firebaseFunctions.https.onRequest(
  async (request, response) => {
    firebaseFunctions.logger.info('Hello logs!', { structuredData: true });
    const databaseReference = ref(getDatabase(), 'users/');
    const data = await get(databaseReference);
    response.send(data);
  }
);

export const updateVehicle = firebaseFunctions.https.onRequest(
  async (request, response) => {
    response.send('update vehicle');
  }
);
