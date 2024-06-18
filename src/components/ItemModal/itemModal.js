import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScoreBoardModal from './ScoreBoardModal/ScoreBoardModal';
import { modalTypeEnum } from '../../interface/uiEnum'
import { Provider } from 'react-redux';
import store from '../../store';

// 这是一个自定义内容的弹框
class ItemModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childData: {}
    }
  }

  getChildData=(childData)=>{
    this.setState({ childData: childData });
  }


  render() {
    let { title,onClose,param,okbtn,showX,modalType } = this.props;
    return (
      <Provider store={store}>
        <div className='mask'>
          <div className="modal">
            <div className='title'>
              <div>{title()}</div>
            </div>
            <div className='content'>
              {modalType === modalTypeEnum.SCORE_BOARD &&  (
                <ScoreBoardModal scoreBoardType={param} itemModal={this}/>
              )}
            </div>
            <div className='btn' onClick={onClose}>{okbtn(this.state.childData)}</div>
            {showX?<span onClick={onClose} class="icon iconfont icon-btn_scx icon_x">x</span>:null}
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
      </Provider>
    )
  }
}

export default function sigomodal(obj) {
  let ConDiv = document.createElement('div');
  ConDiv.id = 'condiv1'
  document.body.appendChild(ConDiv);
  let props = {
    title: obj.title,
    okbtn:obj.okbtn,
    param:obj.param,
    modalType: obj.modalType,
    onClose:obj.onClose,
    showX:obj.showX,
  }
  ReactDOM.render(<ItemModal {...props} />, ConDiv);
}
