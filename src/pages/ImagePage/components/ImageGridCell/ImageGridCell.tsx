import { FC } from 'react';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Avatar } from '@mui/material';

export const ImageGridCell: FC = ({ row }: any) => {
  return (
    <>
      <Avatar alt="Remy Sharp" variant="square" src={row.dataUrl} sx={{ width: 100, height: 100 }}>
        {!row.dataUrl && <ImageOutlinedIcon />}
      </Avatar>
    </>
  );
};
