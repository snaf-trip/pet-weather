import { FC, useState } from 'react';
import './searchLocation.components.scss';
import { LocationIcon } from './icons/locationIcon';
import { SearchIcon } from './icons/searchIcon';
import { getWeatherRequest } from '../../api/weatherRequest.api';
import weatherDataStoreStore from '../../stores/weatherDataStore.stores';

export const SearchLocation: FC = () => {
  const [location, setLocation] = useState<string | undefined>();
  const { getData } = weatherDataStoreStore;

  const updateLocation = () => {
    getData(undefined);
    getWeatherRequest(location!, getData);
  };

  const onKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      updateLocation();
    }
  };

  return (
    <div className="searchLocation__container">
      <LocationIcon />
      <input
        type="text"
        className="searchLocation__input"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        onKeyDown={onKeyDown}
      />
      <SearchIcon
        className="searchLocation__searchIcon"
        onClick={() => updateLocation()}
      />
    </div>
  );
};
