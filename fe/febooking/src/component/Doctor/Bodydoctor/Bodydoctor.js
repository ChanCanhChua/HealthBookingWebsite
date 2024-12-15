import { Col, Row } from "antd"
import { Input, Space } from 'antd';

const BodyAdmin = ({ content, pageTitle,                    
                }) => {

    const onSearch = (value) => {
        console.log("Giá trị tìm kiếm:", value); // Thêm log này
        const [firstName, lastName, address, tenChucVu] = value.split(' ');
    
        // Log các giá trị đã tách ra
        console.log("firstName:", firstName);
        console.log("lastName:", lastName);
        console.log("address:", address);
        console.log("tenChucVu:", tenChucVu);
    };

    return (
        <>
            <Row>
                <Col span={6} offset={5} style={{ marginTop: "5vh", textAlign: "start"}}>
                    <p style={{fontSize: "18px"}}>Home / {pageTitle}</p>
                </Col>
                <Col span={5} offset={7} style={{ marginTop: "8vh", height: "50px"}}>
                </Col>
            </Row>

            <Row>
                <Col xs={18} md={18} span={18} offset={5} style={{
                    backgroundColor: "white",
                    marginTop: "50px",
                    marginBottom: "50px",
                    borderRadius: "15px", 
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Thêm viền mờ
                    backdropFilter: "blur(10px)", // Thêm hiệu ứng mờ
                    padding: "20px"
                    
                }}>
                {content} {/* Hiển thị nội dung từ props */}
                </Col>
            </Row>
        </>
    )

 }

 export default BodyAdmin;