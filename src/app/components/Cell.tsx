import React from 'react';
interface CellProps {
    value: string | null,
    onClick: () => void,
}
const Cells: React.FC<CellProps> = ({ value, onClick }) => {

    return (
        <div className='game-cell' onClick={onClick} >
            {value}
        </div>
    );
};

export default Cells;