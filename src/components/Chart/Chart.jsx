import React, { useState } from 'react';
import classNames from 'classnames';
import { Top } from './Top';
import { earnings, months } from '../../variables/chart-vars';
import fill from '../../images/chart/Fill.svg';
import outline from '../../images/chart/Outline.svg';
import point from '../../images/chart/Point.svg';
import './Chart.scss';

export const Chart = () => {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(true);
  const [selected3, setSelected3] = useState(false);

  return (
    <>
      <section className="chart">
        <div className="chart__container">
          <Top
            selected1={selected1}
            selected2={selected2}
            selected3={selected3}
            setSelected1={setSelected1}
            setSelected2={setSelected2}
            setSelected3={setSelected3}
          />

          {selected2 && (
            <>
              <ul className="chart__earnings">
                {earnings.map((money, index) => (
                  <li className={classNames(
                    'chart__money',
                    { 'chart__money--colored': index === earnings.length - 1 },
                  )}
                  >
                    {money}
                  </li>
                ))}
              </ul>
              <ul className="chart__months">
                {months.map(month => (
                  <li className="chart__month">
                    {month}
                  </li>
                ))}
              </ul>
              <img
                className="chart__fill"
                src={fill}
                alt="line"
              />
              <img
                className="chart__outline"
                src={outline}
                alt="line-background"
              />
              <img
                className="chart__point"
                src={point}
                alt="circle"
              />
              <div className="chart__earnings-info">
                <div className="chart__info">
                  Earnings: $203
                  <span className="chart__triangle" />
                </div>
              </div>
            </>
          )}

          {(selected1 || selected3) && (
            <div className="chart__nodata">
              No Data Available
            </div>
          )}
        </div>
      </section>
    </>
  );
};
