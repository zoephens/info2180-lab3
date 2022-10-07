window.onload = function() {
    let container = document.getElementById("board");
    let box = container.getElementsByTagName("div");
    for (let i = 0; i <=9; i++) {
        each = box[i];
        each.classList.add("square");
    }
  };
