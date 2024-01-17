"use client"
import { useState } from "react";

function Square({ value, onClick}) {
  return <button ClassName="square" onClick={onClick}>
    {value}
  </button>
}


function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] - useState(true);

  function onSquareClick(idx) {
    if(squares[idx]) return;

    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(newSquares);

  }
  return (
    <>
      <p>Next Player: {xIsNext ? "X" : "O"}</p>
      <div className="board-row">
        <Square value={squares[0]} onClick={() =>onSquareClick(0)} />
        <Square value={squares[1]} onClick={() =>onSquareClick(1)} />
        <Square value={squares[2]} onClick={() =>onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() =>onSquareClick(3)} />
        <Square value={squares[4]} onClick={() =>onSquareClick(4)} />
        <Square value={squares[5]} onClick={() =>onSquareClick(5)} />
      </div>    
      <div className="board-row">
        <Square value={squares[6]} onClick={() =>onSquareClick(6)} />
        <Square value={squares[7]} onClick={() =>onSquareClick(7)} />
        <Square value={squares[8]} onClick={() =>onSquareClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7]
  ]


  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b]) {}

  }
}

export default function Game() {
  return(
    <div>
      <squares />
    </div>
  )
}