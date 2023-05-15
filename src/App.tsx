import { useState } from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { Navbar, HomePage, LoginPage, UpdateVehicle } from './components';

function App() {
  const [vehicleInformationState, setVehicleInformationState] = useState({
    unitNumber: '',
    customerUnitNumber: '',
    customer: '',
    vin: '',
    categories: [
      {
        title: '',
        items: [
          {
            label: '',
            value: '',
          },
        ],
      },
    ],
  });

  const [vehicleIsInDatabase, setVehicleIsInDatabase] = useState(false);

  return (
    <>
      <Navbar vehicleInformationState={vehicleInformationState} vehicleIsInDatabase={vehicleIsInDatabase} />
      <main>
        <Routes>
          <Route
            path='/'
            element={<HomePage vehicleInformationState={vehicleInformationState} setVehicleInformationState={setVehicleInformationState} vehicleIsInDatabase={vehicleIsInDatabase} setVehicleIsInDatabase={setVehicleIsInDatabase} />}
          ></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route
            path='/new_vehicle/'
            element={<UpdateVehicle newVehicle={true} vehicleInformationState={vehicleInformationState} setVehicleInformationState={setVehicleInformationState} setVehicleIsInDatabase={setVehicleIsInDatabase} />}
          ></Route>
          <Route
            path='/edit_vehicle/'
            element={<UpdateVehicle newVehicle={false} vehicleInformationState={vehicleInformationState} setVehicleInformationState={setVehicleInformationState} setVehicleIsInDatabase={setVehicleIsInDatabase} />}
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
