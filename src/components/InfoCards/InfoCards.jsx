import React from 'react';
import { data } from '../../variables/info_cards_vars';
import './InfoCards.scss';

export const InfoCards = () => (
  <section className="info">
    <div className="info__container">
      {data.map(item => (
        <div className="info__card">
          <div className="info__numbers">
            {item.number}
          </div>
          <div className="info__about" style={{ color: item.color }}>
            {item.info}
          </div>
          <div className="info__percent">
            <span className={
              item.percent.includes('DECREASE')
                ? 'info__arrow info__arrow--red'
                : 'info__arrow'
            }
            />
            {item.percent}
          </div>
        </div>
      ))}
    </div>
  </section>
);
