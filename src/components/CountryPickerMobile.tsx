import Form from 'react-bootstrap/Form';
import { css } from "@emotion/css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';

const CountryPickerMobile = (props: any) => {
    const [countrySelected, setcountrySelected] = useState("us");

    const renderUsSelection = () => (
        <>
            <img alt="english flag" src="/assets/img/country-picker/usa-flag.png" style={{ width: "2.6vh", height: "1.5vh" }} />
        </>
    );

    const renderSuomiSelection = () => (
        <>
            <img alt="english flag" src="/assets/img/country-picker/suomi-flag.png" style={{ width: "2.6vh", height: "1.5vh" }} />
        </>
    );

    const handleSelection = (selected: string) => {
        console.log("handle selection ", selected);
        setcountrySelected(selected);
    };

    return (
        <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="outline-light" className={css`margin-top: 2.33vh;`}>
            {countrySelected === "us" ? (renderUsSelection()) : renderSuomiSelection()}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
            {countrySelected === "fi" && (<Dropdown.Item onClick={() => handleSelection("us")}>
                <img alt="english flag" src="/assets/img/country-picker/usa-flag.png" />
            </Dropdown.Item>)}
            {countrySelected === "us" && (<Dropdown.Item onClick={() => handleSelection("fi")}>
                <img alt="english flag" src="/assets/img/country-picker/suomi-flag.png" />
            </Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
    );
};


export default CountryPickerMobile;