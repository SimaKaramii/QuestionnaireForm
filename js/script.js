const questions = [
    {
        id: 1,
        question: "How many days makes a week ? ",
        response: "",

    },    {
        id: 2,
        question: "what is your favorite color? ",
        response: "",

    },    {
        id: 3,
        question: "what is your favorite days? ",
        response: "",

    },
];
var box = document.querySelector(".info-box");
var questionBox = document.querySelector(".question-box");
var questionBoxText = document.querySelector(".questions-text");
var questionBoxAnswer = document.querySelector(".questions-answer");
var previous = document.getElementById("Previous");
var next = document.getElementById("Next");
var Submit = document.getElementById("Submit");
var result = document.getElementById("result");
var nameInput = document.getElementById("name");
var nameForm = document.getElementById("info-user-name");
var reStart = document.getElementById("start-again");
var current = 0;
var last = questions.length;

function hideElements(input){
    input.style.display = 'none';
}

function showElements(input){
    input.style.display = 'block';
}

function control(currentQuestion){
    if(currentQuestion == 0){
        hideElements(previous);
        hideElements(Submit);
        showElements(next);
    }else if(currentQuestion == last-1){
        showElements(previous);
        showElements(Submit);
        hideElements(next);
    }else{
        showElements(previous);
        showElements(next);
        hideElements(Submit);
    }
}

function assignQuestion(currentQuestion){
    control(currentQuestion);
    for (var i = 0; i < questions.length; i++) {
        if(i == currentQuestion){
            questionBoxText.textContent = questions[i].question;
            questionBoxAnswer.value = questions[i].response;
        }
    }
    numberOfQuestion(currentQuestion)
}

function start(){
    if(nameInput.value.replace(/^\s+|\s+$/g, "").length != 0 ){
        hideElements(box);
        showElements(questionBox);
        assignQuestion(0);
        nameForm.textContent = nameInput.value
        numberOfQuestion(0);
    }else{
        nameInput.style.border = "1px solid red";
    }
}

function numberOfQuestion(currentQuestion){
    document.getElementById('current_questions').textContent = currentQuestion + 1;
    document.getElementById('number-of-question').textContent = last;
}

document.getElementById("start").addEventListener("click", function(){
    start();
})

previous.addEventListener("click", function(){
    questions[current].response = questionBoxAnswer.value;
    current -=1;
    assignQuestion(current);
})

next.addEventListener("click", function(){
    questions[current].response = questionBoxAnswer.value;
    current +=1;
    assignQuestion(current);
    // questionBoxAnswer.value;
})

Submit.addEventListener("click", function(){
    for (var i = 0; i < questions.length; i++) {
        var div = document.createElement("div");
        var questionAndAnswer = [questions[i].question + questions[i].response];
        div.innerHTML = (questionAndAnswer);
        result.appendChild(div);
    }
    showElements(result)
    hideElements(questionBox)
    showElements(reStart)
})

box.addEventListener("keydown", function(e){
    if(e.which == 13) {
        e.preventDefault();
        start();
    }
})

reStart.addEventListener("click", function(){
    showElements(box)
    hideElements(result)
})




