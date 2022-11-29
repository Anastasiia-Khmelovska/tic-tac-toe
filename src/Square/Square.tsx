/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import React from 'react';
import './Square.scss';

type Props = {
  val: string;
  changePlayer: boolean;
  chooseSquare: () => void;
};

export const Square: React.FC<Props> = ({ val, chooseSquare, changePlayer }) => {
  return (
    <div
      onClick={chooseSquare}
      className={classNames('squareStyle', {
        firstPlayer: changePlayer,
      })}
    >
      {val}
    </div>
  );
};
