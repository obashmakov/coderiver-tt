/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import activeHighlight from '../../../images/activeHighlight.svg';
import './Profiles.scss';

export const Profiles = ({ onToggle, isActive }) => (
  <div className="menu__profiles profiles">
    <div className="profiles__container">
      <img
        className="profiles__photo"
        src="/images/profiles/profile1.png"
        alt="first person"
      />
    </div>
    <div className="profiles__container" onClick={onToggle}>
      {isActive && (
        <img
          className="profiles__container--active"
          src={activeHighlight}
          alt="active"
        />
      )}
      <img
        className={classNames(
          'profiles__photo',
          { 'profiles__photo--active': isActive },
          { 'profiles__photo--notactive': !isActive },
        )}
        src="/images/profiles/profile2.png"
        alt="second person"
      />
    </div>
    <div className="profiles__container">
      <img
        className="profiles__photo"
        src="/images/profiles/profile3.png"
        alt="third person"
      />
    </div>
    <div className="profiles__container">
      <img
        className="profiles__photo"
        src="/images/profiles/profile4.png"
        alt="fourth person"
      />
    </div>
    <div className="profiles__container">
      <img
        className="profiles__photo"
        src="/images/profiles/profile5.png"
        alt="fifth person"
      />
    </div>
  </div>
);

Profiles.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
