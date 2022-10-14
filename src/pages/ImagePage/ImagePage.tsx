import { FC } from 'react';

import { Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { ImageFormPage } from '../ImageFormPage';
import { GridList } from './components';

export const ImagePage: FC = () => {
  return (
    <Paper elevation={3}>
      <Container component="section">
        <Grid container spacing={2}>
          <Grid xs={9}>
            <Typography gutterBottom variant="h5">
              Images
            </Typography>
          </Grid>
          <Grid xs={3}>
            <ImageFormPage>
              <ImageFormPage.ModalButton />
            </ImageFormPage>
          </Grid>
        </Grid>
        <GridList />
      </Container>
    </Paper>
  );
};
