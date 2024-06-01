import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 这是一个自定义内容的弹框
class ItemModal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onClose = () => {
    // 执行关闭的回调
    this.props.onClose()
    //  移除模态框
    const modal = document.getElementById('condiv1')
    document.body.removeChild(modal);
  }

  render() {
    let { title, content,okbtn,showX } = this.props;
    return (
      <div className='mask'>
        <div className="modal">
          <div className='title'>
            <div>{title()}</div>
          </div>
          <div className='content'>{content()}</div>
          <div className='btn' onClick={this.onClose}>{okbtn()}</div>
          {showX?<span onClick={this.onClose} class="icon iconfont icon-btn_scx icon_x">x</span>:null}
          <style>
            {
              `
              .mask {
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                background: rgba(0,0,0,.7);
                height: 100%;
                z-index: 1001;
                }
              .modal {
                  position: relative;
                  top: 50%; 
                  left: 50%; 
                  transform: translate(-50%, -50%);
                  width: 75%;
                  height: auto;
                  border-radius:.12rem;
                  background:#fff;
                  overflow: scroll;
                }
                .title {
                  width: 100%;
                  text-align: center;
                  padding-top: 12px;
                  font-size: 2rem;
                }
                .btn {
                  cursor: pointer;
                }
                .icon_x {
                  position:absolute;
                  right: 10px;
                  top: 5px;
                  font-size: 1.5rem;
                  color: #000000;
                  cursor: pointer;
                }
              `
            }
          </style>
        </div>
        </div>
    )
  }
}

export default function sigomodal(obj) {
  let ConDiv = document.createElement('div');
  ConDiv.id = 'condiv1'
  document.body.appendChild(ConDiv);
  let props = {
    title: obj.title,
    content: obj.content,
    okbtn:obj.okbtn,
    onClose:obj.onClose,
    showX:obj.showX,
  }
  ReactDOM.render(<ItemModal {...props} />, ConDiv);
}
