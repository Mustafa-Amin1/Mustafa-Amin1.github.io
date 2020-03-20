var Students = Array.from(document.getElementsByClassName('student'));
var randomBtn = document.getElementById('randomBtn')
var reloadBtn = document.getElementById('reloadBtn')
var randomNums = [];

//add events
randomBtn.addEventListener('click', RandomStudent);
reloadBtn.addEventListener('click', reload);

// start random function
function RandomStudent() {
    let randomNum = Math.floor(Math.random() * Students.length);
    let randomArea = document.getElementById('result')

    if (randomBtn.firstElementChild.innerText == "Get A Random Student") {
        if (randomNums.indexOf(randomNum) == -1) {
            console.log(randomNum);
            randomNums.push(randomNum)
            let choosedStudent = Students[randomNum];
            randomArea.firstElementChild.appendChild(choosedStudent);
            if (randomArea.children[0].children.length == 2) {
                randomBtn.firstElementChild.innerText = "Reset"
            }
        } else {
            RandomStudent()
        }
    }
    else if (randomBtn.firstElementChild.innerText == "Reset") {
        randomArea.children[0].children.length = 0;
        for (item of randomArea.children[0].children) {
            item.remove()
        }
        randomBtn.firstElementChild.innerText = "Get A Random Student"
        randomArea.firstElementChild.innerText = ""
    }
}
// End random function

// reload Page function 
function reload() {
    location.reload()
}
