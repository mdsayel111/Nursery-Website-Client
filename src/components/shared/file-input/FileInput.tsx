import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { FaCloudUploadAlt } from 'react-icons/fa';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

// create file input type
type TFileInput = {
  title: string
  multiple: boolean
  name: string
}

export default function FileInput({ title, multiple, name }: TFileInput) {
  return (

    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<FaCloudUploadAlt />}
      className='!bg-primary-30'
    >
      {title}
      <VisuallyHiddenInput name={name} type="file" multiple={multiple} />
    </Button>
  );
}
