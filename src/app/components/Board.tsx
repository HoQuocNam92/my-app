import React from "react";
import Cell from "./Cell";


interface BoardProps {
    cells: (string | null)[];
    onClick: (index: number) => void;
}
const Board: React.FC<BoardProps> = ({ cells, onClick }) => {
    return (
        <div className="game-board">
            {cells.map((item: string | null, index: number) => (
                <Cell key={index} value={item} onClick={() => onClick(index)} />
            ))}
        </div>
    );
};

export default Board;
