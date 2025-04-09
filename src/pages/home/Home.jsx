import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { CAROUSEL } from '../../enum/carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HIGHTLIGHT_NEWS } from '../../enum/news';
import StarIcon from '@mui/icons-material/Star';
import { EVENTS } from '../../enum/event';
import { SCIENCE } from '../../enum/science';
import { LOGO } from '../../enum/logo';
export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Box sx={{
    }}>
      <Carousel showArrows={true} showThumbs={false} showStatus={false}>
        {
          CAROUSEL.map((item, index) => {
            return (
              <Box key={index} sx={{ width: "100%", height: "100%" }}>
                <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%",objectFit:'cover' }} />
                <p className="legend">{item.name}</p>
              </Box>
            )
          })
        }
      </Carousel>
      <Container>
        <Stack flexDirection={"row"} alignItems={"center"} gap={"40px"}> 
          <Box position="relative" padding="40px 0 40px 50px" flex={1}>
            <Box sx={{display:'block',position:'absolute',top:0,left:0,backgroundColor:"#f2f1e2",width:'50%',height:"100%"}}></Box>
            <img            
              src="/edit.jpg"
              alt="intro"
              style={{ width: '100%', height: 'auto',position:'relative',zIndex:1 }}
            />
          </Box>
          <Box flex={1} sx={{
            marginTop: {xs:"50px", md:"0px"},
          }}>
            <Typography variant='h4' fontWeight={"bold"}>
              SỨ MẠNG, TẦM NHÌN, GIÁ TRỊ CỐT LÕI
            </Typography>
            <ul>
              <li>                
                  <Typography component={'span'} fontSize={"15px"} fontWeight={"bold"}>SỨ MẠNG: </Typography>
                  <Typography component={"span"} marginLeft={"10px"} variant='body1'>Đào tạo nguồn nhân lực y tế chất lượng cao; nghiên cứu khoa học y học và y học quân sự, ứng dụng và chuyển giao công nghệ tiên tiến; chăm sóc y khoa chuyên nghiệp, chuẩn mực đáp ứng nhu cầu bảo vệ, nâng cao sức khỏe bộ đội và nhân dân.</Typography>            
              </li>
              <li>                
                  <Typography component={'span'} fontSize={"15px"} fontWeight={"bold"}>TẦM NHÌN: </Typography>
                  <Typography component={"span"} marginLeft={"10px"} variant='body1'> Nỗ lực phấn đấu trở thành trường đại học khoa học sức khỏe đa ngành, định hướng nghiên cứu, đào tạo và nghiên cứu y học quân sự hàng đầu Việt Nam, ngang tầm với các trường đại học tiên tiến trong khu vực.</Typography>            
              </li>
              <li>                
                  <Typography minWidth={"120px"} component={'span'} fontSize={"15px"} fontWeight={"bold"}>GIÁ TRỊ CỐT LÕI: </Typography>
                  <Typography component={"span"} marginLeft={"10px"} variant='body1'> Chất lượng - Kỷ luật - Sáng tạo - Nhân ái - Hợp tác</Typography>            
              </li>
            </ul>
            <Button>Xem giới thiệu tổng quan</Button>
          </Box>
        </Stack>
        <Stack marginTop={"50px"}>
          <Stack flexDirection={'row'} alignItems={'center'} gap={"10px"}>
            <img src='/emblem.svg' style={{width:'20px', height:'26px'}}/>
            <Typography variant='h5' fontWeight={'600'}>Tin tức nổi bật</Typography>
          </Stack>
          <Stack flexDirection={"row"} alignItems={"center"} gap={'20px'}>
            {
              HIGHTLIGHT_NEWS.map((item, index) => {
                return (
                  <Stack key={index} flexDirection={"row"} alignItems={"center"} gap={"10px"} marginTop={"20px"} sx={{
                    "cursor": "pointer",
                  }}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Typography 
                      sx={{
                        textDecoration: selectedIndex === index ? "underline" : "none",
                        fontWeight: selectedIndex === index ? 600 : 400,
                      }} variant='body1'>
                        {item.name}
                    </Typography>
                  </Stack>
                )
              })
            }            
          </Stack>
          <Grid container spacing={2} marginTop="20px">
            {HIGHTLIGHT_NEWS[selectedIndex]?.post?.map((post, i) => (
              <Grid item size={{xs:6,md:3}} key={i}>
                <Box borderRadius={2} overflow="hidden" boxShadow={2}>
                  <img
                    src={post.img}
                    alt={post.name}
                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                  <Typography padding="8px" variant="body2" fontWeight={600}>
                    {post.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography marginTop={"50px"} height={"50px"} fontSize={"26px"} color='#fff' component={'span'} bgcolor={"#21593b"} lineHeight={"50px"} maxWidth={"320px"} padding={"0 10px"} borderRadius={"10px"}>
            <Typography component={"span"}>
              <StarIcon sx={{color:'#fcee1f'}}/>
            </Typography>
              Thông Báo & sự kiện
            <Typography component={"span"}>
              <StarIcon sx={{color:'#fcee1f'}}/>
            </Typography>            
          </Typography>
          <Stack flexDirection={"row"} alignItems={'center'} gap={"40px"} marginBottom={"50px"}>
            <ul>
              {
                EVENTS.slice(0,3).map((item, index) => {
                  return (
                    <li key={index} style={{marginTop: "10px", borderBottom:'1px solid #000',padding:'10px'}} >
                      {item.name}
                    </li>
                  )
                })
              }
            </ul>
            <ul>
              {
                EVENTS.slice(3,6).map((item, index) => {
                  return (
                    <li key={index} style={{marginTop: "10px", borderBottom:'1px solid #000', padding:'10px' }} >
                      {item.name}
                    </li>
                  )
                })
              }
            </ul>
          </Stack>
        </Stack>
        <Box marginBottom={"50px"}>
          <Stack flexDirection={"row"} gap={"20px"}>
              <Box>
                <Typography fontSize={"26px"} fontWeight={'bold'}>Nghiên cứu khoa học</Typography>
                <Typography color='#5f5f5f'>Học viện Quân y là một trung tâm Đào tạo, Nghiên cứu khoa học và Điều trị lớn của quân đội. Trải qua quá trình xây dựng và trưởng thành, Nghiên cứu khoa học của Học viện đã đạt được những thành tựu đáng tự hào.</Typography>
              </Box>
              <Button variant='text' size='small'>Xem thêm</Button>
          </Stack>
          <Grid container spacing={2} marginTop="20px">
              {
                SCIENCE.map((item, index) => {
                  return (
                    <Grid item size={{xs:6,md:3}} key={index}>
                      <Box borderRadius={2} overflow="hidden" boxShadow={2} minHeight={"270px"}>
                        <img
                          src={item.img}
                          alt={item.name}
                          style={{ width: "100%", height: "150px", objectFit: "cover" }}
                        />
                        <Typography padding="8px" fontSize={"14px"} color='red' fontWeight={600}>
                          {item.title}
                        </Typography>
                        <Typography padding="8px" variant="body2" fontWeight={600}>
                          {item.name}
                        </Typography>
                      </Box>
                    </Grid>
                  )
                })
              }
          </Grid>
        </Box>
        <Box bgcolor={"#f2f1e2"} padding={"50px 15px"} marginBottom={"50px"} borderRadius={"10px"}>
          <Typography fontSize={"26px"} fontWeight={"600"} marginBottom={"12px"} textAlign={"center"}>Điều trị</Typography>
          <Typography maxWidth={"87%"} margin={"0 auto"} color='#5f5f5f' textAlign={"center"} fontSize={"15px"}>Với 2 Bệnh viện thực hành (BVQY 103, Bệnh viện Bỏng Quốc gia) và Viện Mô phôi lâm sàng, Học viện Quân y là cơ sở thực hành đào tạo bác sĩ đại học, sau đại học và là một trong những cơ sở điều trị lớn trong Quân đội và cả nước. Hiện nay, trung bình hàng năm, các cơ sở điều trị của Học viện khám bệnh cho trên 220.000 lượt người, điều trị trên 30.000 lượt bệnh nhân. Ứng dụng thành công nhiều kỹ thuật tiên tiến, công nghệ hiện đại vào điều trị như mổ nội soi, đặt stent, ghép tạng, cấp cứu điều trị bỏng, phẫu thuật tạo hình vi phẫu trong điều trị di chứng bỏng và vết thương, vết loét lâu liền; kỹ thuật hiện đại hỗ trợ điều trị cho các trường hợp vô sinh...).</Typography>
          <Grid container spacing={2} marginTop="20px" textAlign={"center"}>  
              {
                LOGO.map((item, index) => {
                  return (
                    <Grid item size={4} key={index} textAlign={"center"}>
                        <img
                          src={item.img}
                          alt={item.name}
                          style={{ width: "100%", height: "150px", objectFit: "contain" }}
                        />
                        <Typography padding="8px" fontSize={"14px"} color='red' fontWeight={600}>
                          {item.name}
                        </Typography>
                      
                    </Grid>
                  )
                })
              }
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
