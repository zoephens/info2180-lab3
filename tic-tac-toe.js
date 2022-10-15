window.onload = function() {
    //Exercise 1
    let container = document.getElementById("board");
    let box = container.getElementsByTagName("div");
    let arr = [1,2,3,4,5,6,7,8,9];
    let turn = true;
    //let mouseOn = true;
    let statusBox = document.getElementById("status");
    let newGame = document.getElementById("game");
    let btn = newGame.getElementsByClassName("btn");
    let winner = true;

    
    //iterating through list of divs
    for (let i = 0; i < 9; i++) {
        let each = box[i];
        each.classList.add("square");
        
        //Exercise 2
        each.addEventListener("click", function(){
            //(turn === true) ? each.textContent = "X"  :each.textContent = "O";
            if (winner == true){
                if (turn == true) {
                    //Exercise 6
                    if (each.textContent == ""){
                        each.textContent = "X";
                        turn = false;
                        each.classList.add("X");
                    }
                    //Exercise 4
                        if (box[0].innerHTML == "X" && box[1].innerHTML == "X" && box[2].innerHTML == "X" ){
                            statusBox.className = "you-won";
                            statusBox.innerHTML = "Congratulations! X is the Winner!";
                            winner = false;
                        } else if (box[3].innerHTML == "X" && box[4].innerHTML == "X" && box[5].innerHTML == "X" ){
                            statusBox.className = "you-won";
                            statusBox.innerHTML = "Congratulations! X is the Winner!";
                            winner = false;
                        } else if (box[6].innerHTML == "X" && box[7].innerHTML == "X" && box[8].innerHTML == "X" ){
                            statusBox.className = "you-won";
                            statusBox.innerHTML = "Congratulations! X is the Winner!";
                            winner = false;
                        } else if (box[0].innerHTML == "X" && box[3].innerHTML == "X" && box[6].innerHTML == "X" ){
                            statusBox.className = "you-won";
                            statusBox.innerHTML = "Congratulations! X is the Winner!";
                            winner = false;
                        } else if (box[1].innerHTML == "X" && box[4].innerHTML == "X" && box[7].innerHTML == "X" ){
                            statusBox.className = "you-won";
                            statusBox.innerHTML = "Congratulations! X is the Winner!";
                            winner = false;
                        } else if (box[2].innerHTML == "X" && box[5].innerHTML == "X" && box[8].innerHTML == "X" ){
                            statusBox.className = "you-won";
                            statusBox.innerHTML = "Congratulations! X is the Winner!";
                            winner = false;
                        }  else if (box[0].innerHTML == "X" && box[4].innerHTML == "X" && box[8].innerHTML == "X" ){
                            statusBox.className = "you-won";
                            statusBox.innerHTML = "Congratulations! X is the Winner!";
                            winner = false;
                        }  else if (box[2].innerHTML == "X" && box[4].innerHTML == "X" && box[6].innerHTML == "X" ){
                            statusBox.className = "you-won";
                            statusBox.innerHTML = "Congratulations! X is the Winner!";
                            winner = false;
                        }
                } else{
                    //Exercise 6
                    if (each.textContent == ""){
                        each.textContent = "O";
                        turn = true;
                        each.classList.add("O");
                    }

                 //Exercise 4
                 if (winner == true){
                    if (box[0].innerHTML == "O" && box[1].innerHTML == "O" && box[2].innerHTML == "O" ){
                        statusBox.className = "you-won";
                        statusBox.innerHTML = "Congratulations! O is the Winner!";
                        winner = false;
                    } else if (box[3].innerHTML == "O" && box[4].innerHTML == "O" && box[5].innerHTML == "O" ){
                        statusBox.className = "you-won";
                        statusBox.innerHTML = "Congratulations! O is the Winner!";
                        winner = false;
                    } else if (box[6].innerHTML == "O" && box[7].innerHTML == "O" && box[8].innerHTML == "O" ){
                        statusBox.className = "you-won";
                        statusBox.innerHTML = "Congratulations! O is the Winner!";
                        winner = false;
                    } else if (box[0].innerHTML == "O" && box[3].innerHTML == "O" && box[6].innerHTML == "O" ){
                        statusBox.className = "you-won";
                        statusBox.innerHTML = "Congratulations! O is the Winner!";
                        winner = false;
                    } else if (box[1].innerHTML == "O" && box[4].innerHTML == "O" && box[7].innerHTML == "O" ){
                        statusBox.className = "you-won";
                        statusBox.innerHTML = "Congratulations! O is the Winner!";
                        winner = false;
                    } else if (box[2].innerHTML == "O" && box[5].innerHTML == "O" && box[8].innerHTML == "O" ){
                        statusBox.className = "you-won";
                        statusBox.innerHTML = "Congratulations! O is the Winner!";
                        winner = false;
                    }  else if (box[0].innerHTML == "O" && box[4].innerHTML == "O" && box[8].innerHTML == "O" ){
                        statusBox.className = "you-won";
                        statusBox.innerHTML = "Congratulations! O is the Winner!";
                        winner = false;
                    }  else if (box[2].innerHTML == "O" && box[4].innerHTML == "O" && box[6].innerHTML == "O" ){
                        statusBox.className = "you-won";
                        statusBox.innerHTML = "Congratulations! O is the Winner!";
                        winner = false;
                    }
                 } else { winner = false;}
                
            }
            console.log(turn);
        })

        //Exercise 3
        each.addEventListener("mouseover", function(){
                each.classList.add("hover");
        });

        each.addEventListener('mouseleave', function(){
            each.classList.remove("hover");
        });



    }
    //Exercise 5
    btn[0].addEventListener("click", function(){
        window.location.reload(true);
    });




    
  };

