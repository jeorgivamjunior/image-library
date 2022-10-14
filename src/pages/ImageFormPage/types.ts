import { FC, PropsWithChildren } from 'react';

import { ModalButton } from './ModalButton';

export interface ImageFormPageProps extends FC<PropsWithChildren> {
  ModalButton: typeof ModalButton;
}
