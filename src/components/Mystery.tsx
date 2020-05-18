import React from 'react';
import '../styles/Mystery.scss';

const Mystery: React.FC = () => {
  return (
    <a className="indexLink" href="https://mystery.a-bit-close-project.com">
      <div className="mystery">
        <h2>
          アビクロ<span className="mysteryLogo">謎</span>解き
        </h2>
        <p className="mysteryDescription">
          謎解きで知恵を借りあって少し仲良くなろう！
        </p>
      </div>
    </a>
  );
}

export default Mystery;
