const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const fifth = document.getElementById('fifth')
const sixth = document.getElementById('sixth')
const seventh = document.getElementById('seventh')
const eighth = document.getElementById('eighth')
const ninth = document.getElementById('ninth')
const tenth = document.getElementById('tenth')
const eleventh = document.getElementById('eleventh')
const twelveth = document.getElementById('twelveth')
const thirteenth = document.getElementById('thirteenth')
const fourteenth = document.getElementById('fourteenth')
const fifteenth = document.getElementById('fifteenth')
const sixteenth = document.getElementById('sixteenth')
const score = document.getElementById('score');
const playAgain = document.getElementById('playAgain')
const gameOver = document.getElementById('gameover')


let places = [[first, second, third, fourth],
[fifth, sixth, seventh, eighth],
[ninth, tenth, eleventh, twelveth],
[thirteenth, fourteenth, fifteenth, sixteenth]]



isEmpty = function (row, column) {
    if (places[row][column].innerText === "") {
        return true
    }
    return false;
}


fillRandom = function () {
    let row = Math.floor(Math.random() * 4);
    let column = Math.floor(Math.random() * 4);
    let isAnyEmpty = false
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (isEmpty(i, j)) {
                isAnyEmpty = true

            }
        }
    }

    if (isAnyEmpty) {
        if (isEmpty(row, column)) {
            let randomNum = Math.floor(Math.random() * 10);
            if (randomNum > 8) {
                places[row][column].innerText = 4;
            } else {
                places[row][column].innerText = 2;
            }
        }
        else {
            fillRandom()
        }
    }
}
fillRandom()
fillRandom();

document.addEventListener('swiped-left', function(e) {
    leftPressed()
  });
  document.addEventListener('swiped-right', function(e) {
    rightPressed()
});
  document.addEventListener('swiped-up', function(e) {
    upPressed()
  });
  
  document.addEventListener('swiped-down', function(e) {
    downPressed()
  });
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowLeft":
            leftPressed()
            break;
        case "ArrowRight":
            rightPressed()
            break;
        case "ArrowUp":
            upPressed();
            break;
        case "ArrowDown":
            downPressed();
            break;
    }
    switch (event.key) {
        case "a":
            leftPressed()
            break;
        case "d":
            rightPressed()
            break;
        case "w":
            upPressed();
            break;
        case "s":
            downPressed();
            break;
    }
});


// This one works properly --> Is tested
moveLeft = function () {
    let moved = false
    for (let row = 0; row < 4; row++) {
        for (let column = 0; column < 4; column++) {
            if (column === 1 && !isEmpty(row, 1)) {
                if (isEmpty(row, 0)) {
                    places[row][0].innerText = parseInt(places[row][1].innerText)
                    places[row][1].innerText = ""
                    moved = true

                } else if (places[row][0].innerText === places[row][1].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[row][0].innerText) * 2
                    places[row][0].innerText = parseInt(places[row][0].innerText) * 2
                    places[row][1].innerText = ""
                    moved = true

                }
            } if (column === 2 && !isEmpty(row, 2)) {
                if (isEmpty(row, 1)) {
                    if (isEmpty(row, 0)) {
                        places[row][0].innerText = parseInt(places[row][2].innerText)
                        places[row][2].innerText = "";
                        moved = true

                    } else if (places[row][0].innerText === places[row][2].innerText) {
                        score.innerText = parseInt(score.innerText) + parseInt(places[row][0].innerText) * 2
                        places[row][0].innerText = parseInt(places[row][0].innerText) * 2
                        places[row][2].innerText = "";
                        moved = true

                    }
                    else {
                        places[row][1].innerText = parseInt(places[row][2].innerText)
                        places[row][2].innerText = ""
                        moved = true

                    }
                }
                else if (places[row][1].innerText === places[row][2].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[row][1].innerText) * 2
                    places[row][1].innerText = parseInt(places[row][1].innerText) * 2
                    places[row][2].innerText = "";
                    moved = true

                }

            } if (column === 3 && !isEmpty(row, 3)) {
                if (isEmpty(row, 2)) {
                    if (isEmpty(row, 1)) {
                        if (isEmpty(row, 0)) {
                            places[row][0].innerText = parseInt(places[row][3].innerText)
                            places[row][3].innerText = "";
                            moved = true

                        } else if (places[row][0].innerText === places[row][3].innerText) {
                            score.innerText = parseInt(score.innerText) + parseInt(places[row][0].innerText) * 2
                            places[row][0].innerText = parseInt(places[row][0].innerText) * 2
                            places[row][3].innerText = "";
                            moved = true

                        } else {
                            places[row][1].innerText = parseInt(places[row][3].innerText)
                            places[row][3].innerText = ""
                            moved = true

                        }
                    } else if (places[row][1].innerText === places[row][3].innerText) {
                        score.innerText = parseInt(score.innerText) + parseInt(places[row][1].innerText) * 2
                        places[row][1].innerText = parseInt(places[row][1].innerText) * 2
                        places[row][3].innerText = "";
                        moved = true

                    }
                    else {
                        places[row][2].innerText = parseInt(places[row][3].innerText)
                        places[row][3].innerText = ""
                        moved = true

                    }
                } else if (places[row][2].innerText === places[row][3].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[row][2].innerText) * 2
                    places[row][2].innerText = parseInt(places[row][2].innerText) * 2
                    places[row][3].innerText = "";
                    moved = true

                }
            }
        }
    }
    return moved
}
// This one works properly --> Is tested
moveRight = function () {
    let moved = false
    for (let row = 3; row >= 0; row--) {
        for (let column = 3; column >= 0; column--) {
            if (column === 2 && !isEmpty(row, 2)) {
                if (isEmpty(row, 3)) {
                    places[row][3].innerText = parseInt(places[row][2].innerText)
                    places[row][2].innerText = ""
                    moved = true

                } else if (places[row][3].innerText === places[row][2].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[row][3].innerText) * 2
                    places[row][3].innerText = parseInt(places[row][3].innerText) * 2
                    places[row][2].innerText = ""
                    moved = true

                }

            } if (column === 1 && !isEmpty(row, 1)) {
                if (isEmpty(row, 2)) {
                    if (isEmpty(row, 3)) {
                        places[row][3].innerText = parseInt(places[row][1].innerText)
                        places[row][1].innerText = "";
                        moved = true

                    } else if (places[row][3].innerText === places[row][1].innerText) {
                        score.innerText = parseInt(score.innerText) + parseInt(places[row][3].innerText) * 2
                        places[row][3].innerText = parseInt(places[row][3].innerText) * 2
                        places[row][1].innerText = "";
                        moved = true

                    }
                    else {
                        places[row][2].innerText = parseInt(places[row][1].innerText)
                        places[row][1].innerText = ""
                        moved = true

                    }
                }
                else if (places[row][2].innerText === places[row][1].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[row][2].innerText) * 2
                    places[row][2].innerText = parseInt(places[row][2].innerText) * 2
                    places[row][1].innerText = "";
                    moved = true

                }

            } if (column === 0 && !isEmpty(row, 0)) {
                if (isEmpty(row, 1)) {
                    if (isEmpty(row, 2)) {
                        if (isEmpty(row, 3)) {
                            places[row][3].innerText = parseInt(places[row][0].innerText)
                            places[row][0].innerText = "";
                            moved = true

                        } else if (places[row][3].innerText === places[row][0].innerText) {
                            score.innerText = parseInt(score.innerText) + parseInt(places[row][3].innerText) * 2
                            places[row][3].innerText = parseInt(places[row][3].innerText) * 2
                            places[row][0].innerText = "";
                            moved = true

                        } else {
                            places[row][2].innerText = parseInt(places[row][0].innerText)
                            places[row][0].innerText = ""
                            moved = true

                        }
                    } else if (places[row][2].innerText === places[row][0].innerText) {
                        score.innerText = parseInt(score.innerText) + parseInt(places[row][2].innerText) * 2
                        places[row][2].innerText = parseInt(places[row][2].innerText) * 2
                        places[row][0].innerText = "";
                        moved = true

                    }
                    else {
                        places[row][1].innerText = parseInt(places[row][0].innerText)
                        places[row][0].innerText = ""
                        moved = true

                    }
                } else if (places[row][1].innerText === places[row][0].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[row][1].innerText) * 2
                    places[row][1].innerText = parseInt(places[row][1].innerText) * 2
                    places[row][0].innerText = "";
                    moved = true

                }

            }
        }
    }
    return moved
}
// This one should work properly --> Is tested
moveUp = function () {
    let moved = false
    for (let row = 0; row < 4; row++) {
        for (let column = 0; column < 4; column++) {
            if (row === 1 && !isEmpty(1, column)) {
                if (isEmpty(0, column)) {
                    places[0][column].innerText = parseInt(places[1][column].innerText)
                    places[1][column].innerText = ""
                    moved = true

                } else if (places[0][column].innerText === places[1][column].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[0][column].innerText) * 2
                    places[0][column].innerText = parseInt(places[0][column].innerText) * 2
                    places[1][column].innerText = ""
                    moved = true

                }
            } if (row === 2 && !isEmpty(2, column)) {
                if (isEmpty(1, column)) {
                    if (isEmpty(0, column)) {
                        places[0][column].innerText = parseInt(places[2][column].innerText)
                        places[2][column].innerText = "";
                        moved = true

                    } else if (places[0][column].innerText === places[2][column].innerText) {
                        score.innerText = parseInt(score.innerText) + parseInt(places[0][column].innerText) * 2
                        places[0][column].innerText = parseInt(places[0][column].innerText) * 2
                        places[2][column].innerText = "";
                        moved = true

                    }
                    else {
                        places[1][column].innerText = parseInt(places[2][column].innerText)
                        places[2][column].innerText = ""
                        moved = true

                    }

                }
                else if (places[1][column].innerText === places[2][column].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[1][column].innerText) * 2
                    places[1][column].innerText = parseInt(places[1][column].innerText) * 2
                    places[2][column].innerText = "";
                    moved = true

                }

            } if (row === 3 && !isEmpty(3, column)) {
                if (isEmpty(2, column)) {
                    if (isEmpty(1, column)) {
                        if (isEmpty(0, column)) {
                            places[0][column].innerText = parseInt(places[3][column].innerText)
                            places[3][column].innerText = "";
                            moved = true

                        } else if (places[0][column].innerText === places[3][column].innerText) {
                            score.innerText = parseInt(score.innerText) + parseInt(places[0][column].innerText) * 2
                            places[0][column].innerText = parseInt(places[0][column].innerText) * 2
                            places[3][column].innerText = "";
                            moved = true

                        } else {
                            places[1][column].innerText = parseInt(places[3][column].innerText)
                            places[3][column].innerText = ""
                            moved = true

                        }
                    } else if (places[1][column].innerText === places[3][column].innerText) {
                        score.innerText = parseInt(score.innerText) + parseInt(places[1][column].innerText) * 2
                        places[1][column].innerText = parseInt(places[1][column].innerText) * 2
                        places[3][column].innerText = "";
                        moved = true

                    }
                    else {
                        places[2][column].innerText = parseInt(places[3][column].innerText)
                        places[3][column].innerText = ""
                        moved = true

                    }
                } else if (places[2][column].innerText === places[3][column].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[2][column].innerText) * 2
                    places[2][column].innerText = parseInt(places[2][column].innerText) * 2
                    places[3][column].innerText = "";
                    moved = true

                }
            }
        }
    }
    return moved
}

// This one should work properly --> Is tested
moveDown = function () {
    let moved = false
    for (let row = 3; row >= 0; row--) {
        for (let column = 3; column >= 0; column--) {
            if (row === 2 && !isEmpty(2, column)) {
                if (isEmpty(3, column)) {
                    places[3][column].innerText = parseInt(places[2][column].innerText)
                    places[2][column].innerText = ""
                    moved = true
                } else if (places[3][column].innerText === places[2][column].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[3][column].innerText) * 2
                    places[3][column].innerText = parseInt(places[3][column].innerText) * 2
                    places[2][column].innerText = ""
                    moved = true
                }
            } if (row === 1 && !isEmpty(1, column)) {
                if (isEmpty(2, column)) {
                    if (isEmpty(3, column)) {
                        places[3][column].innerText = parseInt(places[1][column].innerText)
                        places[1][column].innerText = "";
                        moved = true

                    } else if (places[3][column].innerText === places[1][column].innerText) {
                        score.innerText = parseInt(score.innerText) + parseInt(places[3][column].innerText) * 2
                        places[3][column].innerText = parseInt(places[3][column].innerText) * 2
                        places[1][column].innerText = "";
                        moved = true

                    }
                    else {
                        places[2][column].innerText = parseInt(places[1][column].innerText)
                        places[1][column].innerText = ""
                        moved = true

                    }
                }
                else if (places[2][column].innerText === places[1][column].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[2][column].innerText) * 2
                    places[2][column].innerText = parseInt(places[2][column].innerText) * 2
                    places[1][column].innerText = "";
                    moved = true

                }

            } if (row === 0 && !isEmpty(0, column)) {
                if (isEmpty(1, column)) {
                    if (isEmpty(2, column)) {
                        if (isEmpty(3, column)) {
                            places[3][column].innerText = parseInt(places[0][column].innerText)
                            places[0][column].innerText = "";
                            moved = true

                        } else if (places[3][column].innerText === places[0][column].innerText) {
                            score.innerText = parseInt(score.innerText) + parseInt(places[3][column].innerText) * 2
                            places[3][column].innerText = parseInt(places[3][column].innerText) * 2
                            places[0][column].innerText = "";
                            moved = true

                        } else {
                            places[2][column].innerText = parseInt(places[0][column].innerText)
                            places[0][column].innerText = ""
                            moved = true

                        }
                    } else if (places[2][column].innerText === places[0][column].innerText) {
                        score.innerText = parseInt(score.innerText) + parseInt(places[2][column].innerText) * 2
                        places[2][column].innerText = parseInt(places[2][column].innerText) * 2
                        places[0][column].innerText = "";
                        moved = true

                    }
                    else {
                        places[1][column].innerText = parseInt(places[0][column].innerText)
                        places[0][column].innerText = ""
                        moved = true

                    }
                } else if (places[1][column].innerText === places[0][column].innerText) {
                    score.innerText = parseInt(score.innerText) + parseInt(places[1][column].innerText) * 2
                    places[1][column].innerText = parseInt(places[1][column].innerText) * 2
                    places[0][column].innerText = "";
                    moved = true

                }
            }
        }
    }
    return moved
}

isOver = function () {
    console.log('checked')
    if (!moveDown && !moveUp && !moveRight && !moveLeft) {
        gameOver.style.display = 'visible';
        console.log('over')
        alert('game over')

    }
}

leftPressed = function () {
    isOver()
    moveLeft();
    fillRandom()
    fillColor()

}

rightPressed = function () {
    isOver()
    moveRight()
    fillRandom()
    fillColor()
}

upPressed = function () {
    isOver()

    moveUp();
    fillRandom()
    fillColor()
}

downPressed = function () {
    isOver()
    moveDown();
    fillRandom()
    fillColor()
}
fillColor = function () {
    for (let row = 0; row < 4; row++) {
        for (let column = 0; column < 4; column++) {
            let pos = places[row][column]
            switch (pos.innerText) {
                case '2':
                    pos.style.backgroundColor = 'rgb(216, 225, 235)'
                    break;
                case '4':
                    pos.style.backgroundColor = 'rgb(204, 227, 226)'
                    break;
                case '8':
                    pos.style.backgroundColor = 'rgb(172, 189, 184)'
                    break;
                case '16':
                    pos.style.backgroundColor = 'rgb(94, 110, 98)'
                    break;
                case '32':
                    pos.style.backgroundColor = 'rgb(136, 184, 68)'
                    break;
                case '64':
                    pos.style.backgroundColor = 'rgb(191, 156, 42)'
                    break;
                case '128':
                    pos.style.backgroundColor = 'rgb(191, 119, 42)'
                    break;
                case '256':
                    pos.style.backgroundColor = 'rgb(191, 99, 42)'
                    break;
                case '512':
                    pos.style.backgroundColor = 'rgb(191, 67, 42)'
                    break;
                case '1024':
                    pos.style.backgroundColor = 'rgb(191, 42, 42)'
                    break;
                case '2048':
                    pos.style.backgroundColor = 'rgb(84, 8, 8)'
                    break;
                default:
                    pos.style.backgroundColor = 'rgb(120, 121, 116)';

            }
        }
    }
}

fillColor();

pA = () => {
    window.location.reload(true)
}

playAgain.addEventListener('click', pA)
