import { FC } from 'react';

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { IconButton } from '@mui/material';

export const ActionGridCell: FC = ({ row }: any) => {
  return (
    <IconButton aria-label="View" color="success">
      <VisibilityRoundedIcon />
    </IconButton>
  );
};
