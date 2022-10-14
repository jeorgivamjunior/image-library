import { FC } from 'react';

import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

import { ActionGridCell } from '../ActionGridCell';
import { ImageGridCell } from '../ImageGridCell';
import { GridContainer } from './styled';

export const GridList: FC = () => {
  const rows: GridRowsProp = [];

  const columns: GridColDef[] = [
    { field: 'image', headerName: 'Image', width: 120, renderCell: ImageGridCell, sortable: false },
    { field: 'title', headerName: 'title', flex: 1, sortable: false },
    { field: 'author', headerName: 'Description', flex: 1, sortable: false },
    { field: 'id', headerName: 'Actions', type: 'actions', renderCell: ActionGridCell, sortable: false },
  ];

  return (
    <GridContainer>
      <DataGrid
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowSpacing={() => ({ top: 5, bottom: 5 })}
        getRowHeight={() => 'auto'}
        rows={rows}
        columns={columns}
        disableColumnMenu
        disableSelectionOnClick
      />
    </GridContainer>
  );
};
