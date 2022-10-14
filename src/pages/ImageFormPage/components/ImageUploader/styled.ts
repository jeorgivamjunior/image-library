import { styled } from '@mui/material';

export const StyledContainer = styled('div')`
  width: 100px;
  height: 100px;
  margin: 20px auto;

  .MuiAvatar-root {
    width: 100px;
    height: 100px;
    position: relative;
    border: 1px solid red;
    padding: 2px;
  }

  label {
    cursor: pointer;
  }

  input {
    display: none;
  }
`;
