

import MenuNav from "./Menu/Menu";
import Bodydoctor from "./Bodydoctor/Bodydoctor";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Row } from "antd";
import Header from "../User/header";


const DoctorLayout = ({ children, pageTitle}) => {
    
    const dispatch = useDispatch()

    return (
        <>
        <Header/>
        <Navbar className="bg-body-tertiary" style={{height: 400}}>
            <Container style={{marginLeft: 0}}>

                <div style={{ height: 250,
                    backgroundColor: "#b7f7ef",
                    position: "absolute",
                    marginTop: 0, width: "100%"
                }}>
                    <MenuNav />
                    <Bodydoctor 
                        content={children} 
                        pageTitle={pageTitle } 
                    /> 
                </div>
            </Container>
        </Navbar>
        </>
    );
};

export default DoctorLayout;
