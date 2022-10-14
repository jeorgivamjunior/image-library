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

import { Transition } from '../../components';
import { ImageContext } from '../../contexts';
import { useModal } from '../../hooks';
import { ImageProps } from '../../types';
import { ModalButton } from './ModalButton';
import { ImageFormPageProps } from './types';

export const ImageFormPage: ImageFormPageProps = ({ children }) => {
  const { handleAddImage } = useContext(ImageContext);

  const { closeModal, isOpen } = useModal('ImageFormPage');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      id: '',
      title: '',
      description: '',
      file: '',
    },
  });

  const onSubmit = (image: ImageProps): void => {
    handleAddImage(image);
    reset();
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
            <div>
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
            </div>
            <div>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
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
            </div>
            <div>
              <Controller
                name="file"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Image URL"
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
            </div>
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
