import React from 'react';
type CellProps = {
    value: string | null,
    onClick: () => void,
}
const Cells: React.FC<CellProps> = (props) => {
    return (
        <div className='game-cell' onClick={props.onClick}>
            {props.value}
        </div>
    );
};

export default Cells;