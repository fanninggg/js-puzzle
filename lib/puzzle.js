// TODO: Allow users to switch the tile they click with the empty tile

// Select all the tiles
const tiles = document.querySelectorAll('td');
// Iterate on my tiles and add an event listener for them
tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    // Check if I can move the tile
    if(canMove(tile)) {
      // Swap the tile I clicked with the empty tile
      moveTile(tile)
    }
  })
})

const canMove = (tile) => {
  // Find the row and column of the tile I clicked
  const tileCol = tile.cellIndex
  const tileRow = tile.parentNode.rowIndex
  // Find the empty tile
  const empty = document.querySelector('.empty')
  // Find the row and column of the empty tile
  const emptyCol = empty.cellIndex
  const emptyRow = empty.parentNode.rowIndex
  // Check if they are next to each other
  if(tileCol === emptyCol && tileRow === emptyRow - 1 ||
  tileCol === emptyCol && tileRow === emptyRow + 1 ||
  tileRow === emptyRow && tileCol === emptyCol - 1 ||
  tileRow === emptyRow && tileCol === emptyCol + 1) {
    return true
  } else {
    return false
  }
}

const moveTile = (tile) => {
  // Find the empty tile
  const empty = document.querySelector('.empty')
  // Swap the innerText
  const content = tile.innerText
  empty.innerText = content
  tile.innerText = ''
  // Swap their classes
  tile.classList.add('empty')
  empty.classList.remove('empty')
}












// ================
//  Testing ⬇️
// ================

document.getElementById('game-test').addEventListener('click', () => {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(e => Number.parseInt(e.innerHTML, 10));
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You won!");
  } else {
    alert("No you suck")
  }
})
