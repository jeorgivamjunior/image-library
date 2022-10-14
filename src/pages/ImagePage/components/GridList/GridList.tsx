import { FC, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridRowModesModel } from '@mui/x-data-grid';

import { ImageProps } from '../../../../types';
import { ActionGridCell } from '../ActionGridCell';
import { ImageGridCell } from '../ImageGridCell';
import { SearchBar } from '../SearchBar';
import { GridContainer } from './styled';
import { GridListProps } from './types';

export const GridList: FC<GridListProps> = ({ imageList, handleRowUpdate, handleRowDelete }) => {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [modesModel, setModesModel] = useState<GridRowModesModel>({});

  useEffect(() => {
    setImages([...imageList]);
  }, [imageList]);

  const handleImagesChanges = (images: ImageProps[]): void => setImages([...images]);

  const handleModesModelChanges = (model: GridRowModesModel): void => setModesModel(model);

  const handleMuiPrevent = (_: any, event: any): void => {
    event.defaultMuiPrevented = true;
  };

  const columns: GridColDef[] = [
    { field: 'dataUrl', headerName: 'Image', width: 120, renderCell: ImageGridCell, sortable: false },
    { field: 'title', headerName: 'title', flex: 1, sortable: false, editable: true },
    { field: 'description', headerName: 'Description', flex: 1, sortable: false, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      sortable: false,
      renderCell: ({ id }) => {
        const props = { id, modesModel, handleModesModelChanges, handleRowDelete };
        return <ActionGridCell {...props} />;
      },
    },
  ];

  return (
    <Box mt={5}>
      <SearchBar imageList={imageList} handleImagesChanges={handleImagesChanges} />

      <GridContainer>
        <DataGrid
          rows={images}
          columns={columns}
          rowModesModel={modesModel}
          editMode="row"
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableColumnMenu
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowSpacing={() => ({ top: 5, bottom: 5 })}
          getRowHeight={() => 'auto'}
          onRowEditStart={handleMuiPrevent}
          onRowEditStop={handleMuiPrevent}
          processRowUpdate={handleRowUpdate}
        />
      </GridContainer>
    </Box>
  );
};
