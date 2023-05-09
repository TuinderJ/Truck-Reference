import { Route, Routes } from 'react-router';
import './App.css';
import { Navbar, HomePage, NewVehicle } from './components';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/new_vehicle/' element={<NewVehicle />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
