//import { useState } from 'react' //함수형 컴퍼넌트때 사용
import React, { Component } from 'react'; // Component를 import 해야 함
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <h1> React 컴포넌트에는 두 가지 종류가 있죠. </h1>
        <div>
          이것은 함수형 컴포넌트입니다.
          <p>React 너무나도 재밌죠 !?</p>
          <p>JavaScript와는 다른 새로운 세계가 펼쳐집니다 </p>
          <span>기 대 된 다 ~</span>
        </div>
      </>
    );
  }
}

// class App extends Component {
//   render() {
//     return <div>안녕하세요</div>;
//   }
  
// }

// function App() {
//   return <div>함수형 컴포넌트!</div>
// }

export default App;

