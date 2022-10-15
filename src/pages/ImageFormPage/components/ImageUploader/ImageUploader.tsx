import { ChangeEvent, FC, useEffect, useState } from 'react';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Avatar, Button } from '@mui/material';

import { StyledContainer } from './styled';

export const ImageUploader: FC<{ onFileChange: (dataUrl: string) => void }> = ({ onFileChange }) => {
  const [dataUrl, setDataUrl] = useState('');

  const handleInputChanges = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event?.target?.files?.length) {
      setDataUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleRemoveChange = (): void => setDataUrl('');

  useEffect(() => {
    onFileChange(dataUrl);
  }, [dataUrl]);

  return (
    <StyledContainer>
      <label htmlFor="imageInput">
        <Avatar variant="square" src={dataUrl}>
          {!dataUrl && <ImageOutlinedIcon fontSize="large" />}
          <input data-testid="fileInput" id="imageInput" type="file" onChange={handleInputChanges}  accept="image/png, image/jpeg" />
        </Avatar>
      </label>

      <Button onClick={handleRemoveChange} fullWidth>
        Remove
      </Button>
    </StyledContainer>
  );
};
