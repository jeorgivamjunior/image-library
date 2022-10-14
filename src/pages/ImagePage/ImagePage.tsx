import { FC } from 'react';

import { Button, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { useModal } from '../../hooks';
import { ImageFormPage } from '../ImageFormPage';

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
              <ImageFormPage.Button />
            </ImageFormPage>
          </Grid>
        </Grid>
        List of images
      </Container>
    </Paper>
  );
};
