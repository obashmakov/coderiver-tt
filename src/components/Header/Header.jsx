import React, { useState } from 'react';
import userFace from '../../images/userFace.png';
import statusGreen from '../../images/statusGreen.svg';
import statusYellow from '../../images/statusYellow.svg';
import './Header.scss';

export const Header = () => {
  const [online, setOnline] = useState(true);

  const onSelect = (event) => {
    const selected = event.target.value;

    if (selected === 'online') {
      setOnline(true);
    }

    if (selected === 'offline') {
      setOnline(false);
    }
  };

  return (
    <header className="header">
      <div className="header__title">
        Your Profit
      </div>
      <div className="header__user">
        <img
          className="header__user-photo"
          src={userFace}
          alt="user"
        />
        <img
          className="header__user-satus"
          src={online ? statusGreen : statusYellow}
          alt="status"
        />
        <div className="header__info">
          <span className="header__name">
            Jordan J.
          </span>
          <span className="header__position">
            Administrator
          </span>
        </div>

        <div className="header__dropdown-container">
          <select className="header__dropdown" onChange={onSelect}>
            <option value="online">
              Online
            </option>
            <option value="offline">
              Offline
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};
