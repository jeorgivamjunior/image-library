import { FC, useContext } from 'react';

import { Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { ImageContext } from '../../contexts';
import { ImageFormPage } from '../ImageFormPage';
import { GridList } from './components';

export const ImagePage: FC = () => {
  const { imageList } = useContext(ImageContext);

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
        <GridList imageList={imageList} />
      </Container>
    </Paper>
  );
};
