import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
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
