import { Button, Col, Pagination, Popconfirm, Row, Space, Table, Input, notification, message } from "antd"
import AdminLayout from "../AdminLayout"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
// import { deleteAdmin, fetchAllAdmin } from "../../../services/apiadmin";
import { IoAddOutline } from "react-icons/io5";
import { FaFileExport } from "react-icons/fa";
// import ViewDoctor from "./ViewDoctor";
// import './style.scss'
import CreateAdmin from "./CreateAdmin";
// import UpdateDoctor from "./UpdateDoctor";
import moment from "moment";
const { Search } = Input;
const { Column, ColumnGroup } = Table;
const QuanLyAdmin = (props) => {
    const [openCreateAdmin, setOpenCreateAdmin] = useState(false);
    return (
        <>
        <AdminLayout 
            pageTitle="Quản lý Admin" 
            // setFirstName={setFirstName} 
            // setLastName={setLastName}
            // setAddress={setAddress}
            placeholder={'Tìm kiếm admin ở đây...'}>
                
                <Row>
                    <Col span={24} style={{padding: "0 0 20px", fontSize: "18px"}}>
                        <span style={{fontWeight: "500", color: "navy"}}>THÔNG TIN ADMIN</span>
                        <Space size={10} style={{ float: "right" }}>
                            <Button 
                            type="primary" 
                            style={{
                                lineHeight: "15px"
                            }}
                            icon={<IoAddOutline size={20} />} 
                            className="custom-row"
                            onClick={() => {
                                setOpenCreateAdmin(true)
                            }}
                            >Thêm admin</Button>
                            <Button type="primary" icon={<FaFileExport size={15} />} className="custom-row">Export</Button>
                        </Space>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={12} md={24} span={24}>
                    <Table 
                                pagination={false} // Tắt phân trang mặc định của Table
                                scroll={{ x: 'max-content' }}
                                rowClassName="custom-row" // Thêm lớp cho hàng    
                                headerClassName="custom-header" // Lớp cho tiêu đề 
                                rowKey="_id" // Hoặc key tương ứng                           
                        >
                            <Column title={<p className="title-col-style">STT</p>}
                            dataIndex="stt" 
                            key="stt" 
                            
                            />
                            <Column title={<p className="title-col-style">Email</p>} dataIndex="email" key="email" />
                            <ColumnGroup title={<p className="title-col-style">Họ và Tên</p>}>
                                <Column title={<p className="title-col-style">Họ</p>} dataIndex="lastName" key="lastName" />
                                <Column title={<p className="title-col-style">Tên</p>} dataIndex="firstName" key="firstName" />
                            </ColumnGroup>
                            <Column title={<p className="title-col-style">Địa chỉ</p>} dataIndex="address" key="address" width={200}  />
                            
                    </Table>


                    <CreateAdmin
                            openCreateAdmin={openCreateAdmin}
                            setOpenCreateAdmin={setOpenCreateAdmin}
                            // fetchListAdmin={fetchListAdmin}
                    />
                    {/* <UpdateAdmin 
                            // dataUpdateAdmin={dataUpdateAdmin}
                            // setDataUpdateAdmin={setDataUpdateAdmin}
                            // openUpdateAdmin={openUpdateAdmin}
                            // setOpenUpdateAdmin={setOpenUpdateAdmin}
                            // fetchListDoctor={fetchListDoctor}
                    />        */}
                    </Col>
                </Row>
        </AdminLayout>
        </>
    )
}


export default QuanLyAdmin
