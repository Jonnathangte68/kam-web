import { css } from "@emotion/css";
import { MDBCol, MDBRow } from "mdbreact";
import COLORS from "../utils/colors";

const ChatDialog = (props: any) => {

    if (props?.visible === false) {
        return null;
    }

    return (
        <div className={css`overflow-y: auto; position: fixed; z-index: 1000; bottom: 0px; right: 0px; width: 37%; height: 40%; background-color: rgb(241, 241, 241);`}>
            <MDBRow className={css`padding-top: 1.44vh; padding-bottom: 1.11vh; background-color: ${COLORS.BLUE_1};`}>
                <MDBCol md="10">
                    <img alt="chat icon" src="/assets/img/chat/chats-circle.png" className={css`display: inline;`} />
                    <img alt="chat icon" src="/assets/img/chat/live-chat-title.png" className={css`display: inline; margin-left: 10px;`} />
                </MDBCol>
                <MDBCol md="2">
                    <img onClick={props?.onClose} alt="chat icon" src="/assets/img/chat/exit-chat.png" className={css`display: inline; width: 3vh; height: 3vh; margin-left: 55%;`} />
                </MDBCol>
            </MDBRow>
            <MDBRow className={css`padding-top: 1.44vh; padding-bottom: 1.11vh;`}>
                <img alt="chatting with Karam" src="/assets/img/chat/chat-header.png" className={css`width: 22vh; height: 7vh;`} />
                <img alt="separator" src="/assets/img/chat/chat-separator.png" className={css`width: 100%; margin-top: 1.88vh; margin-bottom: 1.88vh;`} />
            </MDBRow>
            <MDBRow className={css`padding-left: 10px; padding-right: 10px; margin-top: -7.352px;`}>
                <div>
                    <p className={css`font-family: 'Lexend Deca', sans-serif; text-align: center; font-size: 0.77rem;`}>16 June, 2022</p>
                    <p className={css`font-family: 'Lexend Deca', sans-serif; border-radius: 15px 30px 30px 5px; padding: 2.55vh; min-height: 10vh; width: 70%; background-color: ${COLORS.WHITE_1};`}>
                        Hi, this is Karam.<br/>How can we help you?
                    </p>
                    <p className={css`font-family: 'Lexend Deca', sans-serif; margin-left: 30%; border-radius: 15px 50px; padding: 2.55vh; min-height: 10vh; width: 70%; background-color: ${COLORS.CHAT_REPLY};`}>
                        Hello, I'm looking for a more specific service, do you have pet house cleaning?
                    </p>
                    <p className={css`font-family: 'Lexend Deca', sans-serif; border-radius: 15px 30px 30px 5px; padding: 2.55vh; min-height: 10vh; width: 70%; background-color: ${COLORS.WHITE_1};`}>
                        Yes, we can offer that!
                    </p>
                </div>
            </MDBRow>
        </div>
    );
};

export default ChatDialog;