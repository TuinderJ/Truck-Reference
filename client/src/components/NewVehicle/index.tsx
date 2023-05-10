import { useState } from 'react';
import { Categories } from '../index';
import { MainContainer, NewVehicleForm, SubmitButton } from './style';

export default function NewVehicle() {
  const [vehicleInformationState, setVehicleInformationState] = useState({
    unitNumber: '272131',
    customerUnitNumber: '123',
    vin: '12345678LD123456',
    customer: 'Triple S',
    categories: [
      {
        title: 'Engine',
        items: [
          {
            label: 'Year',
            value: '2020',
          },
          {
            label: 'Make',
            value: 'Cummins',
          },
          {
            label: 'Model',
            value: 'X15',
          },
        ],
      },
      {
        title: 'Axles',
        items: [
          {
            label: 'Thing',
            value: '1',
          },
          {
            label: 'Other Thing',
            value: '2',
          },
        ],
      },
    ],
  });

  const onFormSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log('Form submit');
  };

  return (
    <>
      <MainContainer>
        <NewVehicleForm onSubmit={onFormSubmit}>
          <SubmitButton type='submit'>Submit</SubmitButton>
          <Categories vehicleInformationState={vehicleInformationState} setVehicleInformationState={setVehicleInformationState} editable={false}></Categories>
          <SubmitButton type='submit'>Submit</SubmitButton>
        </NewVehicleForm>
      </MainContainer>
    </>
  );
}
