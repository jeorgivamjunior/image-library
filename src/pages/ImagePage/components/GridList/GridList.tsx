import { FC } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ImageProps } from '../../../../types';
import { ActionGridCell } from '../ActionGridCell';
import { ImageGridCell } from '../ImageGridCell';
import { GridContainer } from './styled';

export const GridList: FC<{ imageList: ImageProps[] }> = ({ imageList }) => {
  const columns: GridColDef[] = [
    { field: 'dataUrl', headerName: 'Image', width: 120, renderCell: ImageGridCell, sortable: false },
    { field: 'title', headerName: 'title', flex: 1, sortable: false },
    { field: 'description', headerName: 'Description', flex: 1, sortable: false },
    { field: 'id', headerName: 'Actions', type: 'actions', renderCell: ActionGridCell, sortable: false },
  ];

  return (
    <GridContainer>
      <DataGrid
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowSpacing={() => ({ top: 5, bottom: 5 })}
        getRowHeight={() => 'auto'}
        rows={imageList}
        columns={columns}
        disableColumnMenu
        disableSelectionOnClick
      />
    </GridContainer>
  );
};
