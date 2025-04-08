import { Box, Button, Container, Grid, Stack, Typography, Paper, Divider, Chip, List, ListItem, ListItemIcon, ListItemText, TextField, Radio } from '@mui/material';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ScienceIcon from '@mui/icons-material/Science';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const REASONS = [
  {
    title: "Chất lượng đào tạo",
    description: "Học viện Quân y là nơi đào tạo những bác sĩ quân y hàng đầu, với chương trình giảng dạy chất lượng cao và đội ngũ giảng viên giàu kinh nghiệm.",
    icon: <SchoolIcon sx={{ color: '#21593b', fontSize: 40 }} />,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKSGGnDEkdZY418FphDacR55QbWX_ZIceFg&s",
  },
  {
    title: "Cơ hội nghề nghiệp",
    description: "Sinh viên tốt nghiệp tại Cao đẳng hậu cần có cơ hội làm việc tại các cơ quan y tế quân đội, bệnh viện, và các tổ chức y tế quốc tế.",
    icon: <SchoolIcon sx={{ color: '#21593b', fontSize: 40 }} />,
    img: "https://daihoc.fpt.edu.vn/wp-content/uploads/2024/12/52-63-tcbc-fpt-educamp-2024-anh-1-2642-png.avif", // Add img property if needed, or leave as empty string
  },
  {
    title: "Cơ sở vật chất hiện đại",
    description: "Học viện có các phòng học, phòng thí nghiệm, và cơ sở vật chất hiện đại, đáp ứng đầy đủ nhu cầu học tập và nghiên cứu của sinh viên.",
    icon: <ScienceIcon sx={{ color: '#21593b', fontSize: 40 }} />,
    img: "", // Add img property if needed, or leave as empty string
  },
];


const HIGHTLIGHT_NEWS = [
    {
      name: "Tuyển sinh đại học",
      post: [
        { 
          img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
          name: "Thông báo chỉ tiêu tuyển sinh đại học chính quy năm 2024",
          excerpt: "Học viện Quân y thông báo chỉ tiêu tuyển sinh hệ đại học chính quy năm 2024 với 5 ngành đào tạo trọng điểm. Đây là cơ hội để các bạn thí sinh theo học các ngành Y khoa, Dược học, Kỹ thuật y học, Quân y, và Điều dưỡng tại một trong những trường đại học hàng đầu."
        },
        { 
          img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
          name: "Phương thức xét tuyển đại học năm 2024",
          excerpt: "Cập nhật mới nhất về các phương thức xét tuyển đại học hệ chính quy năm 2024 tạiCao đăng hậu cần. Các phương thức bao gồm xét kết quả thi tốt nghiệp THPT, xét học bạ, và thi đánh giá năng lực. Đặc biệt, Học viện cung cấp nhiều chương trình học bổng cho sinh viên xuất sắc."
        },
        { 
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
          name: "Thông tin ngành đào tạo và điểm chuẩn các năm trước",
          excerpt: "Tổng hợp thông tin các ngành đào tạo và điểm chuẩn 3 năm gần nhất để thí sinh tham khảo. Các ngành đào tạo chính củaCao đăng hậu cần bao gồm Y khoa, Dược học, Điều dưỡng, Quân y, và các ngành kỹ thuật y học. Điểm chuẩn và tỷ lệ chọi qua các năm có sự biến động lớn."
        },
        { 
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKSGGnDEkdZY418FphDacR55QbWX_ZIceFg&s", 
          name: "Lịch thi tuyển sinh đại học năm 2024",
          excerpt: "Lịch thi tuyển sinh đại học đợt 1 năm 2024 sẽ được tổ chức vào tháng 7. Các thí sinh cần chú ý các mốc thời gian quan trọng như ngày nhận hồ sơ, ngày thi, và ngày công bố kết quả."
        }
      ]
    },
    {
      name: "Tuyển sinh cao đẳng",
      post: [
        { 
          img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
          name: "Thông báo tuyển sinh cao đẳng năm 2024",
          excerpt: "Học viện Quân y thông báo tuyển sinh hệ cao đẳng chính quy năm 2024 với các ngành đào tạo như Kỹ thuật Y học, Điều dưỡng, và Y tá. Hệ cao đẳng này cung cấp chương trình học chất lượng cao, cơ hội thực tập tại các bệnh viện lớn."
        },
        { 
          img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
          name: "Thông báo xét tuyển cao đẳng 2024",
          excerpt: "Các phương thức xét tuyển vào hệ cao đẳng năm 2024 bao gồm xét học bạ, thi tuyển sinh và thi đánh giá năng lực. Các thí sinh cần chuẩn bị đầy đủ hồ sơ và chú ý đến hạn nộp hồ sơ."
        },
        { 
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
          name: "Điều kiện và tiêu chí xét tuyển cao đẳng",
          excerpt: "Điều kiện xét tuyển hệ cao đẳng chính quy 2024 bao gồm: hoàn thành chương trình THPT hoặc tương đương, có sức khỏe tốt và có kết quả thi đạt yêu cầu.Cao đăng hậu cần luôn đảm bảo chất lượng đầu ra của sinh viên."
        },
        { 
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
          name: "Lịch học và thời gian đào tạo cao đẳng",
          excerpt: "Thời gian đào tạo hệ cao đẳng tạiCao đăng hậu cần là 3 năm, với các kỳ thi chính vào cuối mỗi năm học. Chương trình học bao gồm lý thuyết, thực hành, và các buổi học ngoại khóa tại các bệnh viện thực hành."
        }
      ]
    },
    {
      name: "Tuyển sinh sau cao đẳng",
      post: [
        { 
          img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
          name: "Thông báo tuyển sinh cao học đợt 1 năm 2024",
          excerpt: "Thông báo tuyển sinh hệ cao học đợt 1 năm 2024 với các chuyên ngành như Y tế công cộng, Quản lý bệnh viện, Kỹ thuật y học. Đây là cơ hội để các bạn học viên nâng cao trình độ chuyên môn."
        },
        { 
          img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
          name: "Thông báo tuyển sinh nghiên cứu sinh năm 2024",
          excerpt: "Kế hoạch tuyển sinh nghiên cứu sinh năm 2024 tạiCao đăng hậu cần. Các ngành tuyển sinh bao gồm Y khoa, Dược học, Điều dưỡng, Kỹ thuật y học, và nhiều ngành khác. Quy trình xét tuyển và hồ sơ yêu cầu sẽ được cập nhật chi tiết."
        },
        { 
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
          name: "Danh mục các chuyên ngành đào tạo sau đại học",
          excerpt: "Danh sách các chuyên ngành đào tạo trình độ thạc sĩ, tiến sĩ tạiCao đăng hậu cần. Các ngành bao gồm các lĩnh vực nghiên cứu như Y học lâm sàng, Y tế công cộng, Quản lý bệnh viện, và nghiên cứu khoa học y tế."
        },
        { 
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKSGGnDEkdZY418FphDacR55QbWX_ZIceFg&s", 
          name: "Thông tin về học bổng và hỗ trợ nghiên cứu",
          excerpt: "Học viện Quân y cung cấp nhiều loại học bổng và hỗ trợ nghiên cứu cho sinh viên, nghiên cứu sinh, và học viên cao học. Các chương trình học bổng này nhằm khuyến khích nghiên cứu khoa học và đổi mới sáng tạo."
        }
      ]
    }
  ];
  

const EVENTS = [
  { name: "Lịch thi tuyển sinh đại học đợt 1 năm 2024", date: "15/06/2024", location: "Hội trường lớn" },
  { name: "Hội thảo tư vấn tuyển sinh trực tuyến", date: "25/05/2024", location: "Trực tuyến" },
  { name: "Ngày hội tư vấn tuyển sinh tại Học viện", date: "10/05/2024", location: "Sân vận động" },
  { name: "Công bố điểm chuẩn xét tuyển sớm", date: "30/06/2024", location: "Website HVQY" },
  { name: "Chương trình open day cho học sinh THPT", date: "05/05/2024", location: "Toàn Học viện" },
  { name: "Thời hạn nộp hồ sơ xét tuyển đại học", date: "30/05/2024", location: "Phòng Đào tạo" }
];

const SCIENCE = [
  { 
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
    title: "Nghiên cứu khoa học", 
    name: "Đề tài nghiên cứu về công nghệ nano trong y học    ",
    excerpt: "Ứng dụng công nghệ nano trong điều trị ung thư và các bệnh nan y"
  },
  { 
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
    title: "Nghiên cứu khoa học", 
    name: "Ứng dụng AI trong chẩn đoán hình ảnh y tế",
    excerpt: "Phát triển hệ thống AI hỗ trợ chẩn đoán hình ảnh X-quang và MRI"
  },
  { 
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
    title: "Nghiên cứu khoa học", 
    name: "Nghiên cứu phát triển vắc-xin thế hệ mới",
    excerpt: "Nghiên cứu phát triển vắc-xin phòng các bệnh truyền nhiễm nguy hiểm"
  },
  { 
    img: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
    title: "Nghiên cứu khoa học", 
    name: "Kỹ thuật mới trong phẫu thuật tim mạch",
    excerpt: "Nghiên cứu ứng dụng kỹ thuật xâm lấn tối thiểu trong phẫu thuật tim"
  }
];

const LOGO = [
  { 
    img: "https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
    name: "Bệnh viện Quân y 103",
    description: "Bệnh viện đa khoa hạng I, là cơ sở thực hành chính của Học viện"
  },
  { 
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
    name: "Bệnh viện Bỏng Quốc gia",
    description: "Trung tâm điều trị bỏng hàng đầu cả nước"
  },
  { 
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
    name: "Viện Mô phôi lâm sàng",
    description: "Trung tâm nghiên cứu và chẩn đoán mô bệnh học"
  }
];

const ADMISSION_INFO = [
  "Thời gian nhận hồ sơ: 01/04/2024 - 30/06/2024",
  "Lệ phí xét tuyển: 300.000 VNĐ/hồ sơ",
  "Chỉ tiêu tuyển sinh: 1.200 sinh viên",
  "Phương thức xét tuyển: Kết quả thi tốt nghiệp THPT, học bạ, thi đánh giá năng lực"
];

export default function Tuyensinh() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box sx={{ bgcolor: '#f5f5f7' }}>
  
      <Box sx={{ position: 'relative', height: { xs: '60vh', md: '60vh' } }}>
      <Carousel 
  showArrows={true} 
  showThumbs={false} 
  showStatus={false} 
  autoPlay={true}
  infiniteLoop={true}
  interval={6000}
  swipeable={true}
  dynamicHeight={false}
>
  <Box sx={{ height: '60vh' }}>
    <img 
      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
      alt="Tuyển sinh 2024" 
      style={{ 
        width: "100%", 
        height: "100%", 
        objectFit: "cover",
        objectPosition: "center"
      }} 
    />
    <Box sx={{ 
      position: 'absolute', 
      bottom: '25%', 
      left: '40%', 
      backgroundColor: 'rgba(33, 89, 59, 0.85)',
      padding: '15px',
      borderRadius: '12px',
      maxWidth: '80%',
      color: 'white'
    }}>
      <Typography variant='h4' fontWeight='bold' sx={{ fontSize: '2rem' }}>
        Thông báo tuyển sinh năm 2024
      </Typography>
      <Typography variant='body1' sx={{ mt: 2, fontSize: '1rem' }}>
       Cao đăng hậu cần thông báo tuyển sinh các hệ đào tạo năm học 2024-2025
      </Typography>
      <Button 
        variant="contained" 
        size="large" 
        sx={{ 
          mt: 3, 
          bgcolor: 'white', 
          color: '#21593b',
          fontSize: '1rem',
          fontWeight: 'bold',
          '&:hover': {
            bgcolor: '#f0f0f0'
          }
        }}
        endIcon={<ArrowForwardIcon />}
      >
        Xem chi tiết
      </Button>
    </Box>
  </Box>

  <Box sx={{ height: '60vh' }}>
    <img 
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
      alt="Hệ đại học" 
      style={{ 
        width: "100%", 
        height: "100%", 
        objectFit: "cover",
        objectPosition: "center"
      }} 
    />
    <Box sx={{ 
      position: 'absolute', 
      bottom: '25%', 
      left: '40%', 
      backgroundColor: 'rgba(26, 58, 114, 0.85)',
      padding: '15px',
      borderRadius: '12px',
      maxWidth: '80%',
      color: 'white'
    }}>
      <Typography variant='h4' fontWeight='bold' sx={{ fontSize: '2rem' }}>
        Thông báo tuyển sinh hệ đại học
      </Typography>
      <Typography variant='body1' sx={{ mt: 2, fontSize: '1rem' }}>
        Chương trình đào tạo chuẩn quốc tế, cơ hội việc làm rộng mở
      </Typography>
      <Button 
        variant="contained" 
        size="large" 
        sx={{ 
          mt: 3, 
          bgcolor: 'white', 
          color: '#1a3a72',
          fontSize: '1rem',
          fontWeight: 'bold',
          '&:hover': {
            bgcolor: '#f0f0f0'
          }
        }}
        endIcon={<ArrowForwardIcon />}
      >
        Đăng ký ngay
      </Button>
    </Box>
  </Box>

  <Box sx={{ height: '60vh' }}>
    <img 
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" 
      alt="Xét tuyển 2024" 
      style={{ 
        width: "100%", 
        height: "100%", 
        objectFit: "cover",
        objectPosition: "center"
      }} 
    />
    <Box sx={{ 
      position: 'absolute', 
      bottom: '25%', 
      left: '40%', 
      backgroundColor: 'rgba(94, 42, 108, 0.85)',
      padding: '15px',
      borderRadius: '12px',
      maxWidth: '80%',
    
      color: 'white'
    }}>
      <Typography variant='h4' fontWeight='bold' sx={{ fontSize: '2rem' }}>
        Thông báo xét tuyển năm 2024
      </Typography>
      <Typography variant='body1' sx={{ mt: 2, fontSize: '1rem' }}>
        Nhiều phương thức xét tuyển linh hoạt, phù hợp với nhiều đối tượng thí sinh
      </Typography>
      <Button 
        variant="contained" 
        size="large" 
        sx={{ 
          mt: 3, 
          bgcolor: 'white', 
          color: '#5e2a6c',
          fontSize: '1rem',
          fontWeight: 'bold',
          '&:hover': {
            bgcolor: '#f0f0f0'
          }
        }}
        endIcon={<ArrowForwardIcon />}
      >
        Tìm hiểu thêm
      </Button>
    </Box>
  </Box>
</Carousel>

      </Box>
      <Box sx={{ py: 8, bgcolor: '#f5f5f7' }}>
  <Typography
    variant="h4"
    fontWeight="bold"
    gutterBottom
    sx={{
      textAlign: 'center',
      color: '#21593b',
      mb: 6,
      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
    }}
  >
    Tại sao bạn nên chọn Cao đẳng Hậu cần?
  </Typography>

  <Stack
    direction={{ xs: 'column', sm: 'row' }}
    spacing={4}
    justifyContent="center"
    alignItems="center"
  >
    {REASONS.map((reason, index) => (
      <Paper
        key={index}
        elevation={3}
        sx={{
          width: { xs: '90%', sm: '300px', md: '350px' }, // Adjust width for responsiveness
          height: 'auto', // Allow the height to adapt
          borderRadius: 2,
          padding: 3,
          textAlign: 'center',
          bgcolor: '#ffffff',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.15)' },
          transition: 'box-shadow 0.3s ease-in-out',
        }}
      >
        <Box sx={{ mb: 2 }}>
          {reason.icon}
        </Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            color: '#21593b',
            mb: 1,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
          }}
        >
          {reason.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          {reason.description}
        </Typography>

        {/* Adjust Image Display */}
        <Box
          sx={{
            flex: 1,
            height: 'auto',
            display: { xs: 'block', sm: 'block', md: 'block' }, // Ensure image appears on larger screens
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 6,
            mt: 2,
          }}
        >
          <img
            src="https://daihoc.fpt.edu.vn/wp-content/uploads/2024/12/z6121278429566_e416d75af84ba589010cbb9a6585f7b4-2048x1365.avif"
            alt="Campus"
            style={{
              width: '100%', // Full width of the box
              height: 'auto', // Maintain aspect ratio
              objectFit: 'cover', // Ensure it covers the container nicely
            }}
          />
        </Box>
      </Paper>
    ))}
  </Stack>
</Box>


    <Box sx={{ 
  backgroundColor: '#f5f9f7',
  py: 8,
  fontFamily: 'Arial, sans-serif'
}}>
<Container maxWidth="lg">
  <Paper sx={{
    p: 4,
    borderRadius: 2,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    borderTop: '4px solid #21593b'
  }}>
    {/* Tiêu đề */}
    <Typography variant="h4" sx={{
      color: '#21593b',
      fontWeight: 'bold',
      textAlign: 'center',
      mb: 3
    }}>
      Hướng dẫn đăng ký vào học
    </Typography>
    
    <Typography variant="h5" sx={{
      color: '#21593b',
      textAlign: 'center',
      mb: 5,
      fontWeight: 'bold'
    }}>
      Trường Cao đẳng Hậu cần
    </Typography>


    <Box sx={{ mb: 4 }}>
      {['Truy cập trang đăng ký', 'Đăng nhập hoặc đăng ký tài khoản', 'Hoàn thành hồ sơ đăng ký'].map((step, index) => (
        <Box key={index} sx={{
          display: 'flex',
          alignItems: 'flex-start',
          mb: 3,
          p: 2,
          backgroundColor: '#f0f7f3',
          borderRadius: 2
        }}>
          <Box sx={{
            backgroundColor: '#21593b',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '50%',
            width: 30,
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: 2,
            flexShrink: 0,
            mt: '2px'
          }}>
            {index + 1}
          </Box>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              {step}
            </Typography>
            <Typography variant="body1">
              {index === 0 && 'https://hau.can.edu.vn/dang-ky'}
              {index === 1 && 'Nhấn đăng ký nếu chưa có tài khoản, nếu đã có tài khoản bạn đăng nhập để nộp hồ sơ'}
              {index === 2 && 'Thực hiện các bước theo hướng dẫn để nộp hồ sơ vào Trường Cao đẳng Hậu cần'}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>

    {/* Nút đăng ký */}
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: '#21593b',
          color: 'white',
          borderRadius: 1,
          px: 6,
          py: 1.5,
          fontWeight: 'bold',
          fontSize: '1.1rem',
          '&:hover': { 
            backgroundColor: '#1b4c29',
            boxShadow: '0 4px 12px rgba(27, 76, 41, 0.3)'
          }
        }}
      >
        ĐĂNG KÝ NGAY
      </Button>
    </Box>

    {/* Liên hệ */}
    <Box sx={{
      mt: 5,
      pt: 3,
      borderTop: '1px dashed #e0e0e0',
      textAlign: 'center'
    }}>
      <Typography variant="body2" sx={{ color: '#666' }}>
        Hotline tư vấn: 0123 456 789
      </Typography>
      <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
        Email: tuyensinh@hau.can.edu.vn
      </Typography>
    </Box>
  </Paper>
</Container>

</Box>
      <Container maxWidth="xl" sx={{ py: 6 }}>
       
        <Paper elevation={6} sx={{ 
          p: { xs: 3, md: 6 }, 
          mb: 8, 
          borderRadius: 4,
          background: 'linear-gradient(to right, #ffffff, #f8f9fa)'
        }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
            <Box sx={{ flex: 1 }}>
              <Typography variant="h2" fontWeight="800" color="#21593b" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Tuyển sinh Cao đẳng hậu cần 2024
              </Typography>
              <Typography variant="h5" sx={{ mb: 3, color: '#555' }}>
              Cao đẳng hậu cần - Đào tạo y khoa chất lượng cao
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem' }}>
               Cao đăng hậu cần là cơ sở đào tạo y khoa hàng đầu của Quân đội với hơn 70 năm xây dựng và phát triển, chương trình đào tạo đạt chuẩn quốc tế, cơ sở vật chất hiện đại.
              </Typography>
              <List sx={{ mb: 3 }}>
                {ADMISSION_INFO.map((item, index) => (
                  <ListItem key={index} sx={{ p: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckCircleIcon color="success" sx={{ fontSize: '1.5rem' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item} 
                      primaryTypographyProps={{ variant: 'body1', sx: { fontSize: '1.1rem' } }} 
                    />
                  </ListItem>
                ))}
              </List>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    bgcolor: '#21593b', 
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    py: 1.5,
                    px: 4,
                    '&:hover': {
                      bgcolor: '#184328'
                    }
                  }}
                >
                  Đăng ký xét tuyển
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    borderColor: '#21593b', 
                    color: '#21593b',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    py: 1.5,
                    px: 4
                  }}
                >
                  Tải hồ sơ
                </Button>
              </Stack>
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Campus" 
                style={{ 
                  objectFit: 'cover',
                  minHeight: '400px'
                }}
              />
            </Box>
          </Stack>
        </Paper>

        <Box sx={{ mb: 10 }}>
  <Stack direction="row" alignItems="center" spacing={3} mb={5}>
    <SchoolIcon sx={{ color: '#21593b', fontSize: 30 }} />
    <Typography variant="h3" fontWeight="800" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
      Tin tức tuyển sinh
    </Typography>
  </Stack>
  <Paper elevation={6} sx={{ p: { xs: 2, md: 3 }, borderRadius: 4 }}>
  <Stack 
    direction="row" 
    spacing={2} 
    sx={{ 
      overflowX: { xs: 'auto', md: 'visible' },
      pb: 2,
      borderBottom: '2px solid #e0e0e0',
      '&::-webkit-scrollbar': {
        height: '6px'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#21593b',
        borderRadius: '3px'
      }
    }}
  >
    {HIGHTLIGHT_NEWS.map((item, index) => (
      <Chip
        key={index}
        label={item.name}
        onClick={() => setSelectedIndex(index)}
        sx={{
          px: 3,
          py: 1.5,
          fontSize: '1rem',
          backgroundColor: selectedIndex === index ? '#21593b' : '#f0f0f0',
          color: selectedIndex === index ? 'white' : 'black',
          '&:hover': {
            backgroundColor: selectedIndex === index ? '#184328' : '#e0e0e0',
          },
          cursor: 'pointer',
          fontWeight: selectedIndex === index ? 700 : 500,
          minWidth: '160px',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    ))}
  </Stack>

  <Grid container spacing={3} sx={{ mt: 3 }}>
    {HIGHTLIGHT_NEWS[selectedIndex]?.post?.map((post, i) => (
      <Grid item xs={12} sm={6} md={4} key={i}>
        <Paper 
          elevation={4}
          sx={{ 
            borderRadius: 3,
            overflow: "hidden",
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            },
            height: '600px', 
            display: 'flex',
            flexDirection: 'column',
            width: '700px',   
          }}
        >
          <Box sx={{ height: '350px', overflow: 'hidden' }}>
            <img
              src={post.img}
              alt={post.name}
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                transition: 'transform 0.5s',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
              loading="lazy"
            />
          </Box>
          <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ fontSize: '1.5rem' }}>
              {post.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {post.excerpt}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <CalendarMonthIcon color="action" />
              <Typography variant="body2">
                05/04/2024
              </Typography>
            </Stack>
            <Box sx={{ mt: 'auto' }}>
              <Button 
                variant="contained" 
                color="primary" 
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  px: 3,
                  py: 1.5
                }}
              >
                Xem chi tiết
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Paper>

</Box>




       
<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  mb: 10 }}>
  <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, width: '100%', maxWidth: '1500px' }}>
    <Stack direction="row" alignItems="center" spacing={3} mb={6}>
      <NotificationsIcon sx={{ color: '#21593b', fontSize: 40 }} />
      <Typography variant="h2" fontWeight="800" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
        Thông Báo & Sự Kiện
      </Typography>
    </Stack>

    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, height: '100%', borderRadius: 3 , marginLeft  : '150px'}}>
          <Typography variant="h3" fontWeight="700" color="#21593b" mb={4} sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Sắp diễn ra
          </Typography>
          <List sx={{ p: 0 }}>
            {EVENTS.slice(0, 3).map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  p: 3,
                  mb: 3,
                  borderLeft: '6px solid #21593b',
                  bgcolor: '#f8f8f8',
                  borderRadius: '0 12px 12px 0',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateX(10px)',
                    bgcolor: '#eaf5ef',
                    boxShadow: 2
                  }
                }}
              >
                <ListItemText
                  primary={<Typography variant="h6" fontWeight={600}>{item.name}</Typography>}
                  secondary={
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0, sm: 2 }} mt={2}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <CalendarMonthIcon fontSize="small" color="action" />
                        <Typography variant="body1">{item.date}</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body1" color="text.secondary">|</Typography>
                        <Typography variant="body1">{item.location}</Typography>
                      </Stack>
                    </Stack>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontSize: '1.1rem',
              borderColor: '#21593b',
              color: '#21593b',
              fontWeight: 'bold'
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Xem tất cả sự kiện
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} >
        <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, height: '100%', borderRadius: 3 , marginLeft : '50px' }}>
          <Typography variant="h3" fontWeight="700" color="#21593b" mb={4} sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Thông báo mới
          </Typography>
          <List sx={{ p: 0 }}>
            {EVENTS.slice(3, 6).map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  p: 3,
                  mb: 3,
                  borderLeft: '6px solid #21593b',
                  bgcolor: '#f8f8f8',
                  borderRadius: '0 12px 12px 0',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateX(10px)',
                    bgcolor: '#eaf5ef',
                    boxShadow: 2
                  }
                }}
              >
                <ListItemText
                  primary={<Typography variant="h6"  fontWeight={600}>{item.name}</Typography>}
                  secondary={
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0, sm: 2 }} mt={2}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <CalendarMonthIcon fontSize="small" color="action" />
                        <Typography variant="body1">{item.date}</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body1" color="text.secondary">|</Typography>
                        <Typography variant="body1">{item.location}</Typography>
                      </Stack>
                    </Stack>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontSize: '1.1rem',
              bgcolor: '#21593b',
              fontWeight: 'bold'
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Xem tất cả thông báo
          </Button>
        </Paper>
      </Grid>
      
    </Grid>
  </Paper>
</Box>


       
        <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, mb: 10, borderRadius: 4 }}>
  <Stack 
    direction={{ xs: 'column', md: 'row' }} 
    justifyContent="space-between" 
    alignItems="center"  
    mb={6}
    spacing={3}
  >
    <Stack direction="row" alignItems="center" spacing={3}>
      <ScienceIcon sx={{ color: '#21593b', fontSize: 40 }} />
      <Typography variant="h2" fontWeight="800" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, textAlign: 'center' }}>
        Nghiên cứu khoa học
      </Typography>
    </Stack>
   
  </Stack>
  <Box maxWidth="1500px" >
      <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.3rem', marginLeft : '60px'}}>
       Cao đăng hậu cần là một trung tâm Đào tạo, Nghiên cứu khoa học và Điều trị lớn của quân đội. 
        Trải qua quá trình xây dựng và trưởng thành, Nghiên cứu khoa học của Học viện đã đạt được những thành tựu đáng tự hào.
      </Typography>
    </Box>
  
  <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
    {SCIENCE.map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Paper 
          elevation={4}
          sx={{ 
            borderRadius: 3,
            overflow: "hidden",
            transition: 'transform 0.3s, box-shadow 0.3s',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
            }
          }}
        >
          <Box sx={{ height: '220px', overflow: 'hidden' }}>
            <img
              src={item.img}
              alt={item.name}
              style={{ 
                width: "500px", 
                height: "100%", 
                objectFit: "cover",
                transition: 'transform 0.5s',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
              loading="lazy"
            />
          </Box>
          <Box sx={{ p: 3 }}>
            <Chip 
              label={item.title} 
              size="small" 
              sx={{ 
                bgcolor: '#ffebee', 
                color: '#c62828', 
                mb: 2,
                fontWeight: 500
              }} 
            />
            <Typography variant="h6" fontWeight={700} sx={{ fontSize: '1.1rem' }}>
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
              {item.excerpt}
            </Typography>
            <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center' }}>
              <Button 
                variant="outlined" 
                color="primary" 
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 3, textTransform: 'none', fontSize: '1rem', fontWeight: 'bold' }}
              >
                Xem chi tiết
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    ))}
  </Grid>


  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
    <Button 
      variant="contained" 
      size="large"
      endIcon={<ArrowForwardIcon />}
      sx={{ 
        bgcolor: '#21593b', 
        fontSize: '1.1rem',
        fontWeight: 'bold',
        px: 4,
        py: 1.5,
        whiteSpace: 'nowrap'
      }}
    >
      Xem tất cả
    </Button>
  </Box>
</Paper>
<Box sx={{
  backgroundColor: 'white',
  py: 6,
  fontFamily: 'Arial, sans-serif',
  minHeight: '100vh',
}}>
  <Container maxWidth="lg">
    <Paper sx={{
      p: 4,
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      background: 'rgba(33, 89, 59, 0.85)',
      color: 'black', 
      backdropFilter: 'blur(5px)',
    }}>
      {/* Tiêu đề */}
      <Typography variant="h4" sx={{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        mb: 2, 
        fontFamily: 'Roboto, sans-serif',
      }}>
        Đăng ký tư vấn tuyển sinh
      </Typography>

      <Typography variant="h6" sx={{
        color: 'rgba(255,255,255,0.9)',
        textAlign: 'center',
        mb: 4,
        fontFamily: 'Roboto, sans-serif',
      }}>
        Trường Cao đẳng hậu cần
      </Typography>

      
      <Grid container spacing={3}>
     
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" sx={{
            mb: 3,
            fontWeight: 'bold',
            color: 'white',
            
          }}>
            Thông tin cá nhân
          </Typography>

          <TextField
            fullWidth
            label="Họ và tên"
            variant="outlined"
            required
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                backgroundColor: 'rgba(255,255,255,0.9)',
              
              },  '& .MuiInputLabel-root': {
                top: '-6px', // Adjusts label positioning to avoid overlap
                color : 'Black'
              },
            }}
          />

          {/* Số điện thoại */}
          <TextField
            fullWidth
            label="Số điện thoại"
            variant="outlined"
            required
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                backgroundColor: 'rgba(255,255,255,0.9)',
               
              },  '& .MuiInputLabel-root': {
                top: '-6px', 
                 color : 'Black'
              },
            }}
          />

          {/* Ngày sinh */}
          <TextField
  fullWidth
  label="Ngày sinh"
  type="date"
  variant="outlined"
  InputLabelProps={{
    shrink: true, // Ensures the label stays at the top when a value is entered
  }}
  sx={{
    mb: 3,
    '& .MuiOutlinedInput-root': {
      borderRadius: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      height: 'auto', // Ensures input height is correctly adjusted
    },
    '& .MuiInputLabel-root': {
      top: '-6px',
       color : 'Black'
    },
  }}
/>


          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            required
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                backgroundColor: 'rgba(255,255,255,0.9)',
                '& fieldset': {
                  borderColor: 'rgba(255,255,255,0.5)',
                },
              },
              '& .MuiInputLabel-root': {
                top: '-6px',
                 color : 'Black'
              },
            }}
          />

          <TextField
            fullWidth
            label="Trường THPT / Đại học"
            variant="outlined"
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                backgroundColor: 'rgba(255,255,255,0.9)',
                '& fieldset': {
                  borderColor: 'rgba(255,255,255,0.5)',
                },
              },
              '& .MuiInputLabel-root': {
                top: '-6px',
                 color : 'Black'
              },
            }}
          />

          {/* Tỉnh/Thành phố */}
          <TextField
            fullWidth
            label="Tỉnh/Thành phố *"
            variant="outlined"
            required
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                backgroundColor: 'rgba(255,255,255,0.9)',
                '& fieldset': {
                  borderColor: 'rgba(255,255,255,0.5)',
                },
              },
              '& .MuiInputLabel-root': {
                top: '-6px',
                 color : 'Black'
              },
            }}
          />

          {/* Link Facebook */}
          <TextField
            fullWidth
            label="Link Facebook của bạn"
            variant="outlined"
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                backgroundColor: 'rgba(255,255,255,0.9)',
                '& fieldset': {
                  borderColor: 'rgba(255,255,255,0.5)',
                },
              },
              '& .MuiInputLabel-root': {
                top: '-6px',
                 color : 'Black'
              },
            }}
          />
        </Grid>

        {/* Cột phải - Nơi đăng ký học */}
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" sx={{
            mb: 2,
            ml :0,
            fontWeight: 'bold',
            color: 'white',
          }}>
            Nơi đăng ký học
          </Typography>

          <Box sx={{
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 1,
            width :'1000px',
            p: 2,
            textAlign :'center',
            mb: 3,
            ml:5,
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}>
            <Grid container spacing={1}>
              {['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ', 'Quy Nhơn'].map((location) => (
                <Grid item xs={6} sm={4} key={location}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: 1,
                    },
                  }}>
                    <Radio
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        '&.Mui-checked': { color: 'white' },
                        mr: 1,
                      }}
                    />
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      {location}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

        
          <Button
            
            variant="contained"
            size="large"
            sx={{
              width:'1000px',
              backgroundColor: 'white',
              textAlign : 'center',
              display : 'flex',
              alignContent :' center',
              alignItems : 'center',
              color: '#21593b',
              borderRadius: 1,
              marginLeft : '40px',
              py: 1.5,
              mt: 2,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
                boxShadow: '0 2px 12px rgba(255,255,255,0.3)',
              },
            }}
          >
            ĐĂNG KÝ TƯ VẤN
          </Button>

          {/* Hướng dẫn */}
          <Box sx={{
            mt: 3,
            pt: 2,
            borderTop: '1px dashed rgba(255,255,255,0.3)',
          }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>
              HƯỚNG DẪN TRA CỨU THÔNG TIN
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mt: 1 }}>
              Vui lòng kiểm tra email và SMS sau khi đăng ký để nhận thông tin tư vấn.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  </Container>
</Box>


      </Container>
    </Box>
  );
}
