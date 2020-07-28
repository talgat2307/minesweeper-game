import React, { useState } from 'react'
import Cell from '../Cell/Cell'

const Board = () => {

  const boardArr = () => {
    let cells = [];
    let bomb = Math.floor(Math.random() * 36) + 1
    for (let i = 0; i < 36; i++) {
      if (i === bomb) {
        cells.push({
          hasItem: 'O',
          className: 'Cell'
        })
      } else {
        cells.push({
          hasItem: '.',
          className: 'Cell'
        })
      }
    }
    return cells;
  };

  const [playBoard, setPlayBoard] = useState(boardArr());

  const cellClick = (i) => {
    const copyPlayBoard = [...playBoard];
    copyPlayBoard[i].className = 'cellClicked';
    setPlayBoard(copyPlayBoard);
  };


  const [tries, setTries ] = useState(0);

  const counter = (i) => {
    if (playBoard[i].className === 'Cell') {
      setTries(tries + 1);
    }
  };

  return (
    <div className='Board'>
      <div>
        {playBoard.map((cell, index) => {
          return(
          <Cell
            key={index}
            cellClass={playBoard[index].className}
            hasItem={cell.hasItem}
            cellClick={() => { counter(index); cellClick(index) } }
          />);
        })}
      </div>
      <p style={{marginTop: '30px'}}>Tries: {tries}</p>
      <button onClick={ ()=>{setPlayBoard(boardArr()); setTries(0)}}>Reset</button>
    </div>
  )
}

export default Board
