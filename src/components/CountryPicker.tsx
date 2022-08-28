import Form from 'react-bootstrap/Form';

const CountryPicker = (props: any) => {
    return (
        <Form.Select className={props?.className}>
            <option value="1" data-icon="/assets/img/us-flag-language-selector.png" >
                English
            </option>
            <option value="2" data-icon="/assets/img/suomi-flag-language-selector.png">
                Finnish
            </option>
        </Form.Select>
    );
};


export default CountryPicker;