import { Box, Container, FormControl, FormHelperText, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NAVIGATION } from '../../enum/navigation';
import { EnglishIcon, VietnamIcon } from './../../components/icon/Icon';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';
export default function Header() {  
  const [language, setLanguage] = useState('English');
  const nav = useNavigate()
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
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
                  <Box
                    onClick={() => nav(item.to)}
                    key={index}
                    sx={{
                      position: "relative",
                      transition: "all ease 0.2s",
                      "&:hover .submenu": {
                        transition: "all ease 0.2s",
                        display: "block",
                      }
                    }}
                  >
                    <Stack marginTop={"10px"} paddingBottom={"10px"} flexDirection={"row"} alignItems={"center"} variant="body1" color="#fff" fontSize="16px" fontWeight={500}
                    sx={{
                      position:'relative',
                      display:'line-block',
                      cursor:'pointer',
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: "50%",
                        bottom: 0,
                        width: 0,
                        height: "2px",
                        backgroundColor: "yellow",
                        color: "yellow",
                        transition: "all 0.3s ease",
                        transform: "translateX(-50%)",
                      },
                      "&:hover > svg": {
                        color: "yellow",
                      },
                      "&:hover": {
                        color: "yellow",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                    >
                      {item.name}
                      {item.icon && <item.icon sx={{ color: "#fff", marginLeft: "5px", "&:hover":{color:'yellow'} }} />}
                    </Stack>
                    {item.children && (
                      <Stack
                        className="submenu"
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          padding:'10px 0',
                          backgroundColor: "#fff",
                          color: "#000",
                          display: "none",
                          minWidth: "200px",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                          zIndex: 10,
                          transition: "all ease 0.2s",
                        }}
                      >
                        {item.children.map((child, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              padding: "10px 15px",
                              transition: "all ease 0.2s",
                              "&:hover": {
                                backgroundColor: "#dfdbdb",
                              }
                            }}
                          >
                            {child.name}
                          </Box>
                        ))}
                      </Stack>
                    )}
                  </Box>
                )
              })
            }          
          </Stack>
          <Box>
          <FormControl sx={{ mx: 1, minWidth: 100, 
            "& .MuiSelect-outlined": {
              padding:"0px",
              border:"none",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", 
              display: "none",
            },
            "& .MuiSelect-icon": {
              display: "none",
            }
          }}>
            <Select
              value={language}
              onChange={handleChange}
              displayEmpty
              renderValue={selected => {
                if (selected === 'English') {
                  return <EnglishIcon/>
                }
                if (selected === 'Vietnamese') {
                  return <VietnamIcon/>
                }
              }}
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                padding: "0px",
                border: "none",
                "& .MuiSelect-select": {
                  padding: "0px !important",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",                  
                  border: "none !important",
                }
              }}
            >              
              <MenuItem value={'English'} sx={{justifyContent:'center'}}>
                <EnglishIcon/>
              </MenuItem>
              <MenuItem value={'Vietnamese'} sx={{justifyContent:'center'}}>
                <VietnamIcon/>
              </MenuItem>              
            </Select>            
          </FormControl>
          </Box>
          <Box>
            <form style={{display:'flex',position:'relative',transition:'all ease 0.2s'}}>
            <Box
              component="input"
              placeholder="Nhập từ khóa tìm kiếm"
              sx={{
                backgroundColor: 'hsl(0deg 0% 100% / 20%)',
                border: 'none',
                fontSize: '13px',
                color: 'white',
                width: '100%',
                borderRadius:'4px',
                minWidth: '230px',
                marginRight: 0,
                padding: '6px 30px 6px 12px',
                outline: 'none',
                '&::placeholder': {
                  color: 'rgba(255,255,255,0.7)',
                  fontStyle: 'italic',
                  fontSize: '13px',
                },
              }}
            />
              <button style={{
                position: 'absolute',
                right: "10px",
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                lineHeight:'8px'
              }}>
                <SearchIcon sx={{
                  width: '20px',
                  height: '20px',
                }}/>
              </button>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
}
