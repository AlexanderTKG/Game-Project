const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector("[data-final-column");
const SELECTION = [
    {
        name: 'Life',
        emoji: '🌱',
        beats: 'Water'
    },
    {
        name: 'Water',
        emoji: '💧',
        beats: 'fire'
    },
    {
        name: 'Fire',
        emoji: '🔥',
        beats: 'Life'
    }
]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => { 
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTION.find(selection => selection.name === selectionName)
        makeSelection(selectionName)
    })
})

function makeSelection(selection) { 
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addResults(computerSelection, computerWinner)
    addResults(selection, yourWinner);
}

function addResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('resultSpell')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)

}

function isWinner(selection, opponentSelection) { 
    return selection.beats === opponentSelection.name
}

function randomSelection() { 
    const randomIndex = Math.floor(Math.random() * SELECTION.length)
    return SELECTION[randomIndex]
}