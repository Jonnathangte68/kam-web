import { css } from "@emotion/css";
import { useMediaQuery } from "react-responsive";

const CenterAligned = (props: any) => {

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
      
    return (
        <div className={css`display: table;`}>
            <div className={css`display: table-cell; vertical-align: middle;`}>
                <div className={css`margin-left: auto; margin-right: auto; ${!!isDesktopOrLaptop ? "width: 200px;" : "width: 2vh;"}`}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default CenterAligned;