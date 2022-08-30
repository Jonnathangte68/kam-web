import { css } from "@emotion/css";
import { useMediaQuery } from "react-responsive";
import COLORS from "../utils/colors";
import InputSearch from "./InputSearch/InputSearch";

const ServiceSidebar = (props: any) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

      const displayType = {
        isDesktopOrLaptop,
        isBigScreen,
        isTabletOrMobile,
        isPortrait,
        isRetina
      };

    if (props?.visible === false) {
        return null;
    }

    return (
        <div className={css`overflow-y: auto; position: fixed; z-index: 1000; top: 0px; left: 0px; ${(displayType.isDesktopOrLaptop || displayType.isBigScreen) ? "width: 20%;": "width: 100%;"} height: 100% !important; background-color: ${COLORS.GRAY_BACKGROUND};`}>
            <div className={css`height: 5vh;`}>
                <img onClick={props?.onClose} alt="close dialog" src="/assets/img/close-item.png" className={css`clear: both; width: 3.44vh; height: 3.44vh; float: right; margin-top: 17px; margin-right: 12px;`} />
            </div>
            <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 1.35rem;`}>Search services</p>
            <InputSearch placeholder="Search..." />
            <br/>
            <br/>
            <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 1.35rem;`}>Filter</p>
            <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 0.77rem;`}>TYPE</p>
            <div className={css`width: 100%; height: auto;`}>
                {["asbdgkasbdglbsadg", "gasgash", "23bj4bk2", "j5123jkj5h152k3b", "asdghasd", "gasd7ygs", "gas97dg9sa7dg9", "gasdg", "2gw", "g8aysdbg", "gasdggy8as8dg8s"].map(type => <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; background-color: ${COLORS.WHITE_1}; padding: .95vh; border-radius: 19px; display: inline-block;`}>{type}</p>)}
            </div>
            <img alt="separator" src="/assets/img/chat/chat-separator.png" className={css`width: 100%; margin-top: 1.88vh; margin-bottom: 1.88vh;`} />
            <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 0.77rem;`}>SORT BY</p>
            <div className={css`width: 100%; height: auto;`}>
                {["asbdgkasbdglbsadg", "gasgash", "23bj4bk2", "j5123jkj5h152k3b"].map(type => <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; background-color: ${COLORS.WHITE_1}; padding: .95vh; border-radius: 19px; display: inline-block;`}>{type}</p>)}
            </div>
            <br/>
            <br/>
            <br/>
            <p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; font-size: 1.35rem;`}>More services</p>
            <br/>
            <br/>
            {["asbdgkasbdglbsadg", "gasgash", "23bj4bk2", "j5123jkj5h152k3b"].map(type => <><p className={css`font-family: 'Lexend Deca', sans-serif; font-wight: 700; padding: .95vh;`}>{type}</p><img alt="separator item" src="/assets/img/chat/chat-separator.png" /><br/></>)}
        </div>
    );
};

export default ServiceSidebar;