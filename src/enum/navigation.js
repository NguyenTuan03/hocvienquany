
import { Home } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const NAVIGATION = [
    {
        icon:Home,
        to:'/'
    },
    {
        name:"Giới thiệu",        
        to:'/gioithieu',
    },
    {
        name: 'Tuyển sinh',
        to:'/tuyensinh',
    },
    {
        name: 'Tin tức',
        to:'/tintuc',
    },
    {
        name: 'Đào tạo',
        to:'/daotao',
    },
    {
        name: 'Nghiên cứu khoa học',
        to:'/nghiencuukhoahoc',
    },
    {
        name: 'Điều trị',
        icon: KeyboardArrowDownIcon,
        children: [
            {
                name: "Bệnh viện quân y 103",
            },
            {
                name: "Bệnh viện Bỏng quốc gia Lê Hữu Trác",
            },
            {
                name: "Viện Mô phôi lâm sàng Quân đội",
            },

        ]
    },
    {
        name: 'Hợp tác',        
    },
    {
        name: 'Liên kết',        
        icon: KeyboardArrowDownIcon,
        children: [
            {
                name: "Bệnh viện quân y 103",
            },
            {
                name: "Bệnh viện quân y 103",
            },
            {
                name: "Bệnh viện quân y 103",
            },
        ]
    }    
]