import { FC } from 'react';

import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { GridRowModes, GridActionsCellItem, GridRowId } from '@mui/x-data-grid';

import { ActionGridCellProps } from './types';

export const ActionGridCell: FC<ActionGridCellProps> = ({
  id,
  modesModel,
  handleRowDelete,
  handleModesModelChanges,
}) => {
  const isInEditMode = modesModel[id]?.mode === GridRowModes.Edit;

  const handleEditClick = (id: GridRowId): void =>
    handleModesModelChanges({ ...modesModel, [id]: { mode: GridRowModes.Edit } });

  const handleSaveClick = (id: GridRowId): void =>
    handleModesModelChanges({ ...modesModel, [id]: { mode: GridRowModes.View } });

  const handleCancelClick = (id: GridRowId): void =>
    handleModesModelChanges({
      ...modesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

  return (
    <>
      {isInEditMode ? (
        <>
          <GridActionsCellItem icon={<SaveIcon />} label="Save" onClick={() => handleSaveClick(id)} />,
          <GridActionsCellItem
            icon={<CancelIcon />}
            label="Cancel"
            className="textPrimary"
            onClick={() => handleCancelClick(id)}
          />
        </>
      ) : (
        <>
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleEditClick(id)}
          />
          <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={() => handleRowDelete(id)} />
        </>
      )}
    </>
  );
};
