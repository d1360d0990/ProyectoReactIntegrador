
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function FallbackAvatars() {
  return (
    <Stack direction="row" spacing={2} >
      <Avatar src="/broken-image.jpg" />
    </Stack>
  );
}
