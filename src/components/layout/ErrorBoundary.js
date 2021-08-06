import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // 에러정보를 state에 저장해 화면에 나타내는 용도로 사용된다.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidMount() {}

  componentDidCatch(error, info) {
    // 에러 정보를 서버로 전송하는 용도로 사용된다.
    // 주로 슬랙이나 외부로 에러 로그를 전송할때 여기서 전송하면 된다.
  }

  render() {
    if (this.state.hasError) {
      return <div>React 에러 발생시 에러 안내 화면이 여기에 들어간다.</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
