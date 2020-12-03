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
          <a className="nav__link" href="/coderiver-tt/">
            Profit
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/coderiver-tt/">
            Explore
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/coderiver-tt/">
            Profile
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/coderiver-tt/">
            Photos
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/coderiver-tt/">
            Videos
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/coderiver-tt/">
            Invite
            <span className="nav__invites">
              54
            </span>
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/coderiver-tt/">
            Music
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/coderiver-tt/">
            Candidates
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/coderiver-tt/">
            Calendar
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/coderiver-tt/">
            Feedback
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/coderiver-tt/">
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
