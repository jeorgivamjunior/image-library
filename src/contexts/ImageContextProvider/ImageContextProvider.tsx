import { createContext, FC, PropsWithChildren, useState } from 'react';

import { ImageProps } from '../../types';

interface ImageContextProps {
  selectedImage?: ImageProps;
  handleImageChange: (image: ImageProps) => void;
  handleAddImage: (image: ImageProps) => void;
  handleEditImage: (image: ImageProps) => void;
  handleDeleteImage: (image: ImageProps) => void;
}

export const ImageContext = createContext<ImageContextProps>({} as any);

export const ImageContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps>();
  const [imageList, setImageList] = useState<ImageProps>();

  const handleImageChange = (image: ImageProps): void => setSelectedImage(image);

  const handleAddImage = (image: ImageProps): void => setSelectedImage(image);

  const handleEditImage = (image: ImageProps): void => setSelectedImage(image);

  const handleDeleteImage = (image: ImageProps): void => setSelectedImage(image);

  return (
    <ImageContext.Provider
      value={{ selectedImage, handleImageChange, handleAddImage, handleEditImage, handleDeleteImage }}
    >
      {children}
    </ImageContext.Provider>
  );
};
