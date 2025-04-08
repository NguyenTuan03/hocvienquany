
import { Home } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const NAVIGATION = [
    {
        icon:Home
    },
    {
        name:"Giới thiệu",        
    },
    {
        name: 'Tuyển sinh',
    },
    {
        name: 'Tin tức',
    },
    {
        name: 'Đào tạo',
    },
    {
        name: 'Nghiên cứu khoa học',
    },
    {
        name: 'Điều trị',
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