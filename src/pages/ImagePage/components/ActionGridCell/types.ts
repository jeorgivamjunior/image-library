import { GridRowId, GridRowModesModel } from '@mui/x-data-grid';

export interface ActionGridCellProps {
  id: GridRowId;
  modesModel: GridRowModesModel;
  handleModesModelChanges: (model: GridRowModesModel) => void;
  handleRowDelete: (id: GridRowId) => void;
}
