import { useEffect, useState } from 'react';
import { Option, OptionRadio, OptionLabel, OptionsContainer, SearchBar, SearchButton, SearchForm, SearchBoxContainer } from './style';
import { Categories } from '..';
import { FetchData, HomePageProps } from '../types';

export default function HomePage({ vehicleInformationState, setVehicleInformationState, vehicleIsInDatabase, setVehicleIsInDatabase }: HomePageProps) {
  const [formState, setFormState] = useState({
    searchValue: '',
    option: 'unit-number',
  });
  const handleOptionSelect = (e: React.FormEvent<EventTarget>) => {
    const target = e.currentTarget as HTMLElement;
    setFormState({ ...formState, option: target.id });
  };

  const params = new URLSearchParams(window.location.search);
  const unitNumber = params.get('unit-number')?.replace('-', '');
  const customerUnitNumber = params.get('customer-unit-number')?.toUpperCase();
  const vin = params.get('vin')?.toUpperCase();
  const last8 = params.get('last-8-of-vin')?.toUpperCase();

  useEffect(() => {
    fetchData({ unitNumber, customerUnitNumber, vin, last8 });
  }, []);

  const handleSearchValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormState({ ...formState, searchValue: e.currentTarget.value });
  };

  const handleSearch = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    switch (formState.option) {
      case 'unit-number':
        fetchData({ unitNumber: formState.searchValue.trim() });
        break;
      case 'customer-unit-number':
        fetchData({ customerUnitNumber: formState.searchValue.trim() });
        break;
      case 'vin':
        fetchData({ vin: formState.searchValue.trim() });
        break;
      case 'last-8-of-vin':
        fetchData({ last8: formState.searchValue.trim() });
        break;
    }
  };

  const fetchData = ({ unitNumber, customerUnitNumber, vin, last8 }: FetchData) => {
    if (unitNumber) {
      fetch(`https://us-central1-truck-reference.cloudfunctions.net/getVehicle/?unitNumber=${unitNumber}`)
        .then((response) => response.json())
        .then(({ data }) => {
          if (setVehicleInformationState) {
            setVehicleInformationState({ ...data[0] });
            setVehicleIsInDatabase(true);
          }
        })
        .catch((error) => {
          console.error(error);
          alert('This vehicle was not found.');
        });
      return;
    }
    if (customerUnitNumber) {
      fetch(`https://us-central1-truck-reference.cloudfunctions.net/getVehicle/?customerUnitNumber=${customerUnitNumber}`)
        .then((response) => response.json())
        .then(({ data }) => {
          if (setVehicleInformationState) {
            setVehicleInformationState({ ...data[0] });
            setVehicleIsInDatabase(true);
          }
        })
        .catch((error) => {
          console.error(error);
          alert('This vehicle was not found.');
        });
      return;
    }
    if (vin) {
      fetch(`https://us-central1-truck-reference.cloudfunctions.net/getVehicle/?vin=${vin}`)
        .then((response) => response.json())
        .then(({ data }) => {
          if (setVehicleInformationState) {
            setVehicleInformationState({ ...data[0] });
            setVehicleIsInDatabase(true);
          }
        })
        .catch((error) => {
          console.error(error);
          alert('This vehicle was not found.');
        });
      return;
    }
    if (last8) {
      fetch(`https://us-central1-truck-reference.cloudfunctions.net/getVehicle/?last8=${last8}`)
        .then((response) => response.json())
        .then(({ data }) => {
          if (setVehicleInformationState) {
            setVehicleInformationState({ ...data[0] });
            setVehicleIsInDatabase(true);
          }
        })
        .catch((error) => {
          console.error(error);
          alert('This vehicle was not found.');
        });
      return;
    }
  };

  return (
    <>
      <SearchBoxContainer>
        <SearchForm onSubmit={handleSearch}>
          <SearchBar value={formState.searchValue} onChange={handleSearchValueChange} />
          <OptionsContainer>
            <Option className={formState.option === 'unit-number' ? 'selected' : ''}>
              <OptionRadio onClick={handleOptionSelect} type='radio' name='search-option' defaultChecked={formState.option === 'unit-number'} id='unit-number' value='Unit Number' />
              <OptionLabel htmlFor='unit-number'>Unit Number</OptionLabel>
            </Option>
            <Option className={formState.option === 'customer-unit-number' ? 'selected' : ''}>
              <OptionRadio onClick={handleOptionSelect} type='radio' name='search-option' defaultChecked={formState.option === 'customer-unit-number'} id='customer-unit-number' value='Customer Unit Number' />
              <OptionLabel htmlFor='customer-unit-number'>Customer Unit Number</OptionLabel>
            </Option>
            <Option className={formState.option === 'vin' ? 'selected' : ''}>
              <OptionRadio onClick={handleOptionSelect} type='radio' name='search-option' defaultChecked={formState.option === 'vin'} id='vin' value='VIN' />
              <OptionLabel htmlFor='vin'>VIN</OptionLabel>
            </Option>
            <Option className={formState.option === 'last-8-of-vin' ? 'selected' : ''}>
              <OptionRadio onClick={handleOptionSelect} type='radio' name='search-option' defaultChecked={formState.option === 'last-8-of-vin'} id='last-8-of-vin' value='Last 8 of VIN' />
              <OptionLabel htmlFor='last-8-of-vin'>Last 8 of VIN</OptionLabel>
            </Option>
          </OptionsContainer>
          <SearchButton>Search</SearchButton>
        </SearchForm>
      </SearchBoxContainer>
      {vehicleIsInDatabase ? <Categories vehicleInformationState={vehicleInformationState}></Categories> : <></>}
    </>
  );
}
