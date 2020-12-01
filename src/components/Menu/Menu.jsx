import React, { useState } from 'react';
import { Profiles } from './Profiles';
import { Navigation } from './Navigation';
import { Friends } from './Friends';
import settings from '../../images/Settings.svg';
import grid from '../../images/Grid.svg';

import './Menu.scss';

export const Menu = () => {
  const [isProfileActive, setIsProfileActive] = useState(true);

  const toggleProfile = () => {
    setIsProfileActive(!isProfileActive);
  };

  return (
    <>
      <div className="menu">
        <div className="menu__status">
          <Profiles onToggle={toggleProfile} isActive={isProfileActive} />
          <div className="menu__options">
            <img
              className="menu__options-icon"
              src={grid}
              alt="grid"
            />
            <img
              className="menu__options-icon--distant"
              src={settings}
              alt="settings"
            />
          </div>
        </div>
        <div className={
          isProfileActive ? 'menu__list' : 'menu__list--notactive'
        }
        >
          <Navigation />
          <Friends />
        </div>
      </div>
    </>
  );
};
