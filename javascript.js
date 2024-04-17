let turn = 'x';
let tit = document.querySelector('.title');
let arr = [];
let gameEnded = false;
function end(num1, num2, num3) {
    tit.innerHTML = `${arr[num1]} Winner`;
    document.getElementById('item' + num1).style.background = 'rgba(137, 43, 226, 0.596)';
    document.getElementById('item' + num2).style.background = 'rgba(137, 43, 226, 0.596)';
    document.getElementById('item' + num3).style.background = 'rgba(137, 43, 226, 0.596)';
    setInterval(function () { tit.innerHTML += '.' }, 1000);
    setTimeout(function () { window.location.reload() }, 4000);
    gameEnded = true;
}
function winer() {
    for (i = 1; i < 10; i++) {
        arr[i] = document.getElementById('item' + i).innerHTML;
    }
    if (arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != '') {
        end(1, 2, 3);
    } else if (arr[4] == arr[5] && arr[5] == arr[6] && arr[4] != '') {
        end(4, 5, 6);
    } else if (arr[7] == arr[8] && arr[8] == arr[9] && arr[7] != '') {
        end(7, 8, 9);
    } else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != '') {
        end(1, 4, 7);
    } else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != '') {
        end(2, 5, 8);
    } else if (arr[3] == arr[6] && arr[6] == arr[9] && arr[3] != '') {
        end(3, 6, 9);
    } else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[1] != '') {
        end(1, 5, 9);
    } else if (arr[3] == arr[5] && arr[5] == arr[7] && arr[3] != '') {
        end(3, 5, 7);
    } else if (!arr.includes('')) {
        tit.innerHTML = 'Draw! ';
        setInterval(function () { tit.innerHTML += '.' }, 1000);
        setTimeout(function () { window.location.reload() }, 4000);
        gameEnded = true;
    }
}

function game(id) {
    if (gameEnded) return;
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == "") {
        element.innerHTML = 'x';
        tit.innerHTML = 'O';
        turn = 'o';
    } else if (turn === 'o' && element.innerHTML == "") {
        element.innerHTML = 'o';
        tit.innerHTML = 'X';
        turn = 'x';
    }
    winer();
}





