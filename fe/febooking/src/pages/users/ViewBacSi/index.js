import {memo} from 'react' ; 
import Header from '../../../component/User/header';
import Footer from '../../../component/User/footer';
import { IoHomeSharp } from "react-icons/io5"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Col, Row } from "antd"
import { useEffect, useState } from "react"
import { showAllDoctor } from "../../../services/apidoctor"
import { useNavigate } from "react-router-dom"
const ViewBacSi = () => {
  const [dataAllDoctor, setDataAllDoctor] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
      showListDoctor()
  }, [])

  const showListDoctor = async () => {

      let query = ''
      const res = await showAllDoctor(query)
      console.log("res all doctor: ", res);
      if(res && res.data) {
          setDataAllDoctor(res.data)
      }
  }

  const handleRedirectDoctor = (item) => {
      navigate(`/doctorpage?id=${item}`)
  }
    return(
      <>
      <Header />
      <Row>
          <Col span={18} className="col-body">
              <Row>
                  <Col span={24}>
                      <p className="txt-title"><IoHomeSharp /> / Bác sĩ nổi bật</p>
                      {/* <Divider/> */}
                      {/* <hr style={{border: "1px solid rgb(243, 243, 243)"}} /> */}
                  </Col>
                  <Col span={24}>
                      <p className="title-lichhen">Bác sĩ nổi bật
                      </p>
                  </Col>   

                  {dataAllDoctor?.length > 0 ? (
                      dataAllDoctor.map((item, index) => (
                          <Col key={index} span={24} style={{ padding: "10px 15px 0", cursor: "pointer" }} onClick={() => handleRedirectDoctor(item._id)}>
                              <Row>
                                  <Col span={3}>
                                      <Avatar  
                                      style={{border: "1px solid green"}}
                                      src={`${"http://localhost:3001"}/uploads/${item?.image}`} 
                                      shape="square" 
                                      size={120} 
                                      icon={<UserOutlined />} />
                                  </Col>
                                  <Col span={21} className="box-title-doctor">
                                      <span className="txt-Title-doctor-noi-bat">
                                          {item ? item.chucVuId.map(item => item?.name).join(', ') : ''} - &nbsp;
                                          <span style={{color: "navy"}}>{item?.lastName} {item?.firstName}</span>
                                      </span> <br />
                                      <span className="title-nho">
                                          {item ? item.chuyenKhoaId.map(item => item?.name).join(', ') : ''}
                                      </span>
                                  </Col>
                              </Row>
                              <hr style={{ border: "1px solid rgb(243, 243, 243)" }} />
                          </Col>
                      ))
                  ) : (
                      <Col span={24} style={{ textAlign: "center", padding: "20px" }}>
                          <p style={{ color: "gray", fontSize: "18px" }}>Chưa có bác sĩ nào.</p>
                      </Col>
                  )}                    
                  
              </Row>
          </Col>
      </Row>
      <Footer/>
      </>
    )
};
export default memo(ViewBacSi) ; 