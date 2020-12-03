import React from 'react';
import face from '../../images/Face.png';
import background from '../../images/card_background.png';
import './ProfileCard.scss';

export const ProfileCard = () => (
  <div className="profile">
    <div className="profile__container">
      <div className="profile__images">
        <img
          className="profile__background"
          src={background}
          alt="background"
        />
        <img
          className="profile__photo"
          src={face}
          alt="person"
        />
      </div>

      <div className="profile__description">
        <p className="profile__name">
          Jordan Jackson
        </p>
        <p className="profile__info">
          Beta Tester | Ultimate User
        </p>

        <hr className="profile__line" />

        <p className="profile__data">Email</p>
        <p className="profile__email">
          jordan.jackson@dashboard.com
        </p>
        <p className="profile__data">Mobile</p>
        <p className="profile__phone">
          +44 (0) 7887 665 588
        </p>
        <p className="profile__data">Skill Level</p>
        <p className="profile__position">
          Senior (50K+)
        </p>
        <p className="profile__data">Paid Out Limit</p>
        <div className="profile__earnings">
          <div className="profile__statistic" />
          <div className="profile__money">
            $580
          </div>
        </div>
        <p className="profile__data">Bio</p>
        <p className="profile__bio">
          Jordan graduated from Cornell University in 2004 with a Bachelor
          degree in computer science and a specialization in mathematics.
          While there, he published two articles on Code-project.
        </p>
        <p className="profile__data">Skills</p>
        <div className="profile__skills skills">
          <span className="skills__photo">Photography</span>
          <span className="skills__teacher">Teacher</span>
          <span className="skills__traveller">Traveller</span>
          <span className="skills__os">iOS</span>
        </div>
      </div>
    </div>
  </div>
);
