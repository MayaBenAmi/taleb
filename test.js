let multipleChoice = [];
let chosenOptions = [];

const listContainer = document.getElementById('list-container');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const answers = [
    {
        'chosen': '',
        'correct': '3'
    },
    {
        'chosen': '',
        'correct': '3'
    }
];

const AnsScore = 100 / 5;
const correctOptions = ['3','4'];

let startItem;
let selectedItems = [];
let correctLines = [['ans1a', 'ans4b'], ['ans2a', 'ans6b'], ['ans3a', 'ans5b']];
const finishBtn = document.getElementById("button");
let dragAns = [
    {opt1: 'daily-sum'},
    {opt2: 'weekly-sum'},
    {opt3: 'weekly-sum'},
    {opt4: 'monthly-sum'}
];

window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.go(1);
};


window.addEventListener('load', () => {
    
    finishBtn.addEventListener("click", finishTest);
    multipleChoice = document.getElementsByClassName('multiple-container');
    for (let i = 0; i < multipleChoice.length; i++) {
        multipleChoice[i].addEventListener('click', selectChoice);
    }
    listContainer.addEventListener('click', selectItem);
    // drawLine(0,0,200,200);
    resizeCanvas();

    $('.drag-options').sortable({
        group:'my-question'
    });
    $('#daily-sum').sortable({
        group:'my-question'
    });
    $('#weekly-sum').sortable({
        group:'my-question'
    });
    $('#monthly-sum').sortable({
        group:'my-question'
    });
    let answerArray = document.getElementsByClassName('answer');
    for (let i = 0; i< answerArray.length; i++) {
        answerArray[i].addEventListener('click', selectAns);
    }
});





selectChoice = (event) => {
    let chosenNum = event.currentTarget.id.charAt(8);
    if (chosenOptions.includes(chosenNum)) {
        document.getElementById(`check${chosenNum}`).style.display = 'none';
        let newArr = [];
        for (let i = 0; i < chosenOptions.length; i++) {
            if (chosenOptions[i] !== chosenNum) {
                newArr.push(chosenOptions[i]);
            }
        }
        chosenOptions = newArr;
    } else {
        if (chosenOptions.length === 2) {
            alert("סמן שתי אפשרויות בלבד");
        } else {
            document.getElementById(`check${chosenNum}`).style.display = 'block';
            chosenOptions.push(chosenNum);
        }

    }
}


function drawLine(x1, y1, x2, y2) {
    // ctx.beginPath();
    // ctx.moveTo(x1, y1);
    // ctx.lineTo(x2, y2);
    // ctx.lineWidth = 7;
    // ctx.strokeStyle = 'rgb(104, 4, 4)';
    // ctx.stroke();


    const rect = canvas.getBoundingClientRect();

    ctx.beginPath();
    ctx.moveTo(x1 - rect.left, y1 - rect.top);
    ctx.lineTo(x2 - rect.left, y2 - rect.top);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgb(39, 76, 119)';
    ctx.stroke();
}


// Function to draw a line between two elements
drawAllLines = () => {

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing

    for (let i = 0; i < selectedItems.length; i++) {
        const item1 = document.getElementById(selectedItems[i][0]);
        item1.classList.add('selected');
        const item2 = document.getElementById(selectedItems[i][1]);
        item2.classList.add('selected');
        if (!item1 || !item2) continue; // Skip drawing if elements are not found
        const rect1 = item1.getBoundingClientRect();
        const rect2 = item2.getBoundingClientRect();
        const x1 = rect1.left + rect1.width / 2;
        const y1 = rect1.top + rect1.height / 2;
        const x2 = rect2.left + rect2.width / 2;
        const y2 = rect2.top + rect2.height / 2;

        drawLine(x1, y1, x2, y2);
    }
}

selectItem = (event) => {
    event.preventDefault();
    if (event.target.tagName === 'SPAN') {
        if (startItem === undefined) {
            startItem = event.target.id;
            deleteLine(event.target.id);
            event.target.classList.add('selected');
            // window.addEventListener('mousemove', startDrawing); // needed only on computer, not mobile
            drawAllLines();
        } else {
            if (event.target.id.charAt(4) === startItem.charAt(4)) {
                if (event.target.id.charAt(3) === startItem.charAt(3)) {
                    document.getElementById(startItem).classList.remove('selected');
                    startItem = undefined;
                    // window.removeEventListener('mousemove', startDrawing); // needed only on computer, not mobile
                    drawAllLines();
                } else {
                    document.getElementById(startItem).classList.remove('selected');
                    startItem = event.target.id;
                    deleteLine(event.target.id);
                    event.target.classList.add('selected');
                    // window.addEventListener('mousemove', startDrawing);
                    drawAllLines();
                }
                //if item is in the second list
            } else {
                let selectedTuple = [startItem, event.target.id];
                deleteLine(event.target.id);
                selectedItems.push(selectedTuple);
                document.getElementById(selectedTuple[1]).classList.add('selected');
                startItem = undefined;
                // window.removeEventListener('mousemove', startDrawing);
                drawAllLines();
            }
        }
    } else {
        if (startItem !== undefined) {
            document.getElementById(startItem).classList.remove('selected');
            startItem = undefined;
            // window.removeEventListener('mousemove', startDrawing); 
            drawAllLines();
        }
    }
}

startDrawing = (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawAllLines(); // Redraw all existing lines

    const rect1 = document.getElementById(startItem).getBoundingClientRect();
    const x1 = rect1.left + rect1.width / 2;
    const y1 = rect1.top + rect1.height / 2;
    const x2 = event.clientX;
    const y2 = event.clientY;

    drawLine(x1, y1, x2, y2);
}

function resizeCanvas() {
    const container = document.getElementById('covered-container');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
}

deleteLine = (item) => {
    let tempList = [];
    for (let i = 0; i < selectedItems.length; i++) {
        if (selectedItems[i][0] !== item && selectedItems[i][1] !== item) {
            tempList.push(selectedItems[i]);
        } else {
            document.getElementById(selectedItems[i][0]).classList.remove('selected');
            document.getElementById(selectedItems[i][1]).classList.remove('selected');
        }
    }
    selectedItems = tempList;
}


selectAns = (event) => {
    let questionNum = Number(event.target.id.charAt(6));
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer${questionNum}${i}`).className = 'answer';
    }
    event.target.classList.add('chosen-answer');
    answers[questionNum].chosen = event.target.id.charAt(7);
}


finishTest = (event) => {
    if (selectedItems.length === 3 && chosenOptions.length === 2 && document.getElementById('drag-options').children.length === 0) {
        let counter = 0;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].chosen === '' ) {
                alert('תענה על כל השאלות לפני ההגשה:)');
                break;
            } else {
                counter++;
            }
        }
        if (counter === 2) {
            calculateScore();
        }
    } else {
        alert('תענה על כל השאלות לפני ההגשה:)');
    }
}

calculateScore = () => {
    let score = 0;
    //adding the score of the checks question
    score += compareChecks();

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].chosen === answers[i].correct) {
            score += AnsScore;
        }
    }
    for (let i = 0; i < correctLines.length; i++) {
        for (let j = 0; j < selectedItems.length; j++) {
            if (compareLines(selectedItems[j], correctLines[i])) {
                score += AnsScore* (1/3);
                break;
            }
        }
    }
    score+= compareDrag();
    sessionStorage.setItem('grade', Math.round(score));
    let myTimer = setTimeout(()=> {window.location.href = 'final.html';}, 350);
    
}

let compareChecks = () =>{
    let score = 0;
    if (correctOptions[0] === chosenOptions[0] || correctOptions[0] === chosenOptions[1]) {
        score += 0.5* AnsScore;
    }
    if (correctOptions[1] === chosenOptions[0] || correctOptions[1] === chosenOptions[1]) {
        score += 0.5* AnsScore;
    }
    return score;
}


let compareLines = (userAns, correctAns) => {
    if (userAns[0] === correctAns[0] && userAns[1] === correctAns [1]) {
        return true;
    } else if (userAns[1] === correctAns[0] && userAns[0] === correctAns [1]) {
        return true;
    }
    return false;
}

let compareDrag = () => {
    let counter = 0;
    for (let i=1; i<5; i++) {
        if (dragAns[i-1][`opt${i}`] === document.getElementById(`opt${i}`).parentElement.id) {
            counter ++; 
        }
    }
    let sum = (counter/4)*AnsScore;
    return sum;
}

