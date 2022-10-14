/* eslint-disable react/prop-types */
import { useContext } from 'react';

import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Dialog,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Transition } from '../../components';
import { ImageContext } from '../../contexts';
import { useModal } from '../../hooks';
import { ImageProps } from '../../types';
import { ImageUploader } from './components';
import { ModalButton } from './ModalButton';
import { ImageFormPageProps } from './types';

export const ImageFormPage: ImageFormPageProps = ({ children }) => {
  const { handleAddImage } = useContext(ImageContext);
  const { closeModal, isOpen } = useModal('ImageFormPage');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      id: uuidv4(),
      title: '',
      description: '',
      dataUrl: '',
    },
  });

  const onSubmit = (image: ImageProps): void => {
    handleAddImage(image);
    reset();
  };

  const handleImageChanges = (dataUrl: string): void => {
    setValue('dataUrl', dataUrl);
  };

  return (
    <>
      {children}
      <Dialog
        fullWidth
        maxWidth="xs"
        fullScreen={fullScreen}
        TransitionComponent={Transition}
        open={isOpen}
        onClose={closeModal}
      >
        <form onSubmit={handleSubmit(onSubmit) as () => void}>
          <DialogTitle color="primary">Add new image</DialogTitle>
          <DialogContent>
            <ImageUploader onFileChange={handleImageChanges} />

            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Title"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  margin="normal"
                  {...field}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  multiline
                  rows={4}
                  label="Description"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  margin="normal"
                  {...field}
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" onClick={closeModal} autoFocus>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

ImageFormPage.ModalButton = ModalButton;
