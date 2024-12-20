import { Button, Col, Row } from "antd";
import { IoHomeSharp, IoWarning } from "react-icons/io5"
import { useNavigate } from 'react-router';

const Page404 = () => {
    const navigate = useNavigate();

    const handleGohome = () => {
        navigate("/")
    }

    return(
        <Col  style={{marginTop: 150}}>
            <Row style={{fontSize:200}}>
                <IoWarning style={{marginLeft: 750,}} />
            </Row>
            <Row >
            <label style={{fontSize: 90, marginInlineStart: 550}}>404 NotFound</label>
            </Row >
            <Row>
            <label style={{fontSize: 50, marginLeft:600}}>Không tìm thấy trang</label>
            </Row>
            <Button
            className="button"
            style={{
                fontSize: 20,
                marginLeft: 750,
                backgroundColor: "#baf3d6"
            }}
            onClick={handleGohome}><IoHomeSharp/>Trở về trang chủ</Button>
        </Col>
    )
}

export default Page404;
