import { AppBar, styled, Toolbar, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.light};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const StyledToolbar = styled(Toolbar)`
  justify-content: center;
`;

export const StyledImageIcon = styled('img')`
  width: 100px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const StyledTitle = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
`;
