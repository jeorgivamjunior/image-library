import { FC } from 'react';

import imageIcon from '../../assets/image.png';
import { StyledAppBar, StyledTitle, StyledImageIcon, StyledToolbar } from './styled';

export const Header: FC = () => {
  return (
    <StyledAppBar position="relative">
      <StyledToolbar>
        <StyledImageIcon src={imageIcon} />
        <StyledTitle variant="h4">Image Library</StyledTitle>
      </StyledToolbar>
    </StyledAppBar>
  );
};
