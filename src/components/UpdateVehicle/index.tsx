import { Categories } from '../index';
import { MainContainer, NewVehicleForm, TopSubmitButton, BottomSubmitButton } from './style';
import { UpdateVehiclePageProps } from '../types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import auth from '../../utils/auth';
import { connectStorageEmulator } from 'firebase/storage';

export default function UpdateVehicle({ newVehicle, vehicleInformationState, setVehicleInformationState, setVehicleIsInDatabase }: UpdateVehiclePageProps) {
  if (!auth.loggedIn()) location.href = '/';
  const navigate = useNavigate();
  useEffect(() => {
    setVehicleIsInDatabase(false);
  }, []);

  useEffect(() => {
    if (newVehicle) {
      setVehicleInformationState({
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
      setVehicleIsInDatabase(false);
    }
  }, [newVehicle]);

  const onFormSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const vehicleData = {
      unitNumber: vehicleInformationState.unitNumber,
      customerUnitNumber: vehicleInformationState.customerUnitNumber,
      customer: vehicleInformationState.customer,
      vin: vehicleInformationState.vin,
      categories: vehicleInformationState.categories,
    };

    for (let categoryIndex = vehicleData.categories.length - 1; categoryIndex >= 0; categoryIndex--) {
      const category = vehicleData.categories[categoryIndex];
      let categoryIsEmpty = true;
      if (category.title === '') category.title = 'Category';
      for (let itemIndex = category.items.length - 1; itemIndex >= 0; itemIndex--) {
        const item = category.items[itemIndex];
        if (item.label === '') item.label = 'Label';
        if (item.value === '') {
          category.items.splice(itemIndex, 1);
        } else {
          categoryIsEmpty = false;
        }
      }
      if (categoryIsEmpty) vehicleData.categories.splice(categoryIndex, 1);
    }

    try {
      let response;
      if (newVehicle) {
        response = await fetch('https://us-central1-truck-reference.cloudfunctions.net/addVehicle', { method: 'POST', body: JSON.stringify(vehicleData) });
      } else {
        response = await fetch('https://us-central1-truck-reference.cloudfunctions.net/updateVehicle', { method: 'POST', body: JSON.stringify(vehicleData) });
      }
      if (response.ok) {
        setVehicleInformationState({ ...vehicleData });
        setVehicleIsInDatabase(true);

        navigate('/');
      } else {
        const { message } = await response.json();
        alert(message);
      }
    } catch (error) {
      console.error('error is here', error);
    }
  };

  return (
    <>
      <MainContainer>
        <NewVehicleForm onSubmit={onFormSubmit}>
          <TopSubmitButton type='submit'>Submit</TopSubmitButton>
          <Categories vehicleInformationState={vehicleInformationState} setVehicleInformationState={setVehicleInformationState} editable={true}></Categories>
          <BottomSubmitButton type='submit'>Submit</BottomSubmitButton>
        </NewVehicleForm>
      </MainContainer>
    </>
  );
}
