import { ImageProps } from '../../types';

export interface ImageContextProps {
  imageList: ImageProps[];
  handleAddImage: (image: ImageProps) => void;
  handleEditImage: (image: ImageProps) => void;
  handleDeleteImage: (id: string | number) => void;
}
export interface MessageProps {
  isOpen: boolean;
  text: string;
}
