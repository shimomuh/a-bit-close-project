import React from 'react';
import smallLogo from './images/logo280x220.svg';
import largeLogo from './images/logo320x256.svg';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <header>
        <a href="/">
          <h1 className="appHeader">
            a bit close project
          </h1>
        </a>
      </header>
      <section>
        <p>
          <img className="appLogoSmall" src={smallLogo} alt="ロゴ" />
          <img className="appLogoLarge" src={largeLogo} alt="ロゴ" />
        </p>
        <p>
          仲良くなりたい人と"ちょっと"仲良くなることを目的としたプロジェクト
        </p>
      </section>
      <section>
        <h2>
          プロジェクトサービス一覧
        </h2>
        <ul>
          <li>
            <a className="appLink" href="https://mystery.a-bit-close-project.com">
              <div className="appMystery">
                <h2>
                  アビクロ<span className="appMysteryLogo">謎</span>解き
                </h2>
                <p className="appMysteryDescription">
                  謎解きで知恵を借りあって少し仲良くなろう！
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <footer>
        Copyright &copy; 2020 <a href="https://twitter.com/shimomuh">@shimomuh</a>. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
