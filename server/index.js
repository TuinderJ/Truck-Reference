const { initializeApp } = require('firebase/app');
const { getDatabase, ref, onValue } = require('firebase/database');

console.log(process.env.DATABASE_URL);

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

async function writeUserData(userId, name, email) {
  const database = getDatabase();
  const reference = ref(database, 'users/' + userId);
  onValue(reference, snapshot => {
    const data = snapshot.val();
    console.log(data);
  });
  console.log(`should've worked by now`);
}

writeUserData('1', 'josh', 'josh@josh.com');
