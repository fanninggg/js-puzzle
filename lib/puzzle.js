// TODO: Allow users to switch the tile they click with the empty tile

// Select all tiles
const tiles = document.querySelectorAll('tbody td');
// Iterate on our tiles & listen for a click
tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
  // Check if the tile can move
    if (canMove(tile)) {
      // Swap clicked tile with empty tile
      moveTile(tile)
    }
  })
})

const moveTile = (tile) => {
  // Find our empty tile
  const empty = document.querySelector('.empty')
  // Swap the innerHTML
  const content = tile.innerHTML
  empty.innerHTML = content
  tile.innerHTML = ''
  // Swap the class
  tile.classList.add('empty')
  empty.classList.remove('empty')
}

const canMove = (tile) => {
  // Find the row & column of my clicked tile
  const tileCol = tile.cellIndex
  const tileRow = tile.parentNode.rowIndex
  // Find the row & column of empty tile
  const empty = document.querySelector('.empty')
  const emptyCol = empty.cellIndex
  const emptyRow = empty.parentNode.rowIndex
  // Check if they are within 1 position of each other
  if (
    tileCol === emptyCol && tileRow === emptyRow + 1 ||
    tileCol === emptyCol && tileRow === emptyRow - 1 ||
    tileRow === emptyRow && tileCol === emptyCol + 1 ||
    tileRow === emptyRow && tileCol === emptyCol - 1
    ) {
    return true
  } else {
   return false
  }
}

// ================
//  Testing ⬇️
// ================

document.getElementById('game-test').addEventListener('click', () => {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(e => Number.parseInt(e.innerHTML, 10));
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You won!");
  }
  alert("No you suck")
})
