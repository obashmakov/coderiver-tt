import React from 'react';
import { Menu } from './components/Menu';
import { Header } from './components/Header';
import { Chart } from './components/Chart';
import { InfoCards } from './components/InfoCards';
import { Table } from './components/Table';
import { ProfileCard } from './components/ProfileCard';
import { Events } from './components/Events';
import './App.scss';

export const App = () => (
  <div className="content">
    <Menu />
    <div className="content__container">
      <div className="content__central">
        <Header />
        <main className="main">
          <div className="main__content">
            <Chart />
            <InfoCards />
            <Table />
          </div>
          <div className="main__aside">
            <ProfileCard />
            <Events />
          </div>
        </main>
      </div>
    </div>
  </div>
);
