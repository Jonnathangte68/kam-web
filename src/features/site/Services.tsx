import { css } from "@emotion/css";
import { MDBCol, MDBRow } from "mdbreact";
import CenterAligned from "../../components/CenterAligned";
import CountryPicker from "../../components/CountryPicker";
import { IoReorderThree } from "react-icons/io5";
import COLORS from "../../utils/colors";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import { useEffect, useState } from "react";
import ChatDialog from "../../components/ChatDialog";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ServiceFilter from "../../components/ServiceFilter";
import { fetchServicesByCategory } from "./siteSlice";
import _ from "lodash";

const ServicesScreen = (props: any) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isServiceSidebarVisible, setIsServiceSidebarVisible] = useState(false);
    const services = useAppSelector((state) => state.site.services);
    let { id } = useParams();
    const [isChatDialogVisible, setIsChatDialogVisible] = useState(false);
    
    const handleToggleLiveChat = () => {
        setIsChatDialogVisible(!isChatDialogVisible);
    };

    const handleNewServiceRequest = (service_id) => {
        navigate(`/service-request/${service_id}`, { replace: false });
    };

    const renderServices = () => (
        <MDBRow>
            {services.map(
                (service, divIndex) => {

                    return (
                        <>
                            <MDBCol md="6" className={css`margin-top: 0vh; margin-bottom: 0vh;`}>
                                <div className={css`background-position: center; background-repeat: no-repeat; background-size: cover; width: 100%; height: 91%; background-image: url("${service?.image}"); border-radius: 3vh; padding-top: .22%; padding-bottom: .22%; padding-left: 3.15%;`}>
                                    <p className={css`height: 3vh; width: 66%; font-family: 'Lexend Deca', sans-serif; font-weight: 700; font-size: 1.44rem; color: ${COLORS.WHITE_1}; text-shadow: 1px 1px ${COLORS.BLACK_1}; margin-top: 1.70%; margin-bottom: 1.70%;`}>{service?.title}</p>
                                    <p className={css`height: 3vh; width: 66%; font-family: 'Lexend Deca', sans-serif; font-weight: 400; font-size: 0.72rem; color: ${COLORS.WHITE_1}; text-shadow: 1px 1px ${COLORS.BLACK_1}; margin-top: -3%; margin-bottom: 3.70%;`}><br/>{service?.description}</p>
                                    <button onClick={() => handleNewServiceRequest(service?.id)} className={css`height: 5vh; width: 30%; color: ${COLORS.WHITE_1}; border-radius: 0.35vh; border-style: none; padding: 0.66vh 1.77vh 0.66vh 1.77vh; background-color: ${COLORS.PURPLE}; margin-top: 11.15%; margin-bottom: 1.70%;`}>Order Now</button>
                                    <div className={css`position: relative; top: -19.75vh; left: 85%; background-color: ${COLORS.WHITE_1}; border-radius: 50%; width: 8vh; height: 8vh; text-align: center; padding-top: 3.15%; padding-bottom: 3.15%; color: ${COLORS.BLACK_1}; font-weight: bold;`}>
                                        {service?.price}€/h
                                    </div>
                                </div>
                            </MDBCol>
                        </>
                    );
                }
            )}
        </MDBRow>
    );

    useEffect(() => {
        console.log("category search", id);
        dispatch(fetchServicesByCategory(_.toNumber(id)));
    }, []);
    

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

            {/* SERVICES CARDS */}
            <MDBCol md="12" className={css`padding: 30.284px 0px 3.955vh 0px;`}>
                <p className={css`padding-top: 0.85vh; margin-bottom: 2.5vh !important; text-align: center; font-weight: 600; font-size: 1.715rem;`}>
                    Cleaning Services
                </p>
                <div className={css`padding-left: 10vh; padding-right: 10vh;`}>
                    {renderServices()}
                </div>
                {services?.length === 0 && (<div className={css`padding-left: 10vh; padding-right: 10vh; padding-top: 7.77vh; padding-bottom: 7.77vh !important; `}>
                    <p className={css`text-align: center; font-weight: 600; font-size: 1.715rem;`}>Sorry, we don't have any services available yet!</p>
                </div>)}
            </MDBCol>
            
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

export default ServicesScreen;