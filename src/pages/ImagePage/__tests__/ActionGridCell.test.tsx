import { GridRowModes } from '@mui/x-data-grid';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ActionGridCell } from '../components/ActionGridCell/ActionGridCell';

describe('GridList file', () => {
  it('should render the edit and delete button based on the modes modal', () => {
    const props = {
      id: 1,
      modesModel: { 2: { mode: GridRowModes.Edit } },
    } as any;

    render(<ActionGridCell {...props} />);

    const editButton = screen.getByRole('menuitem', { name: 'Edit' });
    const deleteButton = screen.getByRole('menuitem', { name: 'Delete' });

    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it('should call edit and delete action', () => {
    const props = {
      id: 1,
      modesModel: { 2: { mode: GridRowModes.Edit } },
      handleModesModelChanges: jest.fn(),
      handleRowDelete: jest.fn(),
    } as any;

    render(<ActionGridCell {...props} />);

    const editButton = screen.getByRole('menuitem', { name: 'Edit' });
    const deleteButton = screen.getByRole('menuitem', { name: 'Delete' });

    userEvent.click(editButton);
    expect(props.handleModesModelChanges).toHaveBeenCalledWith({
      ...props.modesModel,
      [props.id]: { mode: GridRowModes.Edit },
    });

    userEvent.click(deleteButton);
    expect(props.handleRowDelete).toHaveBeenCalledWith(props.id);
  });
});
