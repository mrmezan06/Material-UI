import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function TextButtons() {
  return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Button</h1>
            <Stack className='flex justify-center items-center' direction="row" spacing={2}>
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
            </Stack>
        </div>
  );
}
