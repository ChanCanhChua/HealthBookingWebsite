import { Button, Col, Popconfirm, Row, Space, Table, notification, message } from "antd"
import AdminLayout from "../AdminLayout"
import { DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { fetchAllOrder, deleteOrder } from "../../../services/apidoctor";
import { IoAddOutline } from "react-icons/io5";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import moment from "moment";

const QuanLyOrder = () => {
    const [loadingTable, setLoadingTable] = useState(false);
    const [dataOrder, setDataOrder] = useState([]);
    const [totalOrder, setTotalOrder] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const { Column, ColumnGroup } = Table;


    useEffect(() => {
        fetchListOrder()
    }, [currentPage, pageSize])

    const fetchListOrder = async () => {
        setLoadingTable(true);
        let query = `page=${currentPage}&limit=${pageSize}`
        const res = await fetchAllOrder(query)
        const data = res.data;
        const listOrder = data.sort((a, b) => {
            const dateA = moment(a.ngayKhamBenh, 'DD/MM/YYYY'); 
            const dateB = moment(b.ngayKhamBenh, 'DD/MM/YYYY');
            return dateA.diff(dateB);
        });
        // console.log("res order: ", listOrder); 
        if (res && res.data) {
            setDataOrder(listOrder);
            setTotalOrder(res.totalOrder); // Lưu tổng số bác sĩ
        }
        setLoadingTable(false)
    }

    const handleCheckin = (checkin, ngayKhamBenh) => {
        const ngayhen = moment(ngayKhamBenh, "DD/MM/YYYY");
        const today = moment();
        if(checkin){
            // console.log("đã checkin")
            return <FaCheckCircle style={{color: "green"}}/>
        }else{
            if (ngayhen.isAfter(today)) {
                // console.log("chưa checkin");
                return <FaClock style={{ color: "#cfb004" }} />;
            } else {
                // console.log("đã quá hạn");
                return <MdCancel style={{ color: "red" }} />;
            }
        }
    }

    const handleDeleteOrder = async (id) => {
        const res = await deleteOrder(id)
        if(res && res.data){
            notification.success({
                message: "Xóa lịch hẹn",
                description: res.message,
            })
            await fetchListOrder()
        } else {
            notification.error({
                message: "Xoá thất bại",
                description: JSON.stringify(res.message),
            })
        }
    }

    const cancelXoa = (e) => {
        console.log(e);
        message.error('Huỷ xoá');
    }; 

    return(
        <>
        <AdminLayout 
            pageTitle="Quản lý lịch hẹn" 
        >
            <Row>
                <Col span={24} style={{padding: "0 0 20px", fontSize: "18px"}}>
                    <span style={{fontWeight: "500", color: "navy"}}>THÔNG TIN LỊCH HẸN</span>
                    <Space size={10} style={{ float: "right" }}>
                        <Button 
                        type="primary" 
                        style={{
                            lineHeight: "15px"
                        }}
                        icon={<IoAddOutline size={20} />} 
                        className="custom-row"
                        onClick={() => {
                            // setOpenCreateDoctor(true)
                        }}
                        >Thêm lịch hẹn</Button>
                    </Space>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={12} md={24} span={24}>
                    <Table  dataSource={dataOrder} 
                            loading={loadingTable}
                            pagination={false} // Tắt phân trang mặc định của Table
                            scroll={{ x: 'max-content' }}
                            rowClassName="custom-row" // Thêm lớp cho hàng    
                            headerClassName="custom-header" // Lớp cho tiêu đề 
                            rowKey="_id" // Hoặc key tương ứng                           
                    >
                        <Column title={<p className="title-col-style">STT</p>}
                        dataIndex="stt" 
                        key="stt" 
                        render={(_, record, index) => {
                                return (
                                <>
                                    {(index+1) + (currentPage - 1) * pageSize}
                                </>
                                )
                            }
                        }/>
                        <Column title={<p className="title-col-style">Tên bệnh nhân</p>} dataIndex="patientName" key="patientName" />
                        <Column title={<p className="title-col-style">Số điện thoại bệnh nhân</p>} dataIndex="phone" key="phone" />
                        <ColumnGroup title={<p className="title-col-style">Thời gian</p>}>
                            <Column title={<p className="title-col-style">Ngày</p>} dataIndex="ngayKhamBenh" key="ngayKhamBenh" />
                            <Column title={<p className="title-col-style">Giờ</p>} dataIndex="tenGioKham" key="tenGioKham" />
                        </ColumnGroup>
                        <Column title={<p className="title-col-style">Checkin</p>} dataIndex="checkin" key="checkin" render={(checkin, order)=>handleCheckin(checkin, order.ngayKhamBenh)}/>
                        <Column
                                title={<p className="title-col-style">Chức năng</p>}
                                key="action"
                                render={(_, record) => (
                                    <Space size="middle">
                                        <Popconfirm
                                            title={`Xóa lịch hẹn`}
                                            description="Bạn có chắc chắn muốn xoá?"
                                            onConfirm={() => handleDeleteOrder(record._id)}
                                            onCancel={cancelXoa}
                                            okText="Xác nhận xoá"
                                            cancelText="Không Xoá"
                                        >
                                            <DeleteOutlined style={{color: "red"}} />
                                        </Popconfirm>
                                    </Space>
                                )}
                            />
                    </Table>
                </Col>
            </Row>
        </AdminLayout>
        </>
    )
}

export default QuanLyOrder;
