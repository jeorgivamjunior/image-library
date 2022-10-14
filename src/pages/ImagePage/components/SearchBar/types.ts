import { ImageProps } from '../../../../types';

export interface SearchBarProps {
  imageList: ImageProps[];
  handleImagesChanges: (imageList: ImageProps[]) => void;
}
