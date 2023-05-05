import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
function App() {
  const firebase = () => {
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

    async function writeUserData(userId: string, name: string, email: string) {
      const database = getDatabase();
      const reference = ref(database, 'users/' + userId);
      onValue(reference, snapshot => {
        const data = snapshot.val();
        console.log(data);
      });
      console.log(`should've worked by now`);
    }

    writeUserData('1', 'josh', 'josh@josh.com');
  };

  firebase();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
