import React from 'react';
import './Events.scss';

export const Events = () => (
  <div className="events">
    <div className="events__container">
      <div className="events__heading">
        Upcoming Events with Jordan
      </div>
      <div className="events__info">
        <div className="events__main">
          <div className="events__title">
            Super Photography 2016
          </div>
          <div className="events__data">
            January 13th, Vienna - 6:30 PM
          </div>
        </div>
        <div className="events__post">
          <span className="events__name">
            Photography
          </span>
        </div>
      </div>
      <div className="events__info">
        <div className="events__main">
          <div className="events__title">
            Photox Expo
          </div>
          <div className="events__data">
            March 28th, Paris - 7:30 PM
          </div>
        </div>
        <div className="events__post">
          <span className="events__name events__name--acquamarine">
            Design
          </span>
        </div>
      </div>
    </div>
  </div>
);
