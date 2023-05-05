import { Options, SearchBar, SearchForm } from './style';

export default function SearchBox() {
  return (
    <>
      <SearchForm>
        <SearchBar />
        <Options type='radio' name='search-option' id='unit-number' value='Unit Number' defaultChecked />
        <Options type='radio' name='search-option' id='customer-unit-number' value='Customer Unit Number' />
        <Options type='radio' name='search-option' id='vin' value='VIN' />
        <Options type='radio' name='search-option' id='last8OfVin' value='Last 8 of VIN' />
      </SearchForm>
    </>
  );
}
