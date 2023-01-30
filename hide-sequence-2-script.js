const keypad = document.querySelector('.keypad');

const keypad_buttons = document.querySelector('.keypad-btns');
for(let i = 0; i < 27; i++){
  const keypad_btn = document.createElement('div');
  keypad_btn.classList.add('keypad-btn');
  keypad_btn.textContent = i;
 keypad_btn.addEventListener('click', function(){
   const selected = document.querySelector('.selected');
   if(selected){
     if(i ===0){
       selected.textContent = '';
     }
      else {selected.textContent = i;
           }
   }
   keypad.classList.add('close');
   
 }); 
  keypad_buttons.append(keypad_btn);
}
const container = document.querySelector('.main-container');
for (let i = 0; i < 4; i++){
  const indicator = document.createElement('div');
  switch(i){
    case 0:
      indicator.textContent = 'North'
      break;
    case 1:
      indicator.textContent = 'East'
      break;
    case 2:
      indicator.textContent = 'South';
      break;
    case 3:
      indicator.textContent = 'West';
  }
  indicator.classList.add('indicator');
  container.append(indicator);
  const grid = document.createElement('div');
  grid.classList.add('grid-container');
    
  for(let j = 0; j < 14; j++){
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    cell.addEventListener('click',function(){
      let allElements = Array.from(document.querySelectorAll('.grid-item.selected'));
for (let element of allElements) {
  element.classList.remove('selected');
}
      keypad.classList.remove('close');
      cell.classList.add('selected');
    })
    grid.appendChild(cell);
  }
  container.appendChild(grid);
}

// const gridContainer = document.querySelector('.grid-container');

// for (let i = 0; i < 4; i++) {
//   const gridItem = document.createElement('div');
//   gridItem.classList.add('grid-item');
//   gridItem.style.width = `calc(100% / 4)`;
//   gridItem.style.height = '200px';
//   gridItem.style.backgroundColor = 'lightgray';
//   gridItem.style.border = '1px solid black';
//   gridItem.style.boxSizing = 'border-box';
//   gridItem.style.position = 'relative';
  
//   const gridInner = document.createElement('div');
//   gridInner.classList.add('grid-inner');
//   gridInner.style.width = '100%';
//   gridInner.style.height = '100%';

//   for (let j = 0; j < 2; j++) {
//     const gridRow = document.createElement('div');
//     gridRow.classList.add('grid-row');

//     for (let k = 0; k < 7; k++) {
//       const gridCell = document.createElement('div');
//       gridCell.classList.add('grid-cell');
//       gridRow.appendChild(gridCell);
//     }

//     gridInner.appendChild(gridRow);
//   }

//   gridItem.appendChild(gridInner);
//   gridContainer.appendChild(gridItem);
// }
// const gridItems = document.querySelectorAll('.grid-item');
// const keypad = document.querySelector('.keypad');
// const keypadClose = document.querySelector('.keypad-close');
// const keypadInput = document.querySelector('.keypad-input');
// const keypadBtns = document.querySelectorAll('.keypad-btn');

// gridItems.forEach(item => {
//   item.addEventListener('click', () => {
//     keypad.style.display = 'block';
//     item.classList.add('selected');
//   });
// });

// keypadClose.addEventListener('click', () => {
//   keypad.style.display = 'none';
// });

// keypadBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     keypadInput.value += btn.textContent;
//   });
// });

// keypadInput.addEventListener('input', () => {
//   if (keypadInput.value.length === 2) {
//     const selectedItem = document.querySelector('.selected');
//     selectedItem.textContent = keypadInput.value;
//     keypad.style.display = 'none';
//     keypadInput.value = '';
//     selectedItem.classList.remove('selected');
//   }
// });