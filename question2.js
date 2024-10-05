const wordSearchGrid = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['M', 'U', 'S', 'I', 'C', 'L', 'Z', 'X', 'C', 'V'],
    ['R', 'O', 'C', 'K', 'L', 'N', 'M', 'A', 'S', 'O'],
    ['B', 'N', 'J', 'K', 'Q', 'U', 'E', 'E', 'N', 'L'],
    ['A', 'S', 'F', 'G', 'H', 'W', 'E', 'R', 'T', 'Y'],
    ['I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J'],
    ['Z', 'X', 'C', 'V', 'B', 'G', 'M', 'A', 'S', 'S'],
    ['L', 'M', 'Y', 'W', 'N', 'R', 'T', 'U', 'I', 'W'],
    ['S', 'D', 'F', 'O', 'H', 'J', 'K', 'L', 'Z', 'E'],
    ['C', 'V', 'S', 'N', 'U', 'Q', 'U', 'E', 'A', 'N']
];

const wordsToFind = ['QUEEN', 'ROCK', 'MUSIC', 'SONG', 'YOU', 'NEWS' ];

const wordSearchElement = document.getElementById('word-search');

function createWordSearch() {
    wordSearchGrid.forEach(row => {
        row.forEach(letter => {
            const cell = document.createElement('div');
            cell.textContent = letter;
            wordSearchElement.appendChild(cell);
            cell.addEventListener('click', () => {
                cell.classList.toggle('selected');
            });
        });
    });
}

createWordSearch();
