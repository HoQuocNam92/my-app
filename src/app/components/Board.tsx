import React from "react";
import Cell from "./Cell";


interface BoardProps {
    cells: (string | null)[];
    onClick: (index: number) => void;
}
const Board: React.FC<BoardProps> = (props) => {
    return (
        <div className="game-board">
            {props.cells.map((item: string | null, index: number) => (
                <Cell key={index} value={item} onClick={() => props.onClick(index)} />
            ))}
        </div>
    );
};

export default Board;
