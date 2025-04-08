import { Box, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { NAVIGATION } from '../../enum/navigation';
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
      <Box
        position={"sticky"}
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        height="56px"
        width="100%"
        sx={{
          background: "linear-gradient(180deg, #2e724d, #286a46)",
          padding:"8px 16px",          
        }}
      >
        <Container sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",          
          height: "100%",
        }}>
          <Stack flexDirection={"row"} gap={"20px"} alignItems="center" height="100%">
            {
              NAVIGATION.map((item, index) => {
                return (
                  <Stack flexDirection={"row"} alignItems={"center"} key={index} variant="body1" color="#fff" fontSize="16px" fontWeight={500}>
                    {item.name}
                    {item.icon && <item.icon sx={{ color: "#fff", marginLeft: "5px" }} />}
                  </Stack>
                )
              })
            }          
          </Stack>
          <Box>Language</Box>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Container>
      </Box>
    </>
  );
}
