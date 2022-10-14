import '@fontsource/roboto/400.css';

import { FC } from 'react';

import { Container, CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from './components';
import { ModalContextProvider, ImageContextProvider } from './contexts';
import { ImagePage } from './pages';
import { theme } from './styles';

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <ModalContextProvider>
      <ImageContextProvider>
        <CssBaseline />
        <Header />
        <Container component="main" maxWidth="md">
          <ImagePage />
        </Container>
      </ImageContextProvider>
    </ModalContextProvider>
  </ThemeProvider>
);
