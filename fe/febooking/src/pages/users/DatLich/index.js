import {memo,useEffect, useState} from 'react';
import Header from "../../../component/User/header";
import Footer from "../../../component/User/footer";
// import { useLocation, useNavigate} from "react-router"
// import { useDispatch, useSelector } from "react-redux"
// import { Avatar, Button, Col, DatePicker, Divider, Form, Input, message, notification, Radio, Row } from "antd"


const DatLich = () =>{
//     const location = useLocation(); // Lấy location
//     const queryParams = new URLSearchParams(location.search);
//     const doctorId = queryParams.get('id');
//     const idGioKhamBenh = queryParams.get('idGioKhamBenh');
//     const ngayKham = queryParams.get('ngayKham');
    
//     const [infoDoctorr, setInfoDoctorr] = useState(null)
//     const [tenGio, setTenGio] = useState(null)
//     const [ngayKhamBenh, setNgayKhamBenh] = useState(null)

//     const [value, setValue] = useState(infoDoctorr?.giaKhamVN);
//     const [tongtien, setTongTien] = useState(0)
//     const [loadingSubmit, setLoadingSubmit] = useState(false)
//     const [form] = Form.useForm()

//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const isAuthenticated = useSelector(state => state.account.isAuthenticated)
//     const acc = useSelector(s => s.account.user)

//     console.log("doctorId: ", doctorId);
//     console.log("idGioKhamBenh: ", idGioKhamBenh);
//     console.log("ngayKham: ", ngayKham);
//     console.log("tongtien: ", tongtien);

//     useEffect(() => {
//         const fetchInfoDoctor = async () => {
//             if (doctorId && idGioKhamBenh && ngayKham) {
//                 // const res = await fetchDoctorByNgayGio(doctorId, idGioKhamBenh, ngayKham);
//                 const res = await fetchDoctorByNgayGio(location.search);
//                 console.log("res:", res);                
//                 if (res && res.infoDoctor) {
//                     setInfoDoctorr(res.infoDoctor);
//                     setTenGio(res.tenGio);
//                     setNgayKhamBenh(res.ngayKham);
//                 }
//             }                  
//         }
//         fetchInfoDoctor();
//     }, [doctorId, idGioKhamBenh, ngayKham])
    

//     console.log("infoDoctorr: ", infoDoctorr);
//     console.log("tenGio: ", tenGio);
//     console.log("ngayKhamBenh: ", ngayKhamBenh);

//     const englishToVietnameseDays = {
//         'Sunday': 'Chủ nhật',
//         'Monday': 'Thứ 2',
//         'Tuesday': 'Thứ 3',
//         'Wednesday': 'Thứ 4',
//         'Thursday': 'Thứ 5',
//         'Friday': 'Thứ 6',
//         'Saturday': 'Thứ 7'
//     };

   
    

    
//     const onChange = (e) => {
//         console.log('radio checked', e.target.value);
//         setValue(e.target.value);
//     };
//     const formatCurrency = (value) => {
//         if (value === null || value === undefined) return '';
//         return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VNĐ`;
//     };

//     const handleDatLich = async (values) => {
//         console.log('Received values:', values);
//         const {_idDoctor, _idTaiKhoan, patientName, email,
//             gender, phone, dateBenhNhan, address, lidokham, 
//             hinhThucTT, tenGioKham, ngayKhamBenh, giaKham
//         } = values

//         if(!patientName){
//             notification.error({
//                 message: 'Đã có lỗi xảy ra',
//                 description: "Vui lòng điền đầy đủ thông tin"
//             })
//             return
//         }
//         setLoadingSubmit(true)
//         const res = await datLichKhamBenh(
//             _idDoctor, _idTaiKhoan, patientName, email,
//             gender, phone, dateBenhNhan, address, lidokham, 
//             hinhThucTT, tenGioKham, ngayKhamBenh, giaKham
//         )
//         console.log("res dat lich: ", res);
        

//         if(res && res.data) {
//             message.success(res.message);
//             form.resetFields()
//             navigate('/')
//         } else {
//             notification.error({
//                 message: 'Đã có lỗi xảy ra',
//                 description: res.message
//             })
//         }
//         setLoadingSubmit(false)
//     }
//     const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
//     const idKH = acc?._id
//     useEffect(() => {
//         if (infoDoctorr) {
//             form.setFieldsValue({
//                 // thongTinDoctor: `${infoDoctorr.chucVuId.map(item => item?.name).join(', ')} - ${infoDoctorr.lastName} ${infoDoctorr.firstName}`,
//                 // noiKham: `${infoDoctorr?.phongKhamId.name}`,
//                 // diaChiKham: `${infoDoctorr?.phongKhamId.address}`,
//                 // avtDoctor: `${infoDoctorr?.image}`,
//                 tenGioKham: `${tenGio?.tenGio}`,
//                 ngayKhamBenh: `${formatDateDatLich(ngayKhamBenh)}`,
//                 _idTaiKhoan: `${idKH}`,
//                 _idDoctor: `${infoDoctorr?._id}`
//             });
//         }
//     }, [infoDoctorr, idKH]);

//     const [openModalLogin, setOpenModalLogin] = useState(false);

//     const notificationContent = () => (
//         <div>
//             <span>
//                 Vui lòng đăng nhập trước khi đặt lịch! <br/> Bấm vào đây để
//             </span>
//             <Button 
//                 type="link" 
//                 style={{ marginLeft: '8px' }} 
//                 onClick={() => {
//                     // navigator('/admin/ke-hoach-doctor')
//                     setOpenModalLogin(true)
//                 }}
//             >
//                 Tiến hành đăng nhập
//             </Button>
//         </div>
//     );

return (

    <div>

<section id="appointment" data-stellar-background-ratio={3}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <img src="images/date.jpg" className="img-responsive" alt="" />
            </div>
            <div className="col-md-6 col-sm-6">
              {/* CONTACT FORM HERE */}
              <form id="appointment-form" role="form" method="post" action="#">
                {/* SECTION TITLE */}
                <div className="section-title wow fadeInUp" data-wow-delay="0.4s">
                  <h2>Đặt lịch kiểm tra sức khỏe</h2>
                </div>
                <div className="wow fadeInUp" data-wow-delay="0.8s">
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="name">Họ và tên</label>
                    <input type="text" className="form-control" id="name" name="name" />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="date">Chọn ngày</label>
                    <input type="date" name="date" defaultValue className="form-control" />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="select">Chọn khoa</label>
                    <select className="form-control">
                      <option />
                      <option>Tổng quát</option>
                      <option>Tai-Mũi-Họng</option>
                      <option>Tim mạch</option>
                      <option>Răng</option>
                      <option>Thần kinh</option>
                    </select>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <label htmlFor="telephone">Số điện thoại</label>
                    <input type="tel" className="form-control" id="phone" name="phone" />
                    <label htmlFor="Message">Ghi chú</label>
                    <textarea className="form-control" rows={5} id="message" name="message" defaultValue={""} />
                    <button type="submit" className="form-control" id="cf-submit" name="submit">Đặt lịch</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
<Footer/>

</div>

)
};
export default memo(DatLich);