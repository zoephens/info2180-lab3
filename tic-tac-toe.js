window.onload = function() {
    //Exercise 1
    let container = document.getElementById("board");
    let box = container.getElementsByTagName("div");
    let arr = [1,2,3,4,5,6,7,8,9];
    let turn = true;
    let mouseOn = true;

    
    //iterating through list of divs
    for (let i = 0; i < 9; i++) {
        let each = box[i];
        each.classList.add("square");
        
        //Exercise 2

        each.addEventListener("click", function(){
            //(turn === true) ? each.textContent = "X"  :each.textContent = "O";
            if (turn == true) {
                each.textContent = "X";
                turn = false;
                each.classList.add("X");
            }
            else{
                each.textContent = "O";
                turn = true;
                each.classList.add("O");
            }
        })
        each.addEventListener("mouseover", function(){
                each.classList.add("hover");
        });

        each.addEventListener('mouseleave', function(){
            each.classList.remove("hover");
        })
    }

    
  };

