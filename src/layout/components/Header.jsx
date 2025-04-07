import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
export default function Header() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("/bg-header.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50%',        
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography height={"160px"} component="a" display={"flex"} alignItems={'center'}>
          <img src="/logo.svg" alt="Logo" />
        </Typography>      
      </Box>
      <Box>
        Navigate o day
      </Box>
    </>
  );
}
