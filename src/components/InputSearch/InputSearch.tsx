import React from "react";
import { MDBCol, MDBIcon, MDBRow } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { css } from "@emotion/css";
import COLORS from "../../utils/colors";

const InputSearch = (props: any) => {

  if (!!props.only) {
    return (
      <>
        <div className={css`
          width: 100%;
          padding-left: .22vh;
          padding-right: .22vh;
        `}>
          <MDBRow className="mt-3 mb-3">
            <MDBCol md="12">
              <div className={css`
                width: 100%;
                position: relative;
                display: flex;
              `}>
                <button type="button" className={css`
                    width: 40px;
                    height: 45px;
                    border: 1px solid ${COLORS.GRAY_SLIGHT};
                    border-right: none;
                    background: ${COLORS.WHITE_1};
                    text-align: center;
                    color: #fff;
                    border-radius: 5px 0 0 5px;
                    cursor: pointer;
                    font-size: 20px;
                  `}>
                    <i className="fa fa-search" style={{ color: COLORS.SECONDARY_COLOR }}></i>
                </button>
                  <input type="text" className={css`
                      width: 100%;
                      border: 1px solid ${COLORS.GRAY_SLIGHT};
                      border-left: none;
                      padding: 5px;
                      height: 45px;
                      border-radius: 0 5px 5px 0;
                      outline: none;
                      color: ${COLORS.BLACK_1};
                    `}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                  />
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </>
  );
  }

  return (
      <>
        <div className={css`
          width: 100%;
          padding-left: .22vh;
          padding-right: .22vh;
        `}>
          <MDBRow className="mt-3 mb-3">
            <MDBCol md="12">
              <div className={css`
                width: 100%;
                position: relative;
                display: flex;
              `}>
                <button type="button" className={css`
                    width: 40px;
                    height: 45px;
                    border: 1px solid ${COLORS.GRAY_SLIGHT};
                    border-right: none;
                    background: ${COLORS.WHITE_1};
                    text-align: center;
                    color: #fff;
                    border-radius: 5px 0 0 5px;
                    cursor: pointer;
                    font-size: 20px;
                  `}>
                    <i className="fa fa-search" style={{ color: COLORS.SECONDARY_COLOR }}></i>
                </button>
                  <input type="text" className={css`
                      width: 100%;
                      border: 1px solid ${COLORS.GRAY_SLIGHT};
                      border-left: none;
                      padding: 5px;
                      height: 45px;
                      border-radius: 0 5px 5px 0;
                      outline: none;
                      color: ${COLORS.BLACK_1};
                    `}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                  />
              </div>
            </MDBCol>
          </MDBRow>
        </div>
      </>
  );
}

export default InputSearch;