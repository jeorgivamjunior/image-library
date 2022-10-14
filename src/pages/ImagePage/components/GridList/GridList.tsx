import { ChangeEvent, FC, useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ImageProps } from '../../../../types';
import { ActionGridCell } from '../ActionGridCell';
import { ImageGridCell } from '../ImageGridCell';
import { GridContainer } from './styled';

export const GridList: FC<{ imageList: ImageProps[] }> = ({ imageList }) => {
  const [images, setImages] = useState([...imageList]);
  const columns: GridColDef[] = [
    { field: 'dataUrl', headerName: 'Image', width: 120, renderCell: ImageGridCell, sortable: false },
    { field: 'title', headerName: 'title', flex: 1, sortable: false, editable: true },
    { field: 'description', headerName: 'Description', flex: 1, sortable: false },
    { field: 'id', headerName: 'Actions', type: 'actions', renderCell: ActionGridCell, sortable: false },
  ];

  useEffect(() => {
    setImages([...imageList]);
  }, [imageList]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchCase = new RegExp(event.target.value, 'gi');
    const tempImages = imageList.filter(({ title }) => title.search(searchCase) !== -1);
    setImages([...tempImages]);
  };

  return (
    <Box mt={5}>
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

      <GridContainer>
        <DataGrid
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowSpacing={() => ({ top: 5, bottom: 5 })}
          getRowHeight={() => 'auto'}
          rows={images}
          columns={columns}
          disableColumnMenu
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </GridContainer>
    </Box>
  );
};
