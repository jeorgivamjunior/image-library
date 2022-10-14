import '@fontsource/roboto/400.css';

import { FC } from 'react';

import { Container, CssBaseline } from '@mui/material';

import { Header } from './components';
import { ModalContextProvider, ImageContextProvider } from './contexts';
import { ImagePage } from './pages';

export const App: FC = () => (
  <ModalContextProvider>
    <ImageContextProvider>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="md">
        <ImagePage />
      </Container>
    </ImageContextProvider>
  </ModalContextProvider>
);
