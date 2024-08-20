let boxes = document.querySelectorAll(".box");
let winMsg = document.querySelector(".winning-msg");


let turn0 = true;

const winPattern = [
                [0, 1, 2],
                [0, 3, 6],
                [0, 4, 8],
                [1, 4, 7],
                [2, 5, 8],
                [2, 4, 6],
                [3, 4, 5],
                [6, 7, 8],
]
const disBox = () => {
    for(let box of boxes) {
      box.disabled = true;
    }    
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let win1 = boxes[pattern[0]].innerText;
        let win2 = boxes[pattern[1]].innerText;
        let win3 = boxes[pattern[2]].innerText;

    if (win1 != "" && win2 != "" && win3 != "") {
        if (win1 === win2 && win1 === win3) {
            console.log("winner", win1);
            showWinner(win1);
            disBox();   
        }
    }
    }
    
}
const showWinner = (winner) => {
    winMsg.innerText = `Winner is ${winner}`;
}
let count = 0;
let showR = winPattern[1][1].innerText;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            box.disabled = true;
            box.style.color = "#000";
            turn0 = false;
        }
        else{
            box.innerText = "x" ;
            box.disabled = true;
            box.style.color = "red";
            turn0 = true;
        }

        checkWinner(); 
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            winMsg.innerText = "Its a Draw";
        }
    })
    
    
});
