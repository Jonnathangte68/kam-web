import { css } from "@emotion/css";

const Checkbox = (props: any) => (
    !!props.checked ? 
        (
            <img 
                alt="checkbox element checked true"
                src="/assets/img/checked-checkbox.png"
                className={css`width: 1.895vh; height: 1.895vh`}
                onClick={() => props?.toggleSelection(!props.checked)}
            />
        ) :
        (
            <img 
                alt="checkbox element checked false"
                src="/assets/img/uncheck-checkbox.png"
                className={css`width: 1.895vh; height: 1.895vh`}
                onClick={() => props?.toggleSelection(!props.checked)}
            />
        )
);


export default Checkbox;