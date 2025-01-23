import React, { useState } from "react";
import Cells from "./Cells";

const Board = () => {
    // Giả sử bạn đang làm trò chơi, có thể sử dụng mảng 9 ô với giá trị ban đầu là null
    const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));

    // Hàm xử lý click vào ô
    const handleClick = (index: number) => {
        const newSquares = squares.slice();  // Sao chép mảng hiện tại
        if (newSquares[index]) return;  // Nếu ô đã có giá trị, không làm gì
        newSquares[index] = "X";  // Gán "X" hoặc có thể thay đổi
        setSquares(newSquares);  // Cập nhật lại trạng thái mảng ô
    };

    return (
        <div className="game-board">
            {squares.map((value, index) => (
                <Cells key={index} value={value} onClick={() => handleClick(index)} />
            ))}
        </div>
    );
};

export default Board;
