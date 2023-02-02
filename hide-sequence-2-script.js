/* todo: 
  for example, North wall left half, row 1, 2nd number would be A2
  North wall right half row 2 1st number would be D1
  A C
  B D
  Follow roy g. biv, colors for background of cells. 
  1-5 Red, 6-10 Orange, 11-15 Yellow, 16-20 Green, 21-26 Blue
  Have the shade darken as the numbers get higher in their group
  Begin Order up button, after clicking on a number already set
  darken all previous numbers and highlight the next highest number 
  with its code (E3) listed

  Actually change the ABCD stuff to say on the screen based on next number
  EAST 2 TOP for 2nd from left on top of east wall.
  Show Current and Next. When Clicking on current number increases by 1. 
  If not found will say 'Awaiting Number'

  Make the keypad the 1-5,6-10,11-15 colors too

*/
const keypad = document.querySelector(".keypad");
const container = document.querySelector(".main-container");
const keypad_buttons = document.querySelector(".keypad-btns");
let go_mode = false;
for (let i = 0; i <= 28; i++) {
  const keypad_btn = document.createElement("div");
  // const height_in_range = i % 5 ? "." + (100/5) * (i % 5) : 1;
  if(i<6){
    keypad_btn.style.backgroundColor = "rgba(255,0,0,.9)";
  } else if (i < 11){
    keypad_btn.style.backgroundColor = "rgba(0,255,0,.9)";
  }
  else if (i < 16){
    keypad_btn.style.backgroundColor = "rgba(50,150,255,.9)";
  } else if (i < 21){
    keypad_btn.style.backgroundColor = "rgba(0,255,255,.9)";
  } else if (i < 27){
    keypad_btn.style.backgroundColor = "rgba(255,255,0,.9)";
  }
  keypad_btn.classList.add("keypad-btn");
  if (i == 0) {
    keypad_btn.textContent = "X";
  } else if(i == 27){
    keypad_btn.textContent = "GO";
    keypad_btn.classList.add('start-btn');
  } else if(i == 28){
    keypad_btn.textContent = "RESET";
    keypad_btn.classList.add('reset-btn');
  }
  else {
    keypad_btn.textContent = i;
  }
  keypad_btn.addEventListener("click", function () {
    const selected = document.querySelector(".selected");
    if (selected) {
      if (i === 0) {
        selected.textContent = "";
        selected.classList.add("empty");
      } else if (i == 27) {
        container.classList.add("go-mode");
        go_mode = true;
      } else if(i == 28){
        location.reload();
      }
      else {
        selected.textContent = i;
        selected.setAttribute("index",i);
        selected.classList.remove("empty");
        100/5;
        const height_in_range = i % 5 ? "." + (100/5) * (i % 5) : 1;
        selected.classList.add('opacity-'+height_in_range);
        if(i<6){
          selected.classList.add('one-to-five');
          selected.style.backgroundColor = "rgba(255,0,0,"+height_in_range+")";
        } else if (i < 11){
          selected.classList.add('six-to-ten');
          selected.style.backgroundColor = "rgba(0,255,0,"+height_in_range+")";
        }
        else if (i < 16){
          selected.classList.add('eleven-to-fifteen');
          selected.style.backgroundColor = "rgba(50,150,255,"+height_in_range+")";
        } else if (i < 21){
          selected.classList.add('sixteen-to-twenty');
          selected.style.backgroundColor = "rgba(0,255,255,"+height_in_range+")";
        } else if (i < 27){
          selected.classList.add('twenty-one-to-twenty-six');
          selected.style.backgroundColor = "rgba(255,255,0,"+height_in_range+")";
        }
      }
    }
    keypad_btn.classList.add("used");
    keypad.classList.add("close");
  });
  keypad_buttons.append(keypad_btn);
}
for (let i = 0; i < 4; i++) {
  const indicator = document.createElement("div");
  switch (i) {
    case 0:
      indicator.textContent = "North ⬆";
      break;
    case 1:
      indicator.textContent = "East ⬅";
      break;
    case 2:
      indicator.textContent = "South ⬇";
      break;
    case 3:
      indicator.textContent = "West ➡";
  }
  indicator.classList.add("indicator");
  container.append(indicator);
  const grid = document.createElement("div");
  grid.classList.add("grid-container");

  for (let j = 0; j < 14; j++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    if(j == 3){
      cell.classList.add("eye");
    } else if(j==10){
      cell.classList.add("eye-bottom");
    } else {
      cell.classList.add("empty");
      cell.addEventListener("click", function () {
        if(!go_mode){
          let allElements = Array.from(
            document.querySelectorAll(".grid-item.selected")
          );
          for (let element of allElements) {
            element.classList.remove("selected");
          }
          keypad.classList.remove("close");
          cell.classList.add("selected");
        } else {
          const index =parseInt(cell.getAttribute("index"));
          let allElements = Array.from(
            document.querySelectorAll(".grid-item")
          );
          cell.classList.add("used");
          cell.classList.remove("next-up");
          let lowest_next = 99;
          let next_cell;
          for (let element of allElements) {
            const element_index = parseInt(element.getAttribute("index"));
            element.classList.remove("next-up");
            if(element_index > 0) {
              if(element_index < index){
                element.classList.add("used");
              } else if(element_index < lowest_next && element_index != index) {
                lowest_next = element_index;
                next_cell = element;
              }
            }
          }
          if(next_cell){
            next_cell.classList.add('next-up');
          }
        }
      });
    }

    grid.appendChild(cell);
  }
  container.appendChild(grid);
}

