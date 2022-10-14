import { styled } from '@mui/material';

export const GridContainer = styled('div')`
  height: 690px;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 20px;

  .MuiDataGrid-columnHeaders {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
