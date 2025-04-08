import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router';
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
                <h1 style={{fontSize:'26px',fontWeight:700,marginBottom:'8px'}}>Giới thiệu Học viện Quân y</h1>
                <p style={{marginBottom:'16px'}}>Học viện Quân y (tiền thân là Trường Quân y sĩ Việt Nam, Thành lập ngày 10/3/1949) trực thuộc Bộ Quốc phòng. Qua quá trình xây dựng, phát triển và trưởng thành, các thế hệ lãnh đạo, cán bộ, nhà giáo, thầy thuốc, nhân viên, học viên, chiến sĩ trong toàn Học viện bằng nhiệt tình, trí tuệ và cả xương máu đã vun đắp nên bề dày thành tích và truyền thống đáng tự hào</p>
                <p style={{marginBottom:'16px'}}><strong>1. Các giai đoạn phát &nbsp;triển:</strong></p>
                <ul style={{marginBottom:'16px',paddingLeft:'30px'}}>
                    <li>Trường Quân y sĩ Việt Nam (1949 – 1957),</li>
                    <li>Trường sĩ quan Quân y (1957 – 1962),</li>
                    <li>Viện nghiên cứu Y học Quân sự (1962 – 1966)</li>
                    <li>Đại học Quân y (1966 – 1981)</li>
                    <li>Học viện Quân y (1981 đến nay)</li>
                </ul>
                <p style={{marginBottom:'16px'}}><strong>2. Những thành tích vẻ vang trong quá trình xây dựng, phát triển và trưởng thành:</strong></p>
                <p style={{marginBottom:'16px'}}><strong><em>2.1. Trong sự nghiệp giải phóng dân tộc, xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa:</em></strong></p>
                <p style={{marginBottom:'16px'}}>Ra đời trong những năm đầu của cuộc kháng chiến chống Pháp, vừa chiến đấu, vừa giảng dạy, học tập cán bộ, học viên Nhà trường đã vượt qua mọi hy sinh, gian khổ đào tạo cho Quân đội trên 400 thầy thuốc tham gia bảo vệ sức khoẻ bộ đội, cứu chữa thương bệnh binh trong các chiến dịch: Biên giới, Tây Bắc, Điện Biên Phủ… Góp phần vào chiến công chung của dân tộc trong thắng lợi vẻ vang của cuộc kháng chiến chống Pháp.</p>
                <p style={{marginBottom:'16px'}}>Đào tạo: Sau ngày miền Bắc giải phóng, năm 1958, phối hợp với Trường Đại học y Hà Nội đào tạo các khóa bác sĩ Quân y đa khoa đầu tiên, Bệnh vện 103 hợp nhất về Trường sĩ quan Quân y và trở thành bệnh viện thực hành của Nhà trường. Trong cuộc Kháng chiến chống Mỹ, với điều kiện chiến tranh vô cùng ác liệt, cán bộ – chiến sĩ, thầy – trò Nhà trường đã khắc phục mọi khó khăn gian khổ đào tạo cho Quân đội trên 4000 Bác sĩ – Dược sĩ bậc đại học. Hàng chục đội điều trị của Học viện có mặt trên hầu khắp các chiến trường cứu chữa thương binh. Nhiều đồng chí sẵn sàng hy sinh tính mạng của mình để bảo vệ sức khoẻ của đồng chí đồng đội. Nêu những tấm gương sáng về phẩm chất tốt đẹp của anh Bộ đội cụ Hồ và người thầy thuốc Quân y.</p>
                <p style={{marginBottom:'16px'}}>Sau ngày đất nước thống nhất, Nhà trường tiếp tục có bước phát triển lớn về quy mô và loại hình đào tạo. Năm 1975, triển khai Đào tạo Bác sĩ Chuyên khoa I, năm 1979, đào tạo Tiến sĩ; năm 1980, đào tạo Bác sĩ Chuyên khoa II; là một trong những Trường Đại học đầu tiên của cả nước triển khai Đào tạo Sau đại học.</p>
                <p style={{marginBottom:'16px'}}>Nghiên cứu khoa học: Nhà trường hoàn thành hàng ngàn đề tài nghiên cứu khoa học có giá trị. Nhiều đề tài được ứng dụng rộng rãi cứu chữa thương binh, điều trị người bệnh như: điều chế thuốc chống sốt rét, thuốc điều trị bỏng; điều trị vết thương do hoả khí…</p>
                <p style={{marginBottom:'16px'}}>Điều trị: Bệnh viện 103 là Bệnh viện loại A và là Bệnh viện tuyến cuối của Quân đội vừa hoàn thành tốt nhiệm vụ huấn luyện lâm sàng vừa là một trong những bệnh viện hàng đầu của Quân đội, thu dung điều trị thương binh nặng trong các cuộc Chiến tranh giải phóng dân tộc và Chiến tranh bảo vệ Tổ quốc.</p>
                <p style={{marginBottom:'16px'}}><strong><em>2.2. Trong sự nghiệp đổi mới:</em></strong></p>
                <p style={{marginBottom:'16px'}}>Trước yêu cầu của nhiệm vụ xây dựng Ngành Quân y, đáp ứng mục tiêu xây dựng Quân đội cách mạng, chính quy, tinh nhuệ, từng b¬ước hiện đại, ngày 16.12.1981, trên cơ sở Trường Đại học Quân y, Bộ Quốc phòng quyết định thành lập Học viện Quân y. Đến nay, Học viện có bước phát triển lớn về tổ chức biên chế và chất lượng đội ngũ cán bộ. Hiện nay, Học viện Quân y có 10 Phòng trực thuộc, 2 Bệnh viện thực hành (Bệnh viện 103 và Viện Bỏng Quốc gia), 1 Trường Trung cấp y, 4 hệ quản lý học viên, 7 trung tâm và gần 100 Bộ môn – Khoa. Trên 90 % cán bộ, giảng viên của Học viện đạt trình độ sau đại học, trong đó có 156 Tiến sĩ; 5 Nhà giáo được tặng Danh hiệu Nhà giáo Nhân dân; 6 Thầy thuốc được tặng Danh hiệu Thầy thuốc Nhân dân; 29 Nhà giáo được tặng Danh hiệu Nhà giáo Ưu tú; 100 thầy thuốc được tặng Danh hiệu Thầy thuốc Ưu tú; 36 cán bộ làm công tác giảng dạy, nghiên cứu khoa học được phong Giáo sư và 102 cán bộ được phong Phó Giáo sư.</p>
                <p style={{marginBottom:'16px'}}>Hiện nay, Học viện thực hiện nhiệm vụ trọng tâm: Đào tạo, Nghiên cứu khoa học và Điều trị.</p>
                <p style={{marginBottom:'16px'}}><em>2.2.1. Đào tạo:</em></p>
                <p style={{marginBottom:'16px'}}>– Đào tạo Đại học: Bác sĩ đa khoa Quân y (6,5 năm); Bác sĩ đa khoa Dân y (6 năm); Dược sĩ Quân y (5,5 năm); Dược sĩ Dân y (5 năm).</p>
                <p style={{marginBottom:'16px'}}>– Sau Đại học: Tiến sĩ; Thạc sĩ; Bác &nbsp;sĩ Chuyên khoa I; Bác &nbsp;sĩ Chuyên khoa cấp II; Bác sĩ Nội trú.</p>
                <p style={{marginBottom:'16px'}}>– Đào tạo bậc Trung cấp: Y sĩ; Dược sĩ ; Trung cấp điều dưỡng; Y tá; Dược tá.</p>
                <p style={{marginBottom:'16px'}}>– Đào tạo Bác sĩ đa khoa tuyến cơ sở; Cử nhân điều dưỡng; Cử nhân kỹ thuật hệ 4 năm (tuyển sinh từ đối tượng nhân viên tốt nghiệp trung cấp y, công tác tại các bệnh viện và tuyến y tế cơ sở của Quân đội và Ngành Y tế). Góp phần quan trọng khắc phục tình trạng thiếu thầy thuốc ở tuyến cơ sở của cả quân và dân y. Riêng đào tạo cho vùng sâu, vùng xa gần 2800 Bác sĩ và hơn 3200 nhân viên y – dược.</p>
                <p style={{marginBottom:'16px'}}>– Đào tạo Bác sĩ Dân y đa khoa dài hạn: Để góp phần đào tạo nguồn nhân lực cho Ngành Y tế từ năm 2002 Học viện triển khai đào tạo Bác sĩ Dân y đa khoa dài hạn, trung bình hàng năm tuyển sinh từ 200 – 300 sinh viên. Các học viên sau khi tốt nghiệp về công tác tại các Bệnh viện quân và dân y trong cả nước.</p>
                <p style={{marginBottom:'16px'}}>&nbsp;– Đào tạo Bác sĩ đa khoa (hệ 6 năm) cho các tỉnh Tây Nguyên: Với uy tín về chất lượng đào tạo, năm 2003, Học viện vinh dự được Chính phủ giao nhiệm vụ đào tạo Bác sĩ đa khoa (hệ 6 năm) cho các tỉnh Tây Nguyên. Đây là một nhiệm vụ vừa có ý nghĩa nâng cao chất lượng bảo vệ, chăm sóc sức khỏe cho nhân dân các dân tộc Tây Nguyên vừa có ý nghĩa quan trọng về Chính trị – Xã hội, An ninh – Quốc phòng. Đến nay, Học viện đã tuyển chọn được trên 600 học viên là con em của 35 dân tộc Tây Nguyên về Học viện học tập.</p>
                <p style={{marginBottom:'16px'}}><em>2.2.2. Nghiên cứu khoa học:</em></p>
                <p style={{marginBottom:'16px'}}>Các lĩnh vực NCKH: Y học quân sự, y học cơ sở, y học lâm sàng và y học thảm hoạ; Công nghệ sinh học và tế bào gốc; Dược chất và hợp chất tự nhiên; Nghiên cứu cơ bản.</p>
                <p style={{marginBottom:'16px'}}>Từ 1986 đến nay, Học viện hoàn thành 3.400 &nbsp;đề tài và gần 2.000 sáng kiến kỹ thuật. Trong đó có 62 đề tài, dự án cấp Nhà nước; nhiều đề tài và sáng kiến cấp Bộ, Ngành. Hầu hết các đề tài, sáng kiến đều được các Hội đồng Khoa học nghiệm thu đánh giá có giá trị khoa học cao và được ứng dụng rộng rãi vào thực tiễn, như: châm tê trong phẫu thuật, nghiên cứu ứng dụng kỹ thuật thụ tinh trong ống nghiệm, điều trị bỏng… Đặc biệt, có những công trình khoa học được đánh giá đã tạo nên bước tiến vượt bậc của nền Y học Việt Nam.</p>
                <p style={{marginBottom:'16px'}}>Phát triển công nghệ: Kỹ thuật ghép mô, tạng; Công nghệ phôi; Công nghệ sinh học;</p>
                <p style={{marginBottom:'16px'}}>Chương trình: “Khoa học – Công nghệ phục vụ, bảo vệ và chăm sóc sức khoẻ cộng đồng” (gồm, 47 đề tài – dự án cấp Nhà nước về Y- Dược), do Học viên Quân y chủ trì thực hiện, được đánh giá có ý nghĩa chiến lược đối với sự phát triển của Ngành Y tế và sự nghiệp bảo vệ, chăm sóc, nâng cao sức khoẻ nhân dân. Đồng thời mang lại hiệu quả kinh tế, xã hội to lớn.</p>
                <p style={{marginBottom:'16px'}}>Ghép tạng: Học viện Quân y đã thực hiện thành công các ca ghép thận, ghép gan, ghép tim đầu tiên trên người ở Việt Nam:</p>
                <p style={{marginBottom:'16px'}}>– &nbsp;Ghép thận: Năm 1992 ca ghép thận trên người lần đầu tiên tại Việt Nam được thực hiện thành công tại Học viện Quân y. Đến nay, toàn quốc đã có hàng trăm bệnh nhân được cứu sống nhờ kỹ thuật ghép thận. Sau thành công trong việc ghép thận, từ 1997 – 2003, Học viện Quân y được Bộ Y tế giao là đơn vị chủ trì dự án ghép tạng. Cụm công trình ghép tạng của Học viện Quân y đã được Nhà nước tặng thưởng Giải thưởng Hồ Chí Minh về khoa học và công nghệ năm 2005.</p>
                <p style={{marginBottom:'16px'}}>– Ghép gan: Học viện Quân y đã tập hợp được các Giáo sư, Bác sĩ đầu ngành trong và ngoài quân đội, chuyên gia nước ngoài và đã tổ chức ca ghép gan trên ng¬ười đầu tiên thành công tại Việt Nam (31/01/2004) từ đó chuyển giao kỹ thuật cho các cơ sở y tế khác.</p>
                <p style={{marginBottom:'16px'}}>– Ghép tim: kế thừa kết quả của công trình ghép tim thực nghiệm ngày 17 tháng 6 năm 2010 Học viện Quân y đánh dấu bước ngoặt của ngành Y tế thực hiện thành công ca ghép tim trên người đầu tiên tại Việt Nam.</p>
                <p style={{marginBottom:'16px'}}>Đến nay đã chuyển giao và phối hợp 11 bệnh viện trong cả nước thực hiện ghép thận thành công trên 300 bệnh nhân suy thận giai đoạn cuối và 4 bệnh viện thực hiện ghép gan thành công cho 12 bệnh nhân bị các bệnh về gan, mật giai đoạn cuối.</p>
                <p style={{marginBottom:'16px'}}><em>2.2.3. Điều trị:</em></p>
                <p style={{marginBottom:'16px'}}>Với 2 Bệnh viện thực hành và Trung tâm Công nghệ Phôi, Học viện Quân y trở thành một trong những cơ sở thu dung điều trị nhiều thương bệnh binh và người bệnh lớn trong cả nước. Hiện nay, trung bình hàng năm, các cơ sở điều trị của Học viện khám bệnh cho trên 220.000 lượt người, thu dung điều trị trên 30.000 lượt bệnh nhân.</p>
                <p style={{marginBottom:'16px'}}>Cả hai bệnh viện đã ứng dụng thành công nhiều kỹ thuật tiên tiến, công nghệ hiện đại vào điều trị. Hiện nay, 2 Bệnh viện giữ vị trí đầu ngành trong nhiều lĩnh vực. Đầu ngành về điều trị bỏng của cả nước, đầu ngành của Quân đội trong điều trị bệnh nghề nghiệp, điều trị bệnh nhân tâm thần…Trung tâm Công nghệ phôi có bước tiến vượt bậc, chỉ trong thời gian ngắn, trở thành một trong những cơ sở y tế có uy tín cao về chất lượng, hiệu quả thực hiện kỹ thuật hỗ trợ sinh sản và thụ tinh trong ống nghiệm cho các cặp vợ chồng hiếm muộn. &nbsp;</p>
                <p style={{marginBottom:'16px'}}><em>2.2.4. Hợp tác Quốc tế:</em></p>
                <p style={{marginBottom:'16px'}}>Năm 1954, Trường Quân y sĩ Việt Nam tiếp nhận đào tạo những quân y sĩ đầu tiên cho Quân giải phóng Nhân dân Lào; năm 1964, triển khai các khóa đào tạo bác sĩ cho Cămpuchia; năm 1989, triển khai đào tạo Bác sĩ Chuyên khoa cấp I, Y học dân tộc cho Cu Ba. Đến nay, Học viện đã đào tạo cho các nước Lào, Cămpuchia và và Cu ba gần 600 Bác sĩ đa khoa; 25 Bác sĩ Chuyên khoac cấp &nbsp;I, Bác sĩ Chuyên khoa cấp II; 20 Thạc sĩ, 3 Tiến sĩ và gần 200 Y sĩ, Dược sĩ trung học. Hiện nay, gần 100 học viên các nước bạn Lào và Cămpuchia đang học tập tại Học viện, gồm các bậc học đại học và sau đại học</p>
                <p style={{marginBottom:'16px'}}>Một trong những nguyên nhân quan trọng đảm bảo cho Học viện Quân y đạt thành tích cao trong đào tạo, nghiên cứu khoa học, điều trị là nhờ Học viện tăng cường đoàn kết hợp tác với các trường đại học Y – Dược, các bệnh viện, các cơ sở khoa học và các nhà khoa học trong và ngoài Quân đội, trong nước và quốc tế. Hiện nay, Học viện có quan hệ hợp tác với tất cả các bệnh viện của Quân đội, với nhiều bệnh viện của ngành Y tế, Sở Y tế Hà Nội và hầu hết các trường đại học Y – Dược trong nước; đồng thời, có quan hệ hợp tác với các trường đại học Y – Dược, các bệnh viện, các cơ sở khoa học của 25 nước có trình độ Y học tiên tiến trên thế giới.</p>
                <p style={{marginBottom:'16px'}}><strong>3. Những thành tích tiêu biểu:</strong></p>
                <p style={{marginBottom:'16px'}}>– Đào tạo trên 60.000 thầy thuốc, gồm: 686 Tiến sĩ; trên 1.500 Thạc sĩ; trên 4.000 Bác sĩ Chuyên khoa &nbsp;cấp I, Chuyên khoa cấp II; trên 20.000 Bác sĩ đa khoa – Dược sĩ đại học, Cử nhân kỹ thuật và trên 34.000 nhân viên Y – Dược.</p>
                <p style={{marginBottom:'16px'}}>– Hoàn thành trên 3.400 đề tài khoa học, gần 2.000 sáng kiến kỹ thuật. Trong đó, trên 62 đề tài, dự án cấp Nhà nước; nhiều đề tài và sáng kiến cấp Bộ, Ngành. Nhiều đề tài, chương trình khoa học góp phần quan trọng vào sự phát triển của nền Y học Việt Nam và phục vụ nhiệm vụ quốc phòng an ninh.</p>
                <p style={{marginBottom:'16px'}}>&nbsp;– Hiện nay 95% cán bộ của Học viện có trình độ sau đại học. Trong đó có 156 Tiến sĩ, 8 Giáo sư, 50 Phó Giáo sư.</p>
                <p style={{marginBottom:'16px'}}><strong>4. Các phần thưởng và danh hiệu cao quý được Đảng và Nhà nước phong tặng:</strong></p>
                <p style={{marginBottom:'16px'}}>– Huân chương Sao vàng;</p>
                <p style={{marginBottom:'16px'}}>– Huân chương Hồ Chí Minh;</p>
                <p style={{marginBottom:'16px'}}>– 2 lần Anh hùng LLVT Nhân dân trong thời kỳ Đổi mới và trong thời kỳ Kháng chiến Chống Mỹ;</p>
                <p style={{marginBottom:'16px'}}>– Huân chương Độc lập hạng Nhất;</p>
                <p style={{marginBottom:'16px'}}>– Huân chương Quân công hạng Nhất;</p>
                <p style={{marginBottom:'16px'}}>– 20 Huân chương Quân công, Huân chương Chiến công, Huân chương Lao động, Huân chương Bảo vệ Tổ quốc các loại;</p>
                <p style={{marginBottom:'16px'}}>– Hai công trình khoa học được tặng Giải thưởng Hồ Chí Minh (giải thưởng khoa học và công nghệ cao quý nhất của Việt Nam); 2 đề tài khoa học được tặng Giải thưởng sáng tạo kỹ thuật VIFOTEC, 3 đề tài khoa học được tặng giải thưởng của Tổ chức Sở hữu trí tuệ thế giới (WIPO);</p>
                <p style={{marginBottom:'16px'}}>– 7 đơn vị trực thuộc Học viện và 16 cán bộ từng công tác, học tập tại Học viện được phong tặng danh hiệu Anh hùng; hàng trăm lượt đơn vị được tặng Huân chương Quân công, Huân chương Chiến công, Huân chương Lao động, Huân chương Bảo vệ Tổ Quốc…</p>
                <p style={{marginBottom:'16px'}}>– Từ 1996 -2007 (13 năm liên tục) Học viện được Bộ giáo dục – Đào tạo tặng bằng khen về thành tích xuất sắc trong phong trào sinh viên nghiên cứu khoa học.</p>
                <p style={{marginBottom:'16px'}}><strong>5. Sứ mệnh, chuẩn đầu ra của Học viện Quân y:</strong></p>
                <p style={{marginBottom:'16px'}}><em>5.1. Sứ mệnh:</em></p>
                <p style={{marginBottom:'16px'}}>Học viện Quân y là cơ sở đào tạo đại học, sau đại học ngành y dược duy nhất trực thuộc Bộ Quốc phòng với 3 nhiệm vụ chính trị trung tâm là đào tạo cán bộ quân y các cấp, đội ngũ nhân viên y tế phục vụ sự nghiệp công nghiệp hóa, hiện đại hóa đất nước; điều trị và nghiên cứu khoa học, đặc biệt về lĩnh vực y dược học quân sự; không ngừng phấn đấu với vị trí của một trong những trường đại học y dược hàng đầu của Việt Nam, trường Đại học trọng điểm Quốc gia; trở thành trung tâm đào tạo nhân lực, nghiên cứu khoa học, phát triển và ứng dụng các kỹ thuật tiên tiến trong các lĩnh vực y học quân sự và y học chung của quốc gia và quốc tế.</p>
                <p style={{marginBottom:'16px'}}><em>5.2. Chuẩn đầu ra:</em></p>
                <p style={{marginBottom:'16px'}}>– Đào tạo bác sĩ đa khoa dân y hệ dài hạn 6 năm: đào tạo những người có y đức, có kiến thức và kỹ năng nghề nghiệp cơ bản về y học để xác định, đề xuất và tham gia giải quyết các vấn đề sức khoẻ cá nhân và cộng đồng, có khả năng nghiên cứu khoa học và tự học nâng cao trình độ, đáp ứng nhu cầu bảo vệ, chăm sóc và nâng cao sức khoẻ nhân dân.&nbsp;</p>
                <p style={{marginBottom:'16px'}}>– Đào tạo dược sĩ dân sự trình độ đại học hệ dài hạn 5 năm: đào tạo những người có đạo đức tốt, có kiến thức khoa học cơ bản và y dược học cơ sở, kiến thức và kỹ năng chuyên môn cơ bản để tư vấn về sử dụng thuốc hợp lý, an toàn, hiệu quả; để sản xuất, quản lý và cung ứng thuốc tốt; có khả năng nghiên cứu khoa học và tự học nâng cao trình độ chuyên môn, góp phần đáp ứng nhu cầu chăm sóc, bảo vệ và nâng cao sức khoẻ nhân dân.</p>
            </div>
        </Box>
    </Container>
  )
}
