import MenuNav from "./Menu/Menu";
import BodyAdmin from "./Bodyadmin/Bodyadmin";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const AdminLayout = ({ children, pageTitle, placeholder,
                setFirstName, setLastName, setAddress, 
                setTenChucVu,
                setTenPK, setAddressPK,
                setTenCK
            
            }) => {

    const dispatch = useDispatch()

    return (
        <Navbar className="bg-body-tertiary">
            <Container>

                <div style={{ height: 250, 
                    // textAlign: 'center', 
                    // borderBottom: "1px solid #ebebeb", 
                    backgroundColor: "#baf3d6",
                    marginTop: 0, padding: 10, 
                }}>
                    <MenuNav />
                    <BodyAdmin 
                        content={children} 
                        pageTitle={pageTitle } 
                        setFirstName={setFirstName || (() => {})} // Cung cấp giá trị mặc định
                        setLastName={setLastName || (() => {})}
                        setAddress={setAddress || (() => {})}
                        setTenChucVu={setTenChucVu || (() => {})}
                        setTenPK={setTenPK || (() => {})}
                        setAddressPK={setAddressPK || (() => {})}
                        setTenCK={setTenCK || (() => {})}
                        placeholder={placeholder}
                    /> {/* Truyền nội dung vào BodyAdmin */}
                </div>
            </Container>
        </Navbar>
    );
};

export default AdminLayout;