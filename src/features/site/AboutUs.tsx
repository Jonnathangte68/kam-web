import { css } from "@emotion/css";
import { MDBCol, MDBRow } from "mdbreact";
import CenterAligned from "../../components/CenterAligned";
import CountryPicker from "../../components/CountryPicker";
import { IoReorderThree } from "react-icons/io5";
import COLORS from "../../utils/colors";
import RegularTextInput from "../../components/TextInput/RegularTextInput";
import NavigationBar from "../../components/NavigationBar";
import { useState } from "react";
import ChatDialog from "../../components/ChatDialog";
import { saveNewFeedback } from "./siteSlice";
import ServiceFilter from "../../components/ServiceFilter";
import { useAppDispatch } from "../../app/hooks";
import CountryPickerMobile from "../../components/CountryPickerMobile";

const AboutUsScreen = (props) => {
    const dispatch = useAppDispatch();
    
    const [isChatDialogVisible, setIsChatDialogVisible] = useState(false);
    const [name, setName] = useState();
    const [message, setMessage] = useState();
    const [displayfsavedfeedbackmessage, setdisplayfsavedfeedbackmessage] = useState(false);
    const [isServiceSidebarVisible, setIsServiceSidebarVisible] = useState(false);
    
    const handleToggleLiveChat = () => {
        setIsChatDialogVisible(!isChatDialogVisible);
    };
    
    const handleFormSubmit = () => {
        // Send request save feedback
        dispatch(saveNewFeedback({
            name: name,
            message: message
        }));
        setdisplayfsavedfeedbackmessage(true);
        setTimeout(() => {
            setdisplayfsavedfeedbackmessage(false);
        }, 3500);
    };

    const countryPickerMobileStyle = `
        width: 11.45vh;
        margin-left: 500px;
    `;

    console.log("is tablet or mobile", props?.displayType);

    return (
        <MDBRow className={css`width: 100%; height: 100%; max-height: 100%; margin: 0 !important;`}>

            {/* MAIN HEADER */}
            <MDBCol md="12" className={css`height: 12vh; padding: 0 !important;`}>
                <div className={css`display: flex; justify-content: space-between; background-color: ${COLORS.WHITE_1}; width: 100%; height: 100%;`}>
                    <CenterAligned>
                    <IoReorderThree onClick={() => setIsServiceSidebarVisible(true)} className={css`width: 7vh; height: 7vh; ${!!props?.displayType?.isTabletOrMobile ? "margin-left: 1vh;" : "margin-left: 10vh;"}`} />
                    </CenterAligned>
                        {!!props?.displayType?.isTabletOrMobile ? <img className={css`width: 19vh !important; height: auto; margin-right: -11vh;`}  src="/assets/img/Logo/header-logo.png" alt="kam logo"/> : <img className={css`width: 19vh !important; height: auto;`}  src="/assets/img/Logo/header-logo.png" alt="kam logo"/>}
                    {!props?.displayType?.isTabletOrMobile && (<CenterAligned>
                        <CountryPicker className={css`width: 90.45vh; height: 4.25vh; padding-top: 0.1vh; padding-bottom: 0.1vh; ${!!props?.displayType?.isTabletOrMobile && countryPickerMobileStyle}`} />
                    </CenterAligned>)}
                    {!!props?.displayType?.isTabletOrMobile && (
                        <CountryPickerMobile className={css`width: 33.45vh; height: 4.25vh; padding-top: 2vh; padding-bottom: 0.1vh; `} />
                    )}
                </div>
            </MDBCol>

            {/* NAV OPTIONS */}
            <NavigationBar />

            {/* BANNER CONTACT US PHONE NUMBER */}
            <MDBCol md="12" className={css`padding: 0px !important;`}>
                <img 
                    alt="header"
                    src="/assets/img/contact-us/header.png"
                    className={css`width: 100%; object-fit: cover; ${!!props?.displayType?.isTabletOrMobile && "height: 18vh;"}`}
                />
            </MDBCol>

            {/* OUR STORY BANNER */}
            {!!(props?.displayType?.isDesktopOrLaptop || props?.displayType?.isBigScreen) && (<MDBCol md="12" className={css`padding: 0 !important;`}>
                <img className={css`width: 100%;`} alt="tell our story kam" src="/assets/img/our-story-big-slogan.png" />
                <div className={css`position: relative; margin-top: -43.51vh; margin-bottom: 2vh; left: 20%; right: 20%; width: 60%; background-color: transparent;`}>
                    
                        <>
                            {!!displayfsavedfeedbackmessage && (
                                <p className={css`font-size: 1.55rem; text-align: center; font-family: 'Lexend Deca', sans-serif; border-radius: 15px 30px 30px 5px; padding: .10vh; min-height: 2.2vh; width: 100%; background-color: ${COLORS.WHITE_2};`}>Thank you! We have received your feedback!</p>
                            )}
                            <RegularTextInput
                                name="ogabsdggnosdio2"
                                title=""
                                placeholder="Name"
                                value={name}
                                onChange={(value => setName(value))}
                            />
                            <br/>  
                            <RegularTextInput
                                name="fabhsdo2"
                                title=""
                                placeholder="Feedback"
                                isTextAreaField={true}
                                value={message}
                                onChange={(value => setMessage(value))}
                            />
                            <br/>  
                            <button
                                className={css`font-family: 'Lexend Deca', sans-serif; width: 100%; height: 5vh; background-color: ${COLORS.PURPLE}; border: 1px solid ${COLORS.PURPLE}; border-radius: 4px; color: ${COLORS.WHITE_1}`}
                                onClick={handleFormSubmit}
                            >
                                Send Request
                            </button>
                        </>
        
                </div>
            </MDBCol>)}

            {!(props?.displayType?.isDesktopOrLaptop || props?.displayType?.isBigScreen) && (
                <>
                    <MDBCol md="12" className={css`padding: 0 !important;`}>
                        <img className={css`width: 100%; height: 39vh;`} alt="tell our story kam" src="/assets/img/our-story-slogan-mobile-part-1.png" />
                        <img className={css`width: 100%; height: 39vh;`} alt="tell our story kam" src="/assets/img/our-story-slogan-mobile-part-2.png" />
                    </MDBCol>
                    <MDBCol md="12" className={css`background-color: ${COLORS.BLACK_4}; padding-top: 4.13vh; padding-bottom: 4.13vh;`}>
                        <>
                            {!!displayfsavedfeedbackmessage && (
                                <p className={css`font-size: 1.55rem; text-align: center; font-family: 'Lexend Deca', sans-serif; border-radius: 15px 30px 30px 5px; padding: .10vh; min-height: 2.2vh; width: 100%; background-color: ${COLORS.WHITE_2};`}>Thank you! We have received your feedback!</p>
                            )}
                            <RegularTextInput
                                name="ogabsdggnosdio2"
                                title=""
                                placeholder="Name"
                                value={name}
                                onChange={(value => setName(value))}
                            />
                            <br/>  
                            <RegularTextInput
                                name="fabhsdo2"
                                title=""
                                placeholder="Feedback"
                                isTextAreaField={true}
                                value={message}
                                onChange={(value => setMessage(value))}
                            />
                            <br/>  
                            <button
                                className={css`font-family: 'Lexend Deca', sans-serif; width: 100%; height: 5vh; background-color: ${COLORS.PURPLE}; border: 1px solid ${COLORS.PURPLE}; border-radius: 4px; color: ${COLORS.WHITE_1}`}
                                onClick={handleFormSubmit}
                            >
                                Send Request
                            </button>
                        </>
                    </MDBCol>
                </>
            )}
            
            {/* CONTACT US EMAIL PHONE FOOTER BANNER */}
            <MDBCol md="12" className={css`padding: 0 !important;`}>
                <img 
                    alt="header"
                    src="/assets/img/Contact us/footer.png"
                    className={css`width: 100%; object-fit: cover; ${!!props?.displayType?.isTabletOrMobile && "height: 33vh;"}`}
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
                    <img  className={css`width: 19vh !important; height: auto;`} src="/assets/img/Logo/header-logo.png" alt="kam service to your door footer logo"/>
                </div>
            </MDBCol>
        </MDBRow>
    );
};

export default AboutUsScreen;