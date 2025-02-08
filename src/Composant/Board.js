// import React, { useState } from 'react';
// import Square from './Square';

// import calculateWinner from '../utils/calculateWinner';
// //3 ajouter
// function Board() { 
// const [squares, setSquares] = useState(Array(9).fill(null)); 
// const [isXNext, setIsXNext] = useState(true); 

// const handleClick = (index) => { 
// if (squares[index]) return; 
// const nextSquares = squares.slice(); 
// nextSquares[index] = isXNext ? 'X' : 'O'; 
// setSquares(nextSquares); 
// setIsXNext(!isXNext); 
// }; 
// const renderSquare = (index) => ( 
// <Square value={squares[index]} onClick={() => handleClick(index)} /> 
// ); 
// return ( 
// <div> 
// <div className="board-row"> 
// {renderSquare(0)} 
// {renderSquare(1)} 
// {renderSquare(2)} 
// </div> 
// <div className="board-row"> 
// {renderSquare(3)} 
// {renderSquare(4)} 
// {renderSquare(5)} 
// </div> 
// <div className="board-row"> 
// {renderSquare(6)} 
// {renderSquare(7)} 
// {renderSquare(8)} 
// </div> 
// </div> 
// ); 
// } 
// export default Board; 

// ////
import React, { useState } from 'react';
import Square from './Square';
import calculateWinner from '../utils/calculateWinner';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Vérifier s'il y a un gagnant
  const winner = calculateWinner(squares);

  const handleClick = (index) => {
    // Empêcher les clics si le jeu est terminé ou si la case est déjà occupée
    if (squares[index] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? 'X' : 'O';
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  // Message d'état
  const status = winner
    ? ` Le joueur ${winner} a gagné ! `
    : squares.every((square) => square !== null)
    ? ' Aucun gagnant.'
    : ``;

  const renderSquare = (index) => (
    <Square value={squares[index]} onClick={() => handleClick(index)} />
  );

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
      {/* Ajouter un bouton pour redémarrer */}
      <button className="reset-button" onClick={() => resetGame()}>
        Redémarrer la partie
      </button>
    </div>
  );

  // Fonction pour réinitialiser le jeu
  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }
}

export default Board;

