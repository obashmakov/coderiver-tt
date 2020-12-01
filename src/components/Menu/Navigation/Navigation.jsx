import React from 'react';
import './Navigation.scss';

export const Navigation = () => (
  <>
    <nav className="nav">
      <div className="nav__title">
        Menu
      </div>
      <ul className="nav__list">
        <li className="nav__item nav__item--active">
          <a className="nav__link" href="/">
            Profit
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Explore
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Profile
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Photos
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Videos
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Invite
            <span className="nav__invites">
              54
            </span>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Music
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Candidates
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Calendar
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Feedback
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Help
          </a>
        </li>
      </ul>

      <label className="nav__search" htmlFor="search">
        <input
          className="nav__input"
          type="text"
          id="search"
          name="search"
          placeholder="Search"
        />
      </label>
    </nav>
  </>
);
