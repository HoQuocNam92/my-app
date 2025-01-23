"use client";
import React, { useState } from 'react';
import Board from '../components/Board';
import './gameStyle.css'
import Helper from '../components/Helper';
const Game: React.FC = () => {
    const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);
    const winner = Helper(board)
    const handleClick = (index: number) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) {
            return;
        }
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setxIsNext(!xIsNext);
    }
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setxIsNext(true);
    }
    return (
        <div >
            <Board cells={board} onClick={handleClick} />
            <button onClick={handleResetGame}>Reset game</button>
        </div>
    );
};

export default Game;