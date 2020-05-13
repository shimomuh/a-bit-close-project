import React from 'react';
import logo from './logo320x256.svg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <h1 className="app-header">
        a bit close project
      </h1>
      <p>
        <img src={logo} alt="logo" />
      </p>
      <p>
        仲良くなりたい人と"ちょっと"仲良くなることを目的としたプロジェクト
      </p>
      <footer>
        Copyright &copy; 2020 <a className="author" href="https://twitter.com/shimomuh">@shimomuh</a>. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
