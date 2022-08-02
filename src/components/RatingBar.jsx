import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


export default function BasicRating() {
  const [value, setValue] = React.useState(2);
  const [lv, setLv] = React.useState(0);
//   const [value, setValue] = React.useState<number | null>(2); //original this one but I modified upper line to worked.

  return (
    <div>
        <h1 className='text-3xl font-bold'>Rating Bar</h1>
        <div className='flex justify-center items-center'>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
                >
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly />
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={lv} onChange={(e,v) => setLv(v)} />
            </Box>
        </div>
    </div>
  );
}


/* 


*/