import { render, screen } from '@testing-library/react';

import { ModalContextProvider } from '../../../contexts';
import { ModalButton } from '../ModalButton';

describe('ModalButton file', () => {
  it('should render the button', () => {
    render(<ModalButton />, { wrapper: ModalContextProvider });

    const modalButton = screen.getByRole('button', { name: 'Add new image' });

    expect(modalButton).toBeInTheDocument();
  });
});
