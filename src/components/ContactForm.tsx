import { css } from "@emotion/css";
import { MDBCol, MDBRow } from "mdbreact";
import { useState } from "react";
import COLORS from "../utils/colors";
import Checkbox from "./Checkbox";
import RegularTextInput from "./TextInput/RegularTextInput";

const ContactForm = (props: any) => {
    const [phone, setphone] = useState();
    const [date, setdate] = useState();
    const [time, settime] = useState();
    const [first_name, setfirstname] = useState();
    const [last_name, setlastname] = useState();
    const [telephone, settelephone] = useState();
    const [email, setemail] = useState();
    const [street_address, setstreet_address] = useState();
    const [apartment_no, setapartment_no] = useState();
    const [city, setcity] = useState();
    const [message, setmessage] = useState();

    const handleFormSubmit = () => {
        props?.onSubmit({
            phone_number: phone,
            date: date,
            time: time,
            first_name: first_name,
            last_name: last_name,
            telephone: telephone,
            email: email,
            street: street_address,
            apartment_no: apartment_no,
            city: city,
            message: message
        });
    };

    return (
        <MDBRow className={css`padding: 5.15vh 33vh 5.15vh 33vh; background-color: ${COLORS.GRAY_BACKGROUND}`}>

            {/* TELEPHONE NUMBER */}
            <MDBCol md="12" className={css`padding-left: 0px !important; padding-right: 0px !important; margin-top: 2.652vh; margin-bottom: 2.652vh;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif;`}><span className={css`border: 1px solid ${COLORS.RED_1}; color: ${COLORS.WHITE_1}; padding: 0.61vh 0.99vh 0.61vh 0.99vh; background-color: ${COLORS.RED_1}; border-radius: 50%; font-weight: 900; margin-right: 1vh;`}>1</span> Enter your Telephone Number</p>
                <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem; margin-top: 3.15vh; margin-bottom: 3.15vh;`}>Telephone Number</p>
                <RegularTextInput
                    name="xs3"
                    title=""
                    placeholder="Telephone number"
                    value={phone}
                    onChange={(value => setphone(value))}
                />
            </MDBCol>

            {/* SUGGEST BEST TIME */}
            <MDBCol md="12" className={css`padding-left: 0px !important; padding-right: 0px !important; margin-top: 2.652vh; margin-bottom: 2.652vh;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif;`}><span className={css`border: 1px solid ${COLORS.RED_1}; color: ${COLORS.WHITE_1}; padding: 0.61vh 0.99vh 0.61vh 0.99vh; background-color: ${COLORS.RED_1}; border-radius: 50%; font-weight: 900; margin-right: 1vh;`}>2</span> Suggest the best time for you</p>
                <MDBRow>
                    <MDBCol md="6">
                        <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem; margin-top: 1.15vh; margin-bottom: 1.15vh;`}>Date</p>
                        <RegularTextInput
                            name="xs3"
                            title=""
                            placeholder="Date"
                            value={date}
                            onChange={(value => setdate(value))}
                        />
                    </MDBCol>
                    <MDBCol md="6">
                        <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem; margin-top: 1.15vh; margin-bottom: 1.15vh;`}>Time</p>
                        <RegularTextInput
                            name="xs3"
                            title=""
                            placeholder="Time"
                            value={time}
                            onChange={(value => settime(value))}
                        />
                    </MDBCol>
                </MDBRow>
            </MDBCol>

            {/* ADDITIONAL SERVICES */}
            <MDBCol md="12" className={css`padding-left: 0px !important; padding-right: 0px !important; margin-top: 2.652vh; margin-bottom: 2.652vh;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif; margin-top: 0vh; margin-bottom: 3.15vh;`}><span className={css`font-family: 'Lexend Deca', sans-serif; border: 1px solid ${COLORS.RED_1}; color: ${COLORS.WHITE_1}; padding: 0.61vh 0.99vh 0.61vh 0.99vh; background-color: ${COLORS.RED_1}; border-radius: 50%; font-weight: 900; margin-right: 1vh;`}>3</span> Select additional services</p>
                <MDBRow>
                    {[{ name: "Wiping top dust - 60 min | € 47,90", selected: true }, { name: "Radiator cleaning - 18 min | € 16.00", selected: false }].map(
                        additionalService => {
                            return (
                                <MDBCol md="6">
                                    <Checkbox checked={additionalService?.selected} />
                                    <span className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif;`}>{additionalService?.name}</span>
                                </MDBCol>
                            )
                        }
                    )}
                </MDBRow>
            </MDBCol>

            {/* PERSONAL INFORMATION */}
            <MDBCol md="12" className={css`padding-left: 0px !important; padding-right: 0px !important; margin-top: 2.652vh; margin-bottom: 2.652vh;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif; margin-top: 0vh; margin-bottom: 3.15vh;`}><span className={css`font-family: 'Lexend Deca', sans-serif; border: 1px solid ${COLORS.RED_1}; color: ${COLORS.WHITE_1}; padding: 0.61vh 0.99vh 0.61vh 0.99vh; background-color: ${COLORS.RED_1}; border-radius: 50%; font-weight: 900; margin-right: 1vh;`}>4</span> Personal information</p>
                <MDBRow className={css`margin-top: 1.77vh; margin-bottom: 1.77vh;`}>
                    <MDBCol md="6">
                        <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem;`}>First name</p>
                        <RegularTextInput
                            name="xs3"
                            title=""
                            placeholder="First name"
                            value={first_name}
                            onChange={(value => setfirstname(value))}
                        />
                    </MDBCol>
                    <MDBCol md="6">
                        <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem;`}>Last name</p>
                        <RegularTextInput
                            name="xs3"
                            title=""
                            placeholder="Last name"
                            value={last_name}
                            onChange={(value => setlastname(value))}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className={css`margin-top: 1.77vh; margin-bottom: 1.77vh;`}>
                    <MDBCol md="6">
                        <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem;`}>Telephone number</p>
                        <RegularTextInput
                            name="xs3"
                            title=""
                            placeholder="Telephone number"
                            value={telephone}
                            onChange={(value => settelephone(value))}
                        />
                    </MDBCol>
                    <MDBCol md="6">
                        <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem;`}>E-mail</p>
                        <RegularTextInput
                            name="xs3"
                            title=""
                            placeholder="E-mail"
                            value={email}
                            onChange={(value => setemail(value))}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className={css`margin-top: 1.77vh; margin-bottom: 1.77vh;`}>
                    <MDBCol md="6">
                        <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem;`}>Street address</p>
                        <RegularTextInput
                            name="xs3"
                            title=""
                            placeholder="Street address"
                            value={street_address}
                            onChange={(value => setstreet_address(value))}
                        />
                    </MDBCol>
                    <MDBCol md="6">
                        <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem;`}>Apartment number</p>
                        <RegularTextInput
                            name="xs3"
                            title=""
                            placeholder="Apartment number"
                            value={apartment_no}
                            onChange={(value => setapartment_no(value))}
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className={css`margin-top: 1.77vh; margin-bottom: 1.77vh;`}>
                    <MDBCol md="12">
                        <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem;`}>City</p>
                        <RegularTextInput
                            name="xs3"
                            title=""
                            placeholder="City"
                            value={city}
                            onChange={(value => setcity(value))}
                        />
                    </MDBCol>
                </MDBRow>
            </MDBCol>

            {/* SERVICE PROVIDER MESSAGE */}
            <MDBCol md="12" className={css`padding-left: 0px !important; padding-right: 0px !important; margin-top: 2.652vh; margin-bottom: 2.652vh;`}>
                <p className={css`font-family: 'Lexend Deca', sans-serif;`}><span className={css`border: 1px solid ${COLORS.RED_1}; color: ${COLORS.WHITE_1}; padding: 0.61vh 0.99vh 0.61vh 0.99vh; background-color: ${COLORS.RED_1}; border-radius: 50%; font-weight: 900; margin-right: 1vh;`}>5</span> Leave a message to the service provider</p>
                <p className={css`padding-left: 1.15vh; font-family: 'Lexend Deca', sans-serif; font-size: 0.88rem; margin-top: 3.15vh; margin-bottom: 3.15vh;`}>Message the service provider</p>
                <RegularTextInput
                    name="xs3"
                    title=""
                    placeholder="Message the service provider"
                    isTextAreaField={true}
                    value={message}
                    onChange={(value => setmessage(value))}
                />
            </MDBCol>

            {/* BUTTON FORM SUBMIT */}
            <MDBCol md="12" className={css`padding-left: 0px !important; padding-right: 0px !important; margin-top: 2.652vh; margin-bottom: 2.652vh;`}>
                <button
                    className={css`font-family: 'Lexend Deca', sans-serif; width: 100%; height: 5vh; background-color: ${COLORS.PURPLE}; border: 1px solid ${COLORS.PURPLE}; border-radius: 4px; color: ${COLORS.WHITE_1}`}
                    onClick={handleFormSubmit}
                >
                    Send Request
                </button>
            </MDBCol>
        </MDBRow>
    );
};

export default ContactForm;