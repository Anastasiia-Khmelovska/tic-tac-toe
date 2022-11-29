/* eslint-disable no-alert */
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Square } from '../Square/Square';
import './Board.scss';

export const Board: React.FC = () => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('O');
  const [winner, setWinner] = useState('None');
  const [game, setGame] = useState(true);
  const [changePlayer, setChangePlayer] = useState(false);
  const [tie, setTie] = useState(false);
  const winConbination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const chooseSquare = (square: number) => {
    if (!game) {
      return;
    }

    setBoard(board.map((val, ind) => {
      if (ind === square && val === '') {
        return player;
      }

      return val;
    }));
  };

  const handleReset = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('O');
    setWinner('None');
    setGame(true);
    setTie(false);
  };

  const checkWinner = () => {
    winConbination.forEach((currCombination) => {
      const firstPlayer = board[currCombination[0]];

      if (firstPlayer === '') {
        return;
      }

      let foundWinCombination = true;

      currCombination.forEach((ind) => {
        if (board[ind] !== firstPlayer) {
          foundWinCombination = false;
        }
      });
      if (foundWinCombination) {
        setWinner(player);
        setGame(false);
      }
    });
  };

  const checkTie = () => {
    if (board.every((squ) => squ !== '')) {
      setTie(true);
      setWinner('No one');
    }
  };

  useEffect(() => {
    checkWinner();
    checkTie();
    if (player === 'X') {
      setPlayer('O');
      setChangePlayer(true);
    } else {
      setPlayer('X');
      setChangePlayer(false);
    }
  }, [board]);

  useEffect(() => {
    setTimeout(() => {
      if (winner !== 'None') {
        alert(`Game Finished! Winning player: ${winner}`);
      }
    }, 300);
  });

  return (
    <div className="gameBoard containerStyle">
      <div id="statusArea" className="status instructionsStyle">
        Next player:
        {' '}
        <span>{player}</span>
      </div>
      <div id="winnerArea" className="winner instructionsStyle">
        Winner:
        {' '}
        <span>{winner}</span>
      </div>
      <button
        type="submit"
        className="buttonStyle"
        onClick={handleReset}
      >
        Reset

      </button>
      <div className={classNames('boardStyle', {
        tieboard: tie,
      })}
      >
        <div className="board-row rowStyle">
          <Square
            val={board[0]}
            changePlayer={changePlayer}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            changePlayer={changePlayer}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            changePlayer={changePlayer}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="board-row rowStyle">
          <Square
            val={board[3]}
            changePlayer={changePlayer}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            changePlayer={changePlayer}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            changePlayer={changePlayer}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="board-row rowStyle">
          <Square
            val={board[6]}
            changePlayer={changePlayer}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            changePlayer={changePlayer}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            changePlayer={changePlayer}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
};
