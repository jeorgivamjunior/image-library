import { render, screen } from '@testing-library/react';

import { ImageGridCell } from '../components/ImageGridCell';

describe('ImageGridCell file', () => {
  it('should render the image', () => {
    const props = {
      row: {
        dataUrl: 'example',
      },
    } as any;

    render(<ImageGridCell {...props} />);

    const image = screen.getByRole('img');
    const icon = screen.queryByTestId('ImageOutlinedIcon');

    expect(image).toBeInTheDocument();
    expect(icon).not.toBeInTheDocument();
  });

  it('should the icon', () => {
    const props = {
      row: {
        dataUrl: '',
      },
    } as any;

    render(<ImageGridCell {...props} />);

    const image = screen.queryByRole('img');
    const icon = screen.getByTestId('ImageOutlinedIcon');

    expect(image).not.toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
