import React from 'react';
import Settings from '../../../images/Settings.svg';
import { friends } from '../../../variables/friends-vars';
import './Friends.scss';

export const Friends = () => (
  <div className="friends">
    <div className="friends__title">
      <div className="friends__heading">
        Friends
      </div>
      <img
        className="friends__settings-icon"
        src={Settings}
        alt="settings"
      />
    </div>

    <div className="friends__info">
      {friends.map((friend, index) => (
        <div className="friends__status">
          <div className="friends__img">
            <img
              className="friends__photo"
              src={friend.photo}
              alt="person"
            />
            <img
              className="friends__online"
              src={friend.status}
              alt="status"
            />
          </div>

          <div className="friends__description">
            <span className="friends__name">
              {friend.name}
            </span>
            {index === 0
              ? (
                <span className="friends__position friends__position--color">
                  {friend.position}
                </span>
              )
              : (
                <span className="friends__position">
                  {friend.position}
                </span>
              )}
          </div>

          {friend.messages && (
            <div className="friends__messages">
              {friend.messages}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
