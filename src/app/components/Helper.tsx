
const Helper = (cells: (string | null)[]) => {
    const lines = [
        // rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        // columns

    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] == cells[b] && cells[b] == cells[c]) {
            return cells[a];
        }

    }
    return null;
};

export default Helper;