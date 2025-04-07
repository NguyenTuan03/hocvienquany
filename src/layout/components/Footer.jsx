import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    
        <Box sx={{ backgroundColor: '#104a3e', color: '#fff', px: { xs: 3, md: 10 }, py: 5, fontSize: '14px' }}>
          <Grid container spacing={4}>
            {/* Logo + Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img
                  src="https://hocvienquany.vn/wp-content/themes/hvqy/images/logo.png"
                  alt="logo"
                  style={{ width: 60, marginRight: 10 }}
                />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    HỌC VIỆN QUÂN Y
                  </Typography>
                  <Typography variant="body2">Vietnam Military Medical University</Typography>
                </Box>
              </Box>
    
              <Typography>
                <strong>Địa chỉ:</strong> Số 160 - Đường Phùng Hưng - Phường Phúc La - Quận Hà Đông - Thành phố Hà Nội
              </Typography>
              <Typography mt={1}>
                <strong>Trưởng ban biên tập:</strong> Trung tướng GS. TS. Trần Viết Tiến - Giám đốc Học viện Quân y
              </Typography>
              <Typography mt={1}>
                <strong>Giấy phép số:</strong> 122/GP-TTĐT ngày 23/09/2008 của Bộ TT&TT
              </Typography>
            </Grid>
    
            {/* Danh mục chính */}
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                DANH MỤC CHÍNH
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link color="inherit" underline="hover">Giới thiệu</Link></li>
                <li><Link color="inherit" underline="hover">Tin tức</Link></li>
                <li><Link color="inherit" underline="hover">Tuyển sinh</Link></li>
                <li><Link color="inherit" underline="hover">Đào tạo</Link></li>
                <li><Link color="inherit" underline="hover">Nghiên cứu khoa học</Link></li>
                <li><Link color="inherit" underline="hover">Hợp tác</Link></li>
                <li><Link color="inherit" underline="hover">Liên hệ</Link></li>
              </ul>
            </Grid>
    
            {/* Hợp tác & Liên kết */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                HỢP TÁC
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link color="inherit" underline="hover">Hợp tác trong nước</Link></li>
                <li><Link color="inherit" underline="hover">Hợp tác Quốc tế</Link></li>
              </ul>
    
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom mt={2}>
                LIÊN KẾT
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link color="inherit" underline="hover">Tạp chí Y dược học Quân sự</Link></li>
                <li><Link color="inherit" underline="hover">E Learning</Link></li>
                <li><Link color="inherit" underline="hover">Học liệu</Link></li>
                <li><Link color="inherit" underline="hover">Cổng thông tin điện tử Chính phủ</Link></li>
                <li><Link color="inherit" underline="hover">Cổng Dịch vụ công Bộ Quốc Phòng</Link></li>
              </ul>
            </Grid>
    
            {/* Khác */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                KHÁC
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link color="inherit" underline="hover">Bản tin</Link></li>
                <li><Link color="inherit" underline="hover">Tổ chức</Link></li>
                <li><Link color="inherit" underline="hover">Ban biên tập</Link></li>
                <li><Link color="inherit" underline="hover">Facebook</Link></li>
                <li><Link color="inherit" underline="hover">Youtube</Link></li>
              </ul>
            </Grid>
          </Grid>
    
          {/* Contact Numbers */}
          <Box mt={4} sx={{ borderTop: '1px solid #ccc', pt: 2 }}>
            <Typography><strong>Đào tạo:</strong> 069698910</Typography>
            <Typography><strong>Tuyển sinh:</strong> 069698910</Typography>
            <Typography><strong>Hỗ trợ học viên:</strong> 069698910</Typography>
          </Box>
        </Box>
  )
}
