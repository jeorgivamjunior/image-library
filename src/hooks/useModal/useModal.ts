import { useContext } from 'react';

import { ModalContext } from '../../contexts';
import { useModalReturn } from './types';

export const useModal = (modalRef: string): useModalReturn => {
  const { toggleOpen, openList } = useContext(ModalContext);

  const openModal = (): void => toggleOpen(modalRef);
  const closeModal = (): void => toggleOpen(modalRef);

  return {
    openModal,
    closeModal,
    isOpen: Boolean(openList[modalRef]),
  };
};
