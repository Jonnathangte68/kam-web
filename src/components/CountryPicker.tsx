import Form from 'react-bootstrap/Form';
import { css } from "@emotion/css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';

const CountryPicker = (props: any) => {
    const [countrySelected, setcountrySelected] = useState("us");

    const renderUsSelection = () => (
        <>
            <img alt="english flag" src="/assets/img/country-picker/usa-flag.png" style={{ width: "2.6vh", height: "1.5vh" }} />
            <span style={{ color: "black", fontWeight: "bold", fontSize: "0.77rem", paddingLeft: "2.52vh", paddingTop: "0.77vh", textTransform: "unset" }}>English</span>
        </>
    );

    const renderSuomiSelection = () => (
        <>
            <img alt="english flag" src="/assets/img/country-picker/suomi-flag.png" style={{ width: "2.6vh", height: "1.5vh" }} />
            <span style={{ color: "black", fontWeight: "bold", fontSize: "0.77rem", paddingLeft: "2.52vh", paddingTop: "0.77vh", textTransform: "unset" }}>Finnish</span>
        </>
    );

    const handleSelection = (selected: string) => {
        console.log("handle selection ", selected);
        setcountrySelected(selected);
    };

    return (
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-light">
            {countrySelected === "us" ? (renderUsSelection()) : renderSuomiSelection()}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
            {countrySelected === "fi" && (<Dropdown.Item onClick={() => handleSelection("us")}>
                <img alt="english flag" src="/assets/img/country-picker/usa-flag.png" />
                <span style={{ color: "black", fontWeight: "bold", fontSize: "0.81rem", paddingLeft: "2.64vh", paddingTop: "0.77vh" }}>English</span>
            </Dropdown.Item>)}
            {countrySelected === "us" && (<Dropdown.Item onClick={() => handleSelection("fi")}>
                <img alt="english flag" src="/assets/img/country-picker/suomi-flag.png" />
                <span style={{ color: "black", fontWeight: "bold", fontSize: "0.81rem", paddingLeft: "2.64vh", paddingTop: "0.77vh" }}>Finnish</span>
            </Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
    );
};


export default CountryPicker;