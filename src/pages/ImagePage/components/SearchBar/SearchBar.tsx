import { ChangeEvent, FC } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';

import { SearchBarProps } from './types';

export const SearchBar: FC<SearchBarProps> = ({ imageList, handleImagesChanges }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchCase = new RegExp(event.target.value, 'gi');
    const tempImages = imageList.filter(({ title }) => title.search(searchCase) !== -1);
    handleImagesChanges([...tempImages]);
  };

  return (
    <TextField
      onChange={handleSearch}
      size="small"
      label="Search by title"
      placeholder="Type someting..."
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
