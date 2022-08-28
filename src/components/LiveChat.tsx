import React from "react";
import { render } from "react-dom";
import DragM from "dragm";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

class BuildTitle extends React.Component {
  updateTransform = transformStr => {
      //   @ts-ignore
      if (!!this.modalDom) {
          //   @ts-ignore
        this.modalDom.style.transform = transformStr;
      }
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
      //   @ts-ignore
      if (!this.modalDom) {
          //   @ts-ignore
        this.modalDom = document.getElementsByClassName(
            "ant-modal-wrap" //modal的class是ant-modal-wrap
          )[0];
      }
    return true;
  }

  componentDidMount() {
      //   @ts-ignore
    this.modalDom = document.getElementsByClassName(
      "ant-modal-wrap" //modal的class是ant-modal-wrap
    )[0];
  }

  render() {
    //   @ts-ignore
    const { title } = this.props;

    return (
      <DragM updateTransform={this.updateTransform}>
        <div>{title}</div>
      </DragM>
    );
  }
}

export default class LiveChat extends React.Component {
  state = { visible: false };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.visible !== this.state.visible) {
        this.setState({
            visible: nextProps.visible
        });
        return true;
    }
    return false;
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    //   @ts-ignore
    const title = <BuildTitle title="Basic Modal" />;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open
        </Button>
        <Modal
          title={title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>TESt</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
