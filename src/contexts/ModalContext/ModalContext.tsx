import React, { createContext, FC, PropsWithChildren, useState } from 'react';

import { ModalContextProps } from './types';

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [openList, setOpenList] = useState<Record<string, boolean>>({});

  const toggleOpen = (modalRef: string): void => setOpenList({ ...openList, [modalRef]: !openList[modalRef] });

  return <ModalContext.Provider value={{ toggleOpen, openList }}>{children}</ModalContext.Provider>;
};
