import React from 'react';
import './App.scss';
import { Board } from './Board/Board';

export const App: React.FC = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};
