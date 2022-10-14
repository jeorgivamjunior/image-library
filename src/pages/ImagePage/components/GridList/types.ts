import { GridRowModel, GridRowId } from '@mui/x-data-grid';

import { ImageProps } from '../../../../types';

export interface GridListProps {
  imageList: ImageProps[];
  handleRowUpdate: (newRow: GridRowModel) => GridRowModel;
  handleRowDelete: (id: GridRowId) => void;
}