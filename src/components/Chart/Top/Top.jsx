import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Top.scss';

export const Top = ({
  selected1,
  selected2,
  selected3,
  setSelected1,
  setSelected2,
  setSelected3,
}) => {
  const selectPeriod = (event) => {
    const text = event.target.innerText;

    if (text === 'weekly'.toUpperCase()) {
      setSelected1(true);
      setSelected2(false);
      setSelected3(false);
    } else if (text === 'montly'.toUpperCase()) {
      setSelected1(false);
      setSelected2(true);
      setSelected3(false);
    } else if (text === 'yearly'.toUpperCase()) {
      setSelected1(false);
      setSelected2(false);
      setSelected3(true);
    }
  };

  return (
    <div className="chart__top">
      <p className="chart__title">
        Earnings History
      </p>
      <div className="chart__buttons">
        <button
          className={classNames(
            'chart__button', { 'chart__button--selected': selected1 },
          )}
          type="button"
          onClick={selectPeriod}
        >
          Weekly
        </button>
        <button
          className={classNames(
            'chart__button', { 'chart__button--selected': selected2 },
          )}
          type="button"
          onClick={selectPeriod}
        >
          Montly
        </button>
        <button
          className={classNames(
            'chart__button', { 'chart__button--selected': selected3 },
          )}
          type="button"
          onClick={selectPeriod}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};

Top.propTypes = {
  selected1: PropTypes.string.isRequired,
  selected2: PropTypes.string.isRequired,
  selected3: PropTypes.string.isRequired,
  setSelected1: PropTypes.func.isRequired,
  setSelected2: PropTypes.func.isRequired,
  setSelected3: PropTypes.func.isRequired,
};
