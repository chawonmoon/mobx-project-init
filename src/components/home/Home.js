import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
    this.onChangeBtn = this.onChangeBtn.bind(this);
  }

  onClickBtn() {
    this.props.homeStore.callAppStoreAlert();
  }
  onChangeBtn() {
    this.props.appStore.changeAppData();
  }

  render() {
    return (
      <>
        <div>홈화면</div>
        <br />
        <button onClick={this.onClickBtn}>
          {this.props.homeStore.callAppStoreData}
        </button>
        <button onClick={this.onChangeBtn}>데이터 변경</button>
      </>
    );
  }
}

export default inject('appStore', 'homeStore')(observer(Home));
