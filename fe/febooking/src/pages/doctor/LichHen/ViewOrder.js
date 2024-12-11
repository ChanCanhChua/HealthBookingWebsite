import {Drawer, Descriptions} from "antd";
import moment from "moment";
import { useState } from "react";

const ViewOrder = (props) => {
    const {
        openViewOrder, setOpenViewOrder, dataDetailOrder, setDataDetailOrder, fetchListOrder
    } = props;
    console.log("dataDetailOrder: ", dataDetailOrder)

    const [placement, setPlacement] = useState('right');

    const onClose = () => {
        setOpenViewOrder(false);
        setDataDetailOrder(null)
    };

    const items = [
        {
            key: 'name',
            span: 2,
            label: 'Tên bệnh nhân',
            children: (
                    <div style={{color: "black"}}>{dataDetailOrder?.patientName}</div>
            ),
        },
        {
            key: 'age',
            label: 'Tuổi',
            children: (
                <>
                    {moment().diff(dataDetailOrder?.dateBenhNhan, "year")}
                </>
            ),
        },
        {
            key: 'email',
            span: 2,
            label: 'Email',
            children: (
                <>
                    {dataDetailOrder?.email}
                </>
            ),
        },
        {
            key: 'contact',
            span: 2,
            label: 'SĐT',
            children: (
                <>
                    {dataDetailOrder?.phone}
                </>
            ),
        },
        {
            key: 'address',
            span: 3,
            label: 'Địa chỉ',
            children: (
                <>
                    {dataDetailOrder?.address}
                </>
            ),
        },
        {
            key: 'time',
            span: 3,
            label: 'Giờ khám',
            children: (
                <>
                    {dataDetailOrder?.tenGioKham}
                </>
            ),
        },
        {
            key: 'mota',
            span: 3,
            label: 'Mô tả triệu chứng',
            children: (
                <>
                    {dataDetailOrder?.lidokham}
                </>
            ),
        },
        {
            key: 'dateorder',
            span: 3,
            label: 'Ngày đặt',
            children: (
                <>
                    {dataDetailOrder?.createdAt}
                </>
            ),
        },
    ];

    return(
        <Drawer
            title={dataDetailOrder ? `Thông tin chi tiết về đơn hẹn của bệnh nhân ${dataDetailOrder.patientName}` : "Thông tin bác sĩ"}
            placement={placement}
            width={900}
            onClose={onClose}
            open={openViewOrder}        
        >
            <Descriptions title="Chi tiết" bordered items={items} />
        </Drawer>
    )

}

export default ViewOrder;
