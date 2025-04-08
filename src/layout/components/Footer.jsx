import { Box, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    
    <Box
      component="footer"
      sx={{
        backgroundImage: "url('/bg-footer.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#2c6f4b',
        color: '#fff',
        px: { xs: 3, md: 10 },
        py: 5,
        fontSize: '14px',
        lineHeight: 1.8,
      }}
    >
          <Grid container spacing={2} mb={4}>
            <Grid item size={5}>
              <img src='/Logo.png' width={"350px"} height={"100%"}/>
            </Grid>
            <Grid item size={7} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
              <Grid container spacing={2} width={"100%"}>
                <Grid item size={4}>
                  <Typography color='#ffb236'><strong>Đào tạo:</strong></Typography>
                  <Typography>069698910</Typography>
                </Grid>
                <Grid item size={4}>
                  <Typography color='#ffb236'><strong>Tuyển sinh:</strong></Typography>
                  <Typography>069698910</Typography>
                </Grid>
                <Grid item size={4}>
                  <Typography color='#ffb236'><strong>Hỗ trợ học viên:</strong></Typography>
                  <Typography>069698910</Typography>  
                </Grid>
              </Grid>
            </Grid>            
          </Grid>
            <Box
                sx={{
                    borderBottom: '1px dashed #dcdcdc',
                    width: '100%',
                    marginY: '16px',
                }}
            />
          <Grid container spacing={4}>
            <Grid size={5}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>                
                <Stack>
                  <Typography fontSize={"15px"} sx={{ fontWeight: 'bold' }}>
                    CỔNG THÔNG TIN ĐIỆN TỬ HỌC VIỆN QUÂN Y - BỘ QUỐC PHÒNG
                  </Typography>
                  <Typography>
                  <strong>Địa chỉ:</strong> 50 Lê Văn Việt, Hiệp Phú , Thủ Đức, HCM
                  </Typography>
                  <Typography mt={1}>
                    <strong>Trưởng ban biên tập:</strong> Đại Tá: TS BS Nguyễn Ngọc Huy
                  </Typography>
                  <Typography mt={1}>
                    <strong>Giấy phép số:</strong> 122/GP-TTĐT ngày 23/09/2008 của Bộ TT&TT
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid size={7}>
                <Grid container spacing={2} width={"100%"}>
                  <Grid size={4} item xs={6} md={3}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      DANH MỤC CHÍNH
                    </Typography>
                    <ul style={{ padding: 0, margin: 0 }}>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Giới thiệu</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Tin tức</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Tuyển sinh</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Đào tạo</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Nghiên cứu khoa học</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Hợp tác</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Liên hệ</Link></li>
                    </ul>
                  </Grid>
                      
                  <Grid size={4} item xs={6} md={3}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      HỢP TÁC
                    </Typography>
                    <ul style={{ padding: 0, margin: 0 }}>
                    <li style={{marginBottom:'8px'}}><Link sx={{textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Hợp tác trong nước</Link></li>
                    <li style={{marginBottom:'8px'}}><Link sx={{textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Hợp tác quốc tế</Link></li>
                    </ul>
          
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={2}>
                      LIÊN KẾT
                    </Typography>
                    <ul style={{ padding: 0, margin: 0 }}>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Tạp chí Y dược học Quân sự</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">E Learning</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Học liệu</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Cổng thông tin điện tử Chính phủ</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Cổng Dịch vụ công Bộ Quốc Phòng</Link></li>                                                                                                          
                    </ul>
                  </Grid>
                      
                  <Grid size={4} item xs={6} md={3}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      KHÁC
                    </Typography>
                    <ul style={{ padding: 0, margin: 0 }}>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Bản tin</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Tổ chức</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Ban biên tập</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Facebook</Link></li>
                      <li style={{marginBottom:'8px'}}><Link sx={{fontSize:'14px',textDecoration:'none',color:'#b8dbc8',cursor:'pointer',":hover":{color:'#fff'}}} color="#b8dbc8" underline="none">Youtube</Link></li>                      
                    </ul>
                  </Grid>
                </Grid>
            </Grid>                            
          </Grid>                        
        </Box>
  )
}
