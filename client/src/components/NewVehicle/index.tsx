import { useState } from 'react';
import { Categories } from '../index';
import { BasicInfoContainer, MainContainer, NewVehicleForm, SubmitButton } from './style';

export default function NewVehicle() {
  const [vehicleInformationState, setVehicleInformationState] = useState({
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

  const addCategory = () => {
    const newVehicleInformationState = { ...vehicleInformationState };
    newVehicleInformationState.categories.push({ title: '', items: [{ label: '', value: '' }] });
    setVehicleInformationState(newVehicleInformationState);
  };

  return (
    <>
      <MainContainer>
        <NewVehicleForm>
          <SubmitButton type='submit'>Submit</SubmitButton>
          <BasicInfoContainer>
            <>Basic Info Goes Here</>
          </BasicInfoContainer>
          <Categories vehicleInformationState={vehicleInformationState} setVehicleInformationState={setVehicleInformationState} editable={false}></Categories>
          <SubmitButton type='submit'>Submit</SubmitButton>
        </NewVehicleForm>
      </MainContainer>
    </>
  );
}
