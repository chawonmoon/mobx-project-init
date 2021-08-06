import React, { Component } from 'react';
import ErrorBoundary from './components/layout/ErrorBoundary';
import Main from './components/layout/Main';
import ModalContainer from './components/modal/ModalContainer';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        {/*
          Main.js : 페이지를 구분하고 분기해주는 route가 포함되어 있다.
          ModalContainer.js : 팝업을 띄워주는 react-modal을 사용하고 있으며,
                              용도에 따라 container를 더 추가하여, 경고창이나
                              컨펌창등으로 나누어 사용도 가능하다.
                              (가스앱 Main.js 참고)
        */}
        <Main />
        <ModalContainer />
      </ErrorBoundary>
    );
  }
}

export default App;
