import { FC } from 'react';

import { Button } from '@mui/material';

import { useModal } from '../../hooks';

export const ModalButton: FC = () => {
  const { openModal } = useModal('ImageFormPage');

  const handleAddNewImageClick = (): void => {
    openModal();
  };

  return (
    <Button variant="outlined" fullWidth onClick={handleAddNewImageClick}>
      Add new image
    </Button>
  );
};
