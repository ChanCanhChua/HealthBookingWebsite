import { Col, Row } from "antd"

const BodyAdmin = ({ content, pageTitle }) => {
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