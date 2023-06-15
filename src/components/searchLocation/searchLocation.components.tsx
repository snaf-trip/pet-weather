import { FC } from 'react';
import './searchLocation.components.scss';
import { LocationIcon } from './icons/locationIcon';
import { SearchIcon } from './icons/searchIcon';

export const SearchLocation: FC = () => {
  return (
    <div className="searchLocation__container">
      <LocationIcon />
      <input
        type="text"
        className="searchLocation__input"
        value={'Чебоксары'}
      />
      <SearchIcon className="searchLocation__searchIcon" />
    </div>
  );
};
