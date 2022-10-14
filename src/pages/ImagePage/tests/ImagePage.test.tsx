import { render, screen } from '@testing-library/react';

import { ImageContextProvider, ModalContextProvider } from '../../../contexts';
import { ImagePage } from '../ImagePage';

describe('ImagePage file', () => {
  it('should render the title, button, and table', async () => {
    render(
      <ModalContextProvider>
        <ImageContextProvider>
          <ImagePage />
        </ImageContextProvider>
      </ModalContextProvider>,
    );

    const tittle = screen.getByRole('heading', { name: 'Images' });
    const button = screen.getByRole('button', { name: 'Add new image' });
    const table = screen.getByRole('grid');

    expect(table).toBeInTheDocument();
    expect(tittle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
