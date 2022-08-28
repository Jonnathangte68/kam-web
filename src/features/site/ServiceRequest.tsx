import { css } from "@emotion/css";
import { MDBCol, MDBRow } from "mdbreact";
import CenterAligned from "../../components/CenterAligned";
import CountryPicker from "../../components/CountryPicker";
import { IoReorderThree } from "react-icons/io5";
import COLORS from "../../utils/colors";
import { useNavigate, useParams } from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import NavigationBar from "../../components/NavigationBar";
import { useEffect, useState } from "react";
import ChatDialog from "../../components/ChatDialog";
import _ from "lodash";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ServiceFilter from "../../components/ServiceFilter";
import { saveNewServiceRequest } from "./siteSlice";

const ServiceRequestScreen = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isServiceSidebarVisible, setIsServiceSidebarVisible] = useState(false);
    
    const [isChatDialogVisible, setIsChatDialogVisible] = useState(false);
    const services = useAppSelector((state) => state.site.services);
    const [serviceSelected, setServiceSelected] = useState();
    let { id } = useParams();

    useEffect(() => {
        const selectedServiceId = _.toNumber(id);
        const selectedSubcategory = services.filter(item => item?.id === selectedServiceId)[0];
        if (!!selectedSubcategory) {
            setServiceSelected(selectedSubcategory); 
        }
    }, [id, services]);
    
    const handleToggleLiveChat = () => {
        setIsChatDialogVisible(!isChatDialogVisible);
    };

    const handleSubmit = (form_data) => {
        dispatch(saveNewServiceRequest(form_data));
        navigate("/thank-you-for-your-request", { replace: false });
    };

    return (
        <MDBRow className={css`width: 100%; height: 100%; max-height: 100%; margin: 0 !important;`}>

            {/* MAIN HEADER */}
            <MDBCol md="12" className={css`height: 12vh; padding: 0 !important;`}>
                <div className={css`display: flex; justify-content: space-between; background-color: ${COLORS.WHITE_1}; width: 100%; height: 100%;`}>
                    <CenterAligned>
                        <IoReorderThree onClick={() => setIsServiceSidebarVisible(true)} className={css`width: 7vh; height: 7vh; margin-left: 10vh;`} />
                    </CenterAligned>
                        <img src="/assets/img/Logo/header-logo.png" alt="kam logo"/>
                    <CenterAligned>
                        <CountryPicker className={css`width: 19.45vh; height: 4.25vh; padding-top: 0.1vh; padding-bottom: 0.1vh;`} />
                    </CenterAligned>
                </div>
            </MDBCol>

            {/* NAV OPTIONS */}
            <NavigationBar />

            {/* BANNER CONTACT US PHONE NUMBER */}
            <MDBCol md="12" className={css`padding: 0px !important;`}>
                <img 
                    alt="header"
                    src="/assets/img/contact-us/header.png"
                    className={css`width: 100%; object-fit: cover;`}
                />
            </MDBCol>

            {/* BANNER SERVICE SELECTED SERVICE THUMBNAIL */}
            {/* @ts-ignore */}
            {!!serviceSelected && (<MDBCol md="12" className={css`background-position: center; background-repeat: no-repeat; background-size: cover; background-image: url("${serviceSelected?.image}"); padding: 0px !important;`}>
                <div className={css`width: 100%; height: 100%; text-align: center;`}>
                    <p className={css`text-align: center; height: 3vh; font-family: 'Lexend Deca', sans-serif; font-weight: 700; font-size: 1.44rem; color: ${COLORS.WHITE_1}; text-shadow: 1px 1px ${COLORS.BLACK_1}; margin-top: 3.70%; margin-bottom: 1.70%;`}>
                        {/* @ts-ignore */}
                        {serviceSelected?.title}
                    </p>
                    <div className={css`flex: 1; display: flex; justify-content: center; align-items: center; text-align: center; height: 3vh; font-family: 'Lexend Deca', sans-serif; font-weight: 400; font-size: 0.88rem; color: ${COLORS.WHITE_1}; text-shadow: 1px 1px ${COLORS.BLACK_1}; margin-top: 2.70%; margin-bottom: 3.70%;`}>
                        <p className={css`width: 20%`}>
                            {/* @ts-ignore */}
                            {serviceSelected?.description}
                        </p>
                    </div>
                </div>
            </MDBCol>)}

            {/* CONTACT FORM DETAILS */}
            <ContactForm onSubmit={handleSubmit} />
            
            {/* CONTACT US EMAIL PHONE FOOTER BANNER */}
            <MDBCol md="12" className={css`padding: 0 !important;`}>
                <img 
                    alt="header"
                    src="/assets/img/Contact us/footer.png"
                    className={css`width: 100%; object-fit: cover;`}
                />
            </MDBCol>

            {/* OPEN LIVE CHAT */}
            <img
                className={css`width: 19vh; height: 9vh; position: fixed; top: 69%; right: 2vh;`}
                alt="open live chat dialog"
                src="/assets/img/live-chat.png"
                onClick={handleToggleLiveChat}
            />
            <ChatDialog visible={isChatDialogVisible} onClose={() => setIsChatDialogVisible(false)} />

            {/* SERVICE FILTER SIDEBAR */}
            <ServiceFilter visible={isServiceSidebarVisible} onClose={() => setIsServiceSidebarVisible(false)} />

            {/* FOOTER */}
            <MDBCol md="12" className={css`height: 12vh; padding: 0 !important;`}>
                <div className={css`display: flex; justify-content: center; background-color: ${COLORS.WHITE_1}; width: 100%; height: 100%;`}>
                    <img src="/assets/img/Logo/header-logo.png" alt="kam service to your door footer logo"/>
                </div>
            </MDBCol>
        </MDBRow>
    );
};

export default ServiceRequestScreen;