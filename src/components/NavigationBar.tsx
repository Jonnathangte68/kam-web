import { css } from "@emotion/css";
import { MDBCol, MDBRow } from "mdbreact";
import { useNavigate } from "react-router-dom";
import COLORS from "../utils/colors";

const NavigationBar = (props: any) => {
    const navigate = useNavigate();
    
    return (
        <MDBCol md="12" className={css`height: 21%; padding: 0 !important; background-color: ${COLORS.BLACK_4};`}>
            <MDBRow>
                <MDBCol md="3" />
                <MDBCol md="2">
                    <p onClick={() => navigate("/catalogue", { replace: false })} className={css`padding-top: 1.88vh; text-align: center; font-family: 'Lexend Deca', sans-serif; color: ${COLORS.WHITE_1}; font-size: 1.33rem;`}>
                        Services
                    </p>
                </MDBCol>
                <MDBCol md="2">
                    <p onClick={() => navigate("/about-us", { replace: false })}  className={css`padding-top: 1.88vh; text-align: center; font-family: 'Lexend Deca', sans-serif; color: ${COLORS.WHITE_1}; font-size: 1.33rem;`}>
                        About Us
                    </p>
                </MDBCol>
                <MDBCol md="2">
                    <p onClick={() => navigate("/contact-us", { replace: false })}  className={css`padding-top: 1.88vh; text-align: center; font-family: 'Lexend Deca', sans-serif; color: ${COLORS.WHITE_1}; font-size: 1.33rem;`}>
                        Contact Us
                    </p>
                </MDBCol>
                <MDBCol md="3" />
            </MDBRow>
        </MDBCol>
    );
};

export default NavigationBar;