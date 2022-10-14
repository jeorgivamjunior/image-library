import { createContext, FC, PropsWithChildren, useState } from 'react';

import { Alert, Snackbar } from '@mui/material';

import { ImageProps } from '../../types';

interface ImageContextProps {
  selectedImage?: ImageProps;
  imageList: ImageProps[];
  handleImageChange: (image: ImageProps) => void;
  handleAddImage: (image: ImageProps) => void;
  handleEditImage: (image: ImageProps) => void;
  handleDeleteImage: (id: string | number) => void;
}

export const ImageContext = createContext<ImageContextProps>({} as any);

export const ImageContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps>();
  const [imageList, setImageList] = useState<ImageProps[]>([
    { id: 1, title: 'test', description: 'oiefoiwefhjiowe' },
    { id: 2, title: 'image', description: '3333' },
  ] as any);
  const [message, setMessage] = useState();

  const handleImageChange = (image: ImageProps): void => setSelectedImage(image);

  const handleAddImage = (image: ImageProps): void => setImageList([...imageList, image]);

  const handleEditImage = (image: ImageProps): void =>
    setImageList([
      ...imageList.map((item) => {
        if (item.id === image.id) {
          return { ...item, ...image };
        }

        return item;
      }),
    ]);

  const handleDeleteImage = (id: string | number): void =>
    setImageList([...imageList.filter((image) => image.id !== id)]);

  return (
    <ImageContext.Provider
      value={{ imageList, selectedImage, handleImageChange, handleAddImage, handleEditImage, handleDeleteImage }}
    >
      {children}

      {/* <Snackbar
        open={message.isOpen}
        onClose={toggleMessage}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={message.type}>{message.text}</Alert>
      </Snackbar> */}
    </ImageContext.Provider>
  );
};
