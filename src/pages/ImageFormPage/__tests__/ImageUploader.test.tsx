import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ImageUploader } from '../components/ImageUploader/ImageUploader';

describe('ImageUploader file', () => {
  it('should render the icon when there is no image', () => {
    const props = { onFileChange: jest.fn() } as any;
    render(<ImageUploader {...props} />);

    const icon = screen.getByTestId('ImageOutlinedIcon');
    const img = screen.queryByRole('img');

    expect(icon).toBeInTheDocument();
    expect(img).not.toBeInTheDocument();
  });

  it('should render the image', () => {
    global.URL.createObjectURL = () => 'testing';
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const props = { onFileChange: jest.fn() } as any;
    render(<ImageUploader {...props} />);

    const input = screen.getByTestId('fileInput');

    userEvent.upload(input, file);

    const img = screen.getByRole('img');
    const icon = screen.queryByTestId('ImageOutlinedIcon');

    expect(img).toBeInTheDocument();
    expect(icon).not.toBeInTheDocument();
  });
});
