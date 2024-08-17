let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msgcontainer");
let newgame = document.querySelector("#newgame");
let msg = document.querySelector("#msg");
let turnO = true; //playerX , playerO
const winpatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [3, 5, 8], [0, 4, 8], [2, 4, 6]];

const resetGame = () => {
    turnO = true;
    enablebtn();
    msgcontainer.classList.add("hide");
}
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO === true) {
            box.innerText = "0";
            box.style.color = "red"
            turnO = false;

        }
        else {
            box.innerText = "x";
            box.style.color = "black"
            turnO = true;

        }
        count++;
        box.disabled = true;
        checkWinner()
    });

});

function disablebtn() {
    for (box of boxes) {
        box.disabled = true;
    }
}

function enablebtn() {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `congratulations,Winner is player:- ${winner}`;
    msgcontainer.classList.remove("hide");
}
const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val && pos1val == pos3val) {
                disablebtn()
                showWinner(pos1val);

            }
            else if (count === 9) {
                msg.innerText = "match is draw";
                msgcontainer.classList.remove("hide");
            }
        }

    }
}
reset.addEventListener("click", resetGame)
newgame.addEventListener("click", resetGame)
