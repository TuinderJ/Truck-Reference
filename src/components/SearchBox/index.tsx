import { useState } from 'react';
import { Option, OptionRadio, OptionLabel, OptionsContainer, SearchBar, SearchButton, SearchForm, SearchBoxContainer } from './style';

export default function SearchBox() {
  const [formState, setFormState] = useState({
    searchValue: '',
    option: 'unit-number',
  });
  const handleOptionSelect = (e: React.FormEvent<EventTarget>) => {
    const target = e.currentTarget as HTMLElement;
    setFormState({ ...formState, option: target.id });
  };

  const handleSearchValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormState({ ...formState, searchValue: e.currentTarget.value });
  };

  const handleSearch = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log('search for ', formState.option, formState.searchValue);
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
    </>
  );
}
