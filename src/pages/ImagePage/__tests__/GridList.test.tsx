import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GridList } from '../components/GridList/GridList';

describe('GridList file', () => {
  it('should render a table with 2 items', () => {
    const props = {
      imageList: [{ id: 1 }, { id: 2 }],
    } as any;

    render(<GridList {...props} />);

    const tableRows = screen.getAllByRole('row');

    // including the header row
    expect(tableRows).toHaveLength(3);
  });

  it('should render a table with 2 items', () => {
    const props = {
      imageList: [{ id: 1 }, { id: 2 }],
    } as any;

    render(<GridList {...props} />);

    const tableRows = screen.getAllByRole('row');

    // including the header row
    expect(tableRows).toHaveLength(3);
  });

  it('should display the table with 3 items', () => {
    const props = {
      imageList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
    } as any;

    render(<GridList {...props} />);

    const nextPageButton = screen.getByLabelText('Go to next page');

    userEvent.click(nextPageButton);

    const tableRows = screen.getAllByRole('row');

    // including the header row
    expect(tableRows).toHaveLength(2);
  });
});
