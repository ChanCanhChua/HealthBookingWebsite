import MenuNav from "./Menu/Menu";
import BodyAdmin from "./Bodyadmin/Bodyadmin";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch} from "react-redux";

const AdminLayout = ({ children, pageTitle, placeholder,
                setFirstName, setLastName, setAddress, 
                setTenChucVu,
                setTenPK, setAddressPK,
                setTenCK
            
            }) => {

    const dispatch = useDispatch()

    return (
        <Navbar className="bg-body-tertiary">
            <Container style={{marginLeft: 0}}>

                <div style={{ height: 250,
                    backgroundColor: "#baf3d6",
                    width: 1675,
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
                    /> 
                </div>
            </Container>
        </Navbar>
    );
};

export default AdminLayout;
