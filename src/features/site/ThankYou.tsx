import { css } from "@emotion/css";
import { MDBCol, MDBRow } from "mdbreact";
import CenterAligned from "../../components/CenterAligned";
import CountryPicker from "../../components/CountryPicker";
import { IoReorderThree } from "react-icons/io5";
import COLORS from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import { useEffect, useState } from "react";
import ChatDialog from "../../components/ChatDialog";
import ServiceFilter from "../../components/ServiceFilter";
import { useAppSelector } from "../../app/hooks";
import _ from "lodash";

const ThankYouScreen = () => {
    const navigate = useNavigate();

    const [isChatDialogVisible, setIsChatDialogVisible] = useState(false);
    const categories = useAppSelector((state) => state.site.categories);
    const mixedCategories = _.sampleSize(categories, 3);
    const [isServiceSidebarVisible, setIsServiceSidebarVisible] = useState(false);
    
    const handleToggleLiveChat = () => {
        setIsChatDialogVisible(!isChatDialogVisible);
    };

    const handleGoServices = () => {
        navigate("/catalogue", { replace: false });
    };

    const handleOpenService = (service_id) => {
        navigate(`/services/${service_id}`, { replace: true });
    };

    const renderServices = () => (
        <MDBRow className={css`text-align: center;`}>
            <MDBCol md="2"/>

            {!!(mixedCategories && mixedCategories[0]) && (<MDBCol md="2" className={css`background-position: center; background-repeat: no-repeat; background-size: cover; background-image: url("${mixedCategories[0]?.image}"); border: 1px solid black; border-radius: 10vh; padding-top: 7.75%; padding-bottom: 4%;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 1.44rem; color: ${COLORS.WHITE_1}; text-shadow: 1px 1px ${COLORS.BLACK_1};`}>{mixedCategories[0]?.title}</p>
                <button onClick={() => handleOpenService(mixedCategories[0]?.id)} className={css`border-width: 0.281vh; border-color: ${COLORS.WHITE_1}; color: ${COLORS.WHITE_1}; border-radius: 10vh; border-style: solid; padding: 0.66vh 1.77vh 0.66vh 1.77vh; background-color: transparent; `}>SEE MORE</button>
            </MDBCol>)}

            <MDBCol md="1"/>

            {!!(mixedCategories && mixedCategories[1]) && (<MDBCol md="2" className={css`background-position: center; background-repeat: no-repeat; background-size: cover; background-image: url("${mixedCategories[1]?.image}"); border: 1px solid black; border-radius: 10vh; padding-top: 7.75%; padding-bottom: 4%;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 1.44rem; color: ${COLORS.WHITE_1}; text-shadow: 1px 1px ${COLORS.BLACK_1};`}>{mixedCategories[1]?.title}</p>
                <button onClick={() => handleOpenService(mixedCategories[0]?.id)} className={css`border-width: 0.281vh; border-color: ${COLORS.WHITE_1}; color: ${COLORS.WHITE_1}; border-radius: 10vh; border-style: solid; padding: 0.66vh 1.77vh 0.66vh 1.77vh; background-color: transparent; `}>SEE MORE</button>
            </MDBCol>)}

            <MDBCol md="1"/>
            
            {!!(mixedCategories && mixedCategories[2]) && (<MDBCol md="2" className={css`background-position: center; background-repeat: no-repeat; background-size: cover; background-image: url("${mixedCategories[2]?.image}"); border: 1px solid black; border-radius: 10vh; padding-top: 7.75%; padding-bottom: 4%;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 1.44rem; color: ${COLORS.WHITE_1}; text-shadow: 1px 1px ${COLORS.BLACK_1};`}>{mixedCategories[2]?.title}</p>
                <button onClick={() => handleOpenService(mixedCategories[0]?.id)} className={css`border-width: 0.281vh; border-color: ${COLORS.WHITE_1}; color: ${COLORS.WHITE_1}; border-radius: 10vh; border-style: solid; padding: 0.66vh 1.77vh 0.66vh 1.77vh; background-color: transparent; `}>SEE MORE</button>
            </MDBCol>)}
        </MDBRow>
    );

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

            {/* IMAGE BLUE DECORATION */}
            <div className={css`text-align: center;`}>
                <img
                    src="/assets/img/BlueRoundBox.png"
                    alt="decoration purple circle"
                    className={css`margin-top: 4.156vh; margin-bottom: 4.156vh;`}
                />
            </div>

            {/* THANK YOU MESSAGE */}
            <p className={css`text-align: center; font-family: 'Lexend Deca', sans-serif; font-size: 1.65rem;`}>
                Thank you!<br/>We have received your request.
            </p>

            {/* SERVICES CARDS */}
            <MDBCol md="12" className={css`padding: 30.284px 0px 3.955vh 0px;`}>
                {renderServices()}
                <p className={css`font-family: 'Lexend Deca', sans-serif; padding-top: 4.85vh; padding-bottom: 0.55vh; text-align: center; font-weight: 600; font-size: 1.715rem;`} onClick={handleGoServices}>
                    See all Categories<span className={css`margin-left: 0.552rem;`}>&gt;</span>
                </p>
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

export default ThankYouScreen;