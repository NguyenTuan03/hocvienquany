import { Box, Button, Container, Stack, Typography, Paper, Chip, List, ListItem, ListItemIcon, ListItemText, Pagination } from '@mui/material';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ScienceIcon from '@mui/icons-material/Science';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Sample data
const NEWS_CATEGORIES = [
  "Hợp tác quốc tế",
  "Công tác đảng - Chính trị",
  "Giáo dục & Đào tạo",
  "Nghiên cứu khoa học",
  "Hành chính - Hậu cần",
  "Chuyển đổi số"
];

const LATEST_NEWS = [
  { title: "Thông báo mời báo giá", content: "Kính gửi: Các đơn vị sửa chữa ô tô...", author: "Phòng Hậu Cần", date: "09-04-2025", category: "Hành chính - Hậu cần", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=600&q=80" },
  { title: "Hội nghị hợp tác quốc tế", content: "Học viện Quân y tổ chức hội nghị với các đối tác nước ngoài...", author: "Ban Hợp tác Quốc tế", date: "08-04-2025", category: "Hợp tác quốc tế", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
  { title: "Tập huấn chính trị tư tưởng", content: "Khóa tập huấn dành cho cán bộ và giảng viên...", author: "Ban Chính trị", date: "07-04-2025", category: "Công tác đảng - Chính trị", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  { title: "Lễ tốt nghiệp khóa 2025", content: "Học viện tổ chức lễ tốt nghiệp cho học viên...", author: "Ban Đào tạo", date: "06-04-2025", category: "Giáo dục & Đào tạo", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=600&q=80" },
  { title: "Công bố nghiên cứu mới", content: "Nghiên cứu về điều trị ung thư đạt kết quả đột phá...", author: "Ban Khoa học", date: "05-04-2025", category: "Nghiên cứu khoa học", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
  { title: "Ký kết hợp tác với Nhật Bản", content: "Học viện ký kết hợp tác nghiên cứu với đại học Nhật Bản...", author: "Ban Hợp tác Quốc tế", date: "04-04-2025", category: "Hợp tác quốc tế", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  { title: "Hội thảo chuyển đổi số", content: "Ứng dụng công nghệ số trong quản lý y tế...", author: "Ban CNTT", date: "03-04-2025", category: "Chuyển đổi số", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=600&q=80" },
  { title: "Đào tạo kỹ năng thực hành", content: "Khóa đào tạo thực hành cho sinh viên y khoa...", author: "Ban Đào tạo", date: "02-04-2025", category: "Giáo dục & Đào tạo", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
  { title: "Hội nghị khoa học quân y", content: "Hội nghị với sự tham gia của các chuyên gia đầu ngành...", author: "Ban Khoa học", date: "01-04-2025", category: "Nghiên cứu khoa học", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  { title: "Thông báo nghỉ lễ", content: "Thông báo lịch nghỉ lễ 30/4 và 1/5...", author: "Phòng Hậu Cần", date: "31-03-2025", category: "Hành chính - Hậu cần", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=600&q=80" },
  { title: "Hợp tác với Mỹ", content: "Học viện ký kết hợp tác với bệnh viện Mỹ...", author: "Ban Hợp tác Quốc tế", date: "30-03-2025", category: "Hợp tác quốc tế", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
  { title: "Hội thảo tư tưởng chính trị", content: "Nâng cao nhận thức chính trị cho cán bộ...", author: "Ban Chính trị", date: "29-03-2025", category: "Công tác đảng - Chính trị", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  { title: "Khóa học y khoa nâng cao", content: "Khóa học dành cho bác sĩ quân y...", author: "Ban Đào tạo", date: "28-03-2025", category: "Giáo dục & Đào tạo", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=600&q=80" },
  { title: "Nghiên cứu vắc-xin mới", content: "Nghiên cứu vắc-xin phòng bệnh truyền nhiễm...", author: "Ban Khoa học", date: "27-03-2025", category: "Nghiên cứu khoa học", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
  { title: "Triển khai hệ thống ERP", content: "Ứng dụng ERP trong quản lý hành chính...", author: "Ban CNTT", date: "26-03-2025", category: "Chuyển đổi số", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  { title: "Thông báo bảo trì thiết bị", content: "Lịch bảo trì thiết bị y tế tháng 4...", author: "Phòng Hậu Cần", date: "25-03-2025", category: "Hành chính - Hậu cần", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=600&q=80" },
  { title: "Hợp tác với Hàn Quốc", content: "Học viện ký kết với đại học Hàn Quốc...", author: "Ban Hợp tác Quốc tế", date: "24-03-2025", category: "Hợp tác quốc tế", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
  { title: "Hội nghị cán bộ", content: "Hội nghị đánh giá công tác đảng...", author: "Ban Chính trị", date: "23-03-2025", category: "Công tác đảng - Chính trị", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
  { title: "Đào tạo bác sĩ chuyên sâu", content: "Khóa đào tạo chuyên sâu về phẫu thuật...", author: "Ban Đào tạo", date: "22-03-2025", category: "Giáo dục & Đào tạo", image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=600&q=80" },
  { title: "Công bố nghiên cứu tim mạch", content: "Nghiên cứu mới về điều trị bệnh tim mạch...", author: "Ban Khoa học", date: "21-03-2025", category: "Nghiên cứu khoa học", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" },
];

const IMPORTANT_ANNOUNCEMENTS = [
  { title: "Lịch nghỉ lễ 30/4 - 1/5", date: "25/04/2025", content: "Thông báo lịch nghỉ lễ 30/4 và 1/5..." },
  { title: "Kế hoạch phòng chống dịch", date: "20/04/2025", content: "Triển khai biện pháp phòng chống dịch..." },
  { title: "Thông báo tuyển dụng", date: "15/04/2025", content: "Tuyển dụng giảng viên y khoa..." },
];

const UPCOMING_EVENTS = [
  { title: "Lễ kỷ niệm thành lập", date: "10/05/2025", location: "Hội trường lớn" },
  { title: "Hội thảo khoa học quốc tế", date: "15/05/2025", location: "Phòng họp tầng 3" },
  { title: "Ngày hội việc làm", date: "20/05/2025", location: "Sân vận động" },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Filter news based on category
  const filteredNews = LATEST_NEWS.filter(news => selectedCategory === "Tất cả" || news.category === selectedCategory);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const currentNews = filteredNews.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f7', minHeight: '100vh' }}>
    {/* Hero Banner */}
    <Box sx={{ position: 'relative', height: { xs: '50vh', md: '70vh' } }}>
      <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={6000}>
        <Box sx={{ height: '70vh', position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }} />
          <img src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80" alt="Học viện Quân y" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <Box sx={{ position: 'absolute', top: '50%', left: { xs: '5%', md: '10%' }, transform: 'translateY(-50%)', zIndex: 2, maxWidth: { xs: '90%', md: '50%' }, color: 'white' }}>
            <Typography variant='h2' fontWeight='bold' sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Học viện Quân y
            </Typography>
            <Typography variant='body1' sx={{ mt: 2, mb: 3, fontSize: { xs: '1rem', md: '1.2rem' }, textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              70 năm đào tạo bác sĩ quân y tài đức, phục vụ nhân dân và bảo vệ Tổ quốc
            </Typography>
            <Button variant="contained" sx={{ bgcolor: '#21593b', '&:hover': { bgcolor: '#184328' }, borderRadius: 2, px: 3, py: 1 }}>
              Tìm hiểu thêm <ArrowForwardIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
      </Carousel>
      
    </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, position: 'sticky', top: 0, zIndex: 10, bgcolor: '#f5f5f7', py: 3, borderBottom: '1px solid #e0e0e0' }}>
  <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 3, color: '#21593b' }}>
    Danh mục tin tức
  </Typography>
  <Stack
    direction="row"
    spacing={1}
    sx={{
      overflowX: 'auto',
      flexWrap: 'nowrap',
      gap: 1,
      
      width: '1500px',  
      padding: 1
    }}
  >
    {["Tất cả", ...NEWS_CATEGORIES].map((category) => (
      <Chip
        key={category}
        label={category}
        onClick={() => { setSelectedCategory(category); setPage(1); }}
        sx={{
          px: 2,
          py: 2.5,
          fontSize: '1rem',
          fontWeight: 'medium',
          borderRadius: '25px',
          backgroundColor: selectedCategory === category ? '#21593b' : '#ffffff',
          color: selectedCategory === category ? 'white' : '#21593b',
          border: '2px solid #21593b',
          boxShadow: selectedCategory === category ? '0 4px 12px rgba(33, 89, 59, 0.3)' : 'none',
          transition: 'all 0.3s ease',
          '&:hover': { backgroundColor: selectedCategory === category ? '#184328' : '#eaf5ef', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
          cursor: 'pointer',
          mb: 1,
          flexGrow: 1,  // Allow Chips to grow and fill available space
          textAlign: 'center'  // Make sure the text is centered in the Chip
        }}
      />
    ))}
  </Stack>
</Box>



        {/* Latest News */}
        <Box sx={{ mb: 8 }}>
          <Stack direction="row" alignItems="center" spacing={2} mb={4}>
            <MilitaryTechIcon sx={{ color: '#21593b', fontSize: 40 }} />
            <Typography variant="h3" fontWeight="bold" sx={{ color: '#21593b' }}>
              Tin tức mới nhất
            </Typography>
          </Stack>
          
          <Stack spacing={3}>
            {currentNews.map((item, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: 3,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.15)', transform: 'translateY(-5px)' },
                  height: 200,
                  bgcolor: '#fff',
                }}
              >
                <Box sx={{ width: 300, height: '100%', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
                <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: '#21593b' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.content}
                    </Typography>
                  </Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="caption" color="text.secondary">
                      {item.author}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.date}
                    </Typography>
                    <Button variant="text" endIcon={<ArrowForwardIcon />} sx={{ color: '#21593b', fontWeight: 'bold' }}>
                      Đọc thêm
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            ))}
          </Stack>

          {/* Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              sx={{
                '& .MuiPaginationItem-root': { color: '#21593b', fontSize: '1.1rem' },
                '& .Mui-selected': { backgroundColor: '#21593b', color: 'white', '&:hover': { backgroundColor: '#184328' } },
              }}
            />
          </Box>
        </Box>

        {/* Announcements and Events */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3, flex: 1, minHeight: 400, bgcolor: '#fff' }}>
            <Stack direction="row" alignItems="center" spacing={2} mb={3}>
              <NotificationsIcon sx={{ color: '#21593b', fontSize: 40 }} />
              <Typography variant="h4" fontWeight="bold" sx={{ color: '#21593b' }}>
                Thông báo quan trọng
              </Typography>
            </Stack>
            <List sx={{ flex: 1 }}>
              {IMPORTANT_ANNOUNCEMENTS.map((item, index) => (
                <ListItem key={index} sx={{ mb: 2, p: 2, borderRadius: 2, transition: 'all 0.3s ease', '&:hover': { bgcolor: '#eaf5ef', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#21593b' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography fontWeight="bold" sx={{ color: '#21593b' }}>{item.title}</Typography>}
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">{item.date}</Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>{item.content}</Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Button variant="outlined" fullWidth sx={{ mt: 2, borderColor: '#21593b', color: '#21593b', borderRadius: 2, py: 1, '&:hover': { bgcolor: '#eaf5ef' } }} endIcon={<ArrowForwardIcon />}>
              Xem tất cả thông báo
            </Button>
          </Paper>

          <Paper elevation={3} sx={{ p: 4, borderRadius: 3, flex: 1, minHeight: 400, bgcolor: '#fff' }}>
            <Stack direction="row" alignItems="center" spacing={2} mb={3}>
              <CalendarMonthIcon sx={{ color: '#21593b', fontSize: 40 }} />
              <Typography variant="h4" fontWeight="bold" sx={{ color: '#21593b' }}>
                Sự kiện sắp tới
              </Typography>
            </Stack>
            <List sx={{ flex: 1 }}>
              {UPCOMING_EVENTS.map((item, index) => (
                <ListItem key={index} sx={{ mb: 2, p: 2, borderRadius: 2, transition: 'all 0.3s ease', '&:hover': { bgcolor: '#eaf5ef', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } }}>
                  <ListItemIcon>
                    <CalendarMonthIcon sx={{ color: '#21593b' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography fontWeight="bold" sx={{ color: '#21593b' }}>{item.title}</Typography>}
                    secondary={
                      <>
                        <Typography variant="body2">Ngày: {item.date}</Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>Địa điểm: {item.location}</Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Button variant="contained" fullWidth sx={{ mt: 2, bgcolor: '#21593b', borderRadius: 2, py: 1, '&:hover': { bgcolor: '#184328' } }} endIcon={<ArrowForwardIcon />}>
              Xem tất cả sự kiện
            </Button>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}