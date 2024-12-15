import { Avatar, Button, Col, Row, Upload, message } from "antd";
import Footer from "../../../component/User/footer";
import HeaderViewDoctor from '../../../component/User/header';
import { getInformationPatient, changeImage } from "../../../services/apiuser";
import { callUploadDoctorImg } from "../../../services/apidoctor";
import { useEffect, useState } from "react"
;import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5"
import { FaPhone, FaTransgender } from "react-icons/fa";
import { useSelector } from 'react-redux';
import UpdatePatient from "./UpdatePatient";
import ChangePassword from "./ChangePassword";

const Profile = () => {
    const acc = useSelector(state => state.account.user);
    console.log("id: ", acc._id);
    const [dataProfile, setDataProfile] = useState([])
    const [gender, setGender] = useState("Nam");
    const [openUpdatePatient, setOpenUpdatePatient] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [openChangePassword, setOpenChangePassword] = useState(false);
    const [dataChangePassWord, setDataChangePassWord] = useState(null);
    console.log("open update?: ", openUpdatePatient)
    useEffect(() => {
    fetchInformation(acc._id)
    }, [acc._id]);
    console.log(dataProfile);

    const fetchInformation = async (id, role) => {
        const res = await getInformationPatient(id);
        // console.log("infor bệnh nhân: ", res.data);
        if(res && res.data){
            setDataProfile(res.data);
        }
        if(!dataProfile.gender){
            setGender("Nữ");
        }
    };

    const handleUploadFileImage = async ({ file, onSuccess, onError }) => {
            const res = await callUploadDoctorImg(file);
            console.log("res upload: ", res);  
            if (res) {
                const resimg = await changeImage(acc._id, res.name)
                if(!resimg){
                    fetchInformation(acc._id)
                    message.success('Upload thành công');
                }else{
                    onError('Đã có lỗi khi sửa thông ti người dùng');
                }
                onSuccess("Đã đổi ảnh đại diện thành công");
            } 
            else {
                onError('Đã có lỗi khi upload file');
            }  
    };

    return(
        <>
        <HeaderViewDoctor />
        <Row style={{ backgroundColor: "white"}}>
            <Col span={18} className="col-body">
                <Col span={24}>
                    <p className="txt-title"><IoHomeSharp /> / Thông tin của bạn</p>
                    {/* <Divider/> */}
                    <hr style={{border: "1px solid rgb(243, 243, 243)"}} />
                </Col>
                <Row span={10}>
                    <Col span={4} >
                        <Avatar
                            src= {dataProfile.image? (`http://localhost:3001/uploads/${dataProfile.image}`) : ("http://localhost:3001/uploads/0001.pn")}
                            style={{ border: "1px solid blue", marginLeft: 20 }}
                            size={90}
                        />
                        <Upload
                        listType="none"
                        customRequest={handleUploadFileImage}>
                            <Button 
                            className="button"
                            style={{marginTop: 10, backgroundColor: "#baf3d6"}}
                            >Đổi ảnh đại diện</Button>
                        </Upload>
                    </Col>

                    <Col span={5}>
                        <p
                        className="txt-bacsi" 
                        style={{lineHeight: "27px", fontSize: 25}}>{dataProfile?.lastName} {dataProfile?.firstName}
                        </p>
                        <p style={{fontSize: 20}}>
                            <MdEmail/> {dataProfile?.email}
                        </p>
                        <p style={{fontSize: 20}}>
                            <FaPhone/> {dataProfile?.phone}
                        </p>
                    </Col>

                    <Col span={4}>
                        <p style={{fontSize: 20, marginTop:40}}>
                            <MdLocationOn/> {dataProfile?.address}
                        </p>
                        <p style={{fontSize: 20}}>
                            <FaTransgender/> {gender}
                        </p>
                    </Col>
                </Row>
                <hr style={{border: "1px solid rgb(243, 243, 243)"}} />
                <Button 
                className="button"
                style={{backgroundColor: "#baf3d6"}}
                onClick= {() => {
                    setOpenUpdatePatient(true)
                    setDataUpdate(dataProfile)
                }}>Sửa thông tin bệnh nhân
                </Button>
                
                <Button 
                className="button"
                style={{backgroundColor: "#baf3d6", marginLeft: 10}}
                onClick= {() => {
                    setOpenChangePassword(true)
                    setDataChangePassWord(dataProfile)
                }}>Sửa mật khẩu bệnh nhân
                </Button>
            </Col>

            <UpdatePatient 
            openUpdatePatient={openUpdatePatient}
            setOpenUpdatePatient={setOpenUpdatePatient}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            /> 

            <ChangePassword
            openChangePassword={openChangePassword}
            setOpenChangePassword={setOpenChangePassword}
            dataChangePassWord={dataChangePassWord}
            setDataChangePassWord={setDataChangePassWord}
            />
        </Row>
        <Footer/>
        </>
    )

}

export default Profile;
