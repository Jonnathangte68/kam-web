import { css } from "@emotion/css";

const CenterAligned = (props: any) => {
    return (
        <div className={css`display: table;`}>
            <div className={css`display: table-cell; vertical-align: middle;`}>
                <div className={css`margin-left: auto; margin-right: auto; width: 200px;`}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default CenterAligned;