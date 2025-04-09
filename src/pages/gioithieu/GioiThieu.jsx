import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Container, Grid, Link, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { TRAINING_PROGRAM } from './../../enum/TrainingProgram';
import { RESEARCH_FIELD } from '../../enum/researchField';
import { ACHIEVEMENTS } from '../../enum/achievement';
import { AWARDS } from '../../enum/awards';
export default function GioiThieu() {
    const nav = useNavigate()
    const breadcrumbs = [
        <Link sx={{cursor:'pointer'}}  underline="hover" key="1" color="#2271cd" onClick={handleClick}>
          Home
        </Link>,        
        <Typography key="3" sx={{ color: 'text.primary' }}>
          Giới thiệu
        </Typography>,
      ];
      function handleClick(event) {
        event.preventDefault();
        nav('/')
      }
  return (
    <Container>       
        <Box padding={"40px 0"}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
            <Box
                sx={{
                    borderBottom: '1px dashed #dcdcdc',
                    width: '100%',
                    marginY: '16px',
                }}
            />
            <div class="entry-content entry">
            <Paper elevation={6} sx={{ 
                p: { xs: 3, md: 6 }, 
                mb: 8, 
                borderRadius: 4,
                background: 'linear-gradient(to right, #ffffff, #f8f9fa)'
            }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
                    <Box sx={{ flex: 1 }}>
                    <Typography variant="h2" fontWeight="800" color="#21593b" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                        Giới thiệu
                    </Typography>              
                    <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem' }}>
                    Học viện Quân y (tiền thân là Trường Quân y sĩ Việt Nam, Thành lập ngày 10/3/1949) trực thuộc Bộ Quốc phòng. Qua quá trình xây dựng, phát triển và trưởng thành, các thế hệ lãnh đạo, cán bộ, nhà giáo, thầy thuốc, nhân viên, học viên, chiến sĩ trong toàn Học viện bằng nhiệt tình, trí tuệ và cả xương máu đã vun đắp nên bề dày thành tích và truyền thống đáng tự hào
                    </Typography>                            
                    </Box>
                    <Box sx={{ 
                    flex: 1, 
                    height: '100%',
                    display: { xs: 'none', md: 'block' },
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: 6
                    }}>
                    <img 
                        src="/edit.jpg" 
                        alt="Campus" 
                        style={{ 
                            objectFit: 'contain',
                        }}
                    />
                    </Box>
                </Stack>
            </Paper>                
            <Typography variant="h2" textAlign={"center"} marginBottom={"50px"} fontWeight="800" color="#21593b" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Các giai đoạn phát triển
            </Typography>   
              <Timeline position="alternate" sx={{fontSize:'25px'}}>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Trường Quân y sĩ Việt Nam (1949 – 1957),</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Trường sĩ quan Quân y (1957 – 1962),</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Viện nghiên cứu Y học Quân sự (1962 – 1966)</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Đại học Quân y (1966 – 1981)</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    </TimelineSeparator>
                    <TimelineContent>Học viện Quân y (1981 đến nay)</TimelineContent>
                </TimelineItem>
                </Timeline>        
                <Typography variant="h2" textAlign={"center"} marginBottom={"50px"} fontWeight="800" color="#21593b" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                    Những thành tích vẻ vang trong quá trình xây dựng, phát triển và trưởng thành
                </Typography>                           
                
                <Paper elevation={6} sx={{ 
                    p: { xs: 3, md: 6 }, 
                    mb: 8, 
                    borderRadius: 4,
                    background: 'linear-gradient(to right, #ffffff, #f8f9fa)'
                }}>
                    <Typography variant="body" fontWeight="800" color="#21593b" gutterBottom sx={{marginBottom:'30px', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                        Trong sự nghiệp giải phóng dân tộc, xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa
                    </Typography>              
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center" marginTop={"40px"}>
                        <Box sx={{ flex: 1 }}>                            
                            <Typography sx={{ mb: 2, fontSize: '1.1rem' }}>
                                Ra đời trong những năm đầu của cuộc kháng chiến chống Pháp, vừa chiến đấu, vừa giảng dạy, học tập cán bộ, học viên Nhà trường đã vượt qua mọi hy sinh, gian khổ đào tạo cho Quân đội trên 400 thầy thuốc tham gia bảo vệ sức khoẻ bộ đội, cứu chữa thương bệnh binh trong các chiến dịch: Biên giới, Tây Bắc, Điện Biên Phủ… Góp phần vào chiến công chung của dân tộc trong thắng lợi vẻ vang của cuộc kháng chiến chống Pháp.
                            </Typography>                            
                            <Typography sx={{ mb: 2, fontSize: '1.1rem' }}>
                                Đào tạo: Sau ngày miền Bắc giải phóng, năm 1958, phối hợp với Trường Đại học y Hà Nội đào tạo các khóa bác sĩ Quân y đa khoa đầu tiên, Bệnh vện 103 hợp nhất về Trường sĩ quan Quân y và trở thành bệnh viện thực hành của Nhà trường. Trong cuộc Kháng chiến chống Mỹ, với điều kiện chiến tranh vô cùng ác liệt, cán bộ – chiến sĩ, thầy – trò Nhà trường đã khắc phục mọi khó khăn gian khổ đào tạo cho Quân đội trên 4000 Bác sĩ – Dược sĩ bậc đại học. Hàng chục đội điều trị của Học viện có mặt trên hầu khắp các chiến trường cứu chữa thương binh. Nhiều đồng chí sẵn sàng hy sinh tính mạng của mình để bảo vệ sức khoẻ của đồng chí đồng đội. Nêu những tấm gương sáng về phẩm chất tốt đẹp của anh Bộ đội cụ Hồ và người thầy thuốc Quân y.
                            </Typography>                            

                        </Box>
                        <Box sx={{ 
                        flex: 1, 
                        height: '100%',
                        display: { xs: 'none', md: 'block' },
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: 6
                        }}>
                        <img 
                            src="/edit.jpg"
                            alt="Campus" 
                            style={{ 
                            objectFit: 'contain',                
                            }}
                        />
                        </Box>
                    </Stack>
                </Paper>                

                <Paper elevation={6} sx={{ 
                    p: { xs: 3, md: 6 }, 
                    mb: 8, 
                    borderRadius: 4,
                    background: 'linear-gradient(to right, #ffffff, #f8f9fa)'
                }}>
                    <Typography variant="body" fontWeight="800" color="#21593b" gutterBottom sx={{marginBottom:'30px', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                        Trong sự nghiệp đổi mới
                    </Typography>              
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center" marginTop={"40px"}>
                        <Box sx={{ flex: 1 }}>                            
                            <Typography sx={{ mb: 2, fontSize: '1.1rem' }}>
                            Trước yêu cầu của nhiệm vụ xây dựng Ngành Quân y, đáp ứng mục tiêu xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, từng b¬ước hiện đại, ngày 16.12.1981, trên cơ sở Trường Đại học Quân y, Bộ Quốc phòng quyết định thành lập Học viện Quân y. Đến nay, Học viện có bước phát triển lớn về tổ chức biên chế và chất lượng đội ngũ cán bộ. Hiện nay, Học viện Quân y có 10 Phòng trực thuộc, 2 Bệnh viện thực hành (Bệnh viện 103 và Viện Bỏng Quốc gia), 1 Trường Trung cấp y, 4 hệ quản lý học viên, 7 trung tâm và gần 100 Bộ môn – Khoa. Trên 90 % cán bộ, giảng viên của Học viện đạt trình độ sau đại học, trong đó có 156 Tiến sĩ; 5 Nhà giáo được tặng Danh hiệu Nhà giáo Nhân dân; 6 Thầy thuốc được tặng Danh hiệu Thầy thuốc Nhân dân; 29 Nhà giáo được tặng Danh hiệu Nhà giáo Ưu tú; 100 thầy thuốc được tặng Danh hiệu Thầy thuốc Ưu tú; 36 cán bộ làm công tác giảng dạy, nghiên cứu khoa học được phong Giáo sư và 102 cán bộ được phong Phó Giáo sư.
                            </Typography>                            
                            <Typography sx={{ mb: 2, fontSize: '1.1rem' }}>
                                Hiện nay, Học viện thực hiện nhiệm vụ trọng tâm: Đào tạo, Nghiên cứu khoa học và Điều trị.
                            </Typography>                            

                        </Box>
                        <Box sx={{ 
                        flex: 1, 
                        height: '100%',
                        display: { xs: 'none', md: 'block' },
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: 6
                        }}>
                        <img 
                            src="/edit.jpg"
                            alt="Campus" 
                            style={{ 
                            objectFit: 'contain',                
                            }}
                        />
                        </Box>
                    </Stack>
                </Paper>             
                                
                <Typography variant="h2" textAlign={"center"} marginBottom={"50px"} fontWeight="800" color="#21593b" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                    Đào tạo
                </Typography>

                <Grid container spacing={4}>
                    {TRAINING_PROGRAM.map((program, index) => (
                    <Grid item size={12} xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardMedia
                                sx={{ height: 160 }}
                                image="https://bizweb.dktcdn.net/100/385/697/files/gquz7f40wsjh2bsv-i7ammlxph9lqlfbf-de1685c1-311b-4b1e-9117-59f06aa0102b.jpg?v=1716197063144"
                                title={program.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                {program.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {program.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>  
                
                <Typography marginTop={"50px"} variant="h2" textAlign={"center"} marginBottom={"50px"} fontWeight="800" color="#21593b" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                    Nghiên cứu khoa học
                </Typography>
                
                <Grid container spacing={4}>
                {RESEARCH_FIELD.map((field, index) => (
                    <Grid size={6} item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ height: '100%', p: 2, boxShadow: 3 }}>
                        <Stack direction="column" spacing={2} alignItems="center">
                            <field.icon sx={{ fontSize: 40, color: 'primary.main' }} />                            
                            <Typography variant="h6" component="div" sx={{ fontWeight: 600, textAlign: 'center' }}>
                            {field.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                            {field.description}
                            </Typography>
                        </Stack>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                
                <Typography marginTop={"50px"} variant="h2" textAlign={"center"} marginBottom={"50px"} fontWeight="800" color="#21593b" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                    Những thành tích tiêu biểu
                </Typography>
                
                <Grid container spacing={4}>
                    {ACHIEVEMENTS.map((item, index) => (
                    <Grid size={6} item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                                <item.icon sx={{ fontSize: 40, color: 'primary.main' }} />  
                                <Typography variant="h6">{item.title}</Typography>
                            </Stack>
                            <Typography variant="body2" color="text.secondary">
                            {item.description}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                <Typography marginTop={"50px"} variant="h2" textAlign={"center"} marginBottom={"50px"} fontWeight="800" color="#21593b" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                    Các phần thưởng và danh hiệu cao quý được Đảng và Nhà nước phong tặng
                </Typography>
                <Grid container spacing={4}>
                    {AWARDS.map((award, index) => (
                    <Grid size={3} item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%', boxShadow: 3 }}>
                        <CardContent>
                            <Stack direction="row" spacing={2} alignItems="flex-start">
                                <award.icon sx={{ fontSize: 40, color: 'primary.main' }} />
                            <Typography variant="body2" color="text.primary">
                                {award.text}
                            </Typography>
                            </Stack>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>                
            </div>
        </Box>
    </Container>
  )
}
