import React from 'react';
import { Menu } from './components/Menu';
import { Header } from './components/Header';

import './App.scss';

export const App = () => (
  <div className="content">
    <Menu />
    <Header />
  </div>
);
