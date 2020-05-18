import React from 'react';
import smallLogo from '../images/base/logo280x220.svg';
import largeLogo from '../images/base/logo320x256.svg';
import Mystery from './Mystery';
import '../styles/Index.scss';

const Index: React.FC = () => {
  return (
    <div className="index">
      <Header />
      <Concept />
      <section>
        <h2>
          プロジェクトサービス一覧
        </h2>
        <ul>
          <li><Mystery /></li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}

const Header: React.FC = () => {
  return (
    <header>
      <a href="/">
        <h1>
          a bit close project
        </h1>
      </a>
    </header>
  );
}

const Footer: React.FC = () => {
  return (
    <footer>
      Copyright &copy; 2020 <a href="https://twitter.com/shimomuh">@shimomuh</a>. All Rights Reserved.
    </footer>
  );
}

const Concept: React.FC = () => {
  return (
    <section>
      <p>
        <img className="indexLogoSmall" src={smallLogo} alt="ロゴ" />
        <img className="indexLogoLarge" src={largeLogo} alt="ロゴ" />
      </p>
      <p>
        仲良くなりたい人と"ちょっと"仲良くなることを目的としたプロジェクト
      </p>
    </section>
  );
}

export default Index;
