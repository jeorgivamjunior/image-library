import { createContext, FC, PropsWithChildren, useState } from 'react';

import { Alert, Snackbar } from '@mui/material';

import { ImageProps } from '../../types';
import { ImageContextProps, MessageProps } from './types';

export const ImageContext = createContext<ImageContextProps>({} as any);

export const ImageContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [imageList, setImageList] = useState<ImageProps[]>([
    { id: 1, title: 'test', description: 'oiefoiwefhjiowe' },
    { id: 2, title: 'image', description: '3333' },
  ] as any);

  const [message, setMessage] = useState<MessageProps>({
    isOpen: false,
    text: '',
  });

  const handleAddImage = (image: ImageProps): void => {
    setImageList([...imageList, image]);

    toggleMessage('Successfully added');
  };

  const handleEditImage = (image: ImageProps): void => {
    setImageList([
      ...imageList.map((item) => {
        if (item.id === image.id) {
          return { ...item, ...image };
        }

        return item;
      }),
    ]);

    toggleMessage('Successfully updated');
  };

  const handleDeleteImage = (id: string | number): void => {
    setImageList([...imageList.filter((image) => image.id !== id)]);

    toggleMessage('Successfully deleted');
  };

  const toggleMessage = (text: string): void => setMessage({ text, isOpen: !message.isOpen });
  const onClose = (): void => setMessage({ ...message, isOpen: !message.isOpen });

  return (
    <ImageContext.Provider value={{ imageList, handleAddImage, handleEditImage, handleDeleteImage }}>
      {children}

      <Snackbar
        open={message.isOpen}
        onClose={onClose}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success">{message.text}</Alert>
      </Snackbar>
    </ImageContext.Provider>
  );
};
