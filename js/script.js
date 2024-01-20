const questions = [
    {
        id: 1,
        question: "Can you tell me where you live? ",
        response: "",

    },    {
        id: 2,
        question: "Do you work or study? ",
        response: "",

    },    {
        id: 3,
        question: "What do you do in your free time? ",
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
        previous.classList.add("DisableInput")
    }else if(currentQuestion == last-1){
        next.classList.add("DisableInput")
        hideElements(next)
        showElements(Submit)
    }else{
        next.classList.remove("DisableInput")
        previous.classList.remove("DisableInput")
        hideElements(Submit)
        showElements(next)
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
    hideElements(box);
    showElements(questionBox);
    assignQuestion(0);
    nameForm.textContent = nameInput.value
    numberOfQuestion(0);
    hideElements(Submit)
}

function numberOfQuestion(currentQuestion){
    document.getElementById('current_questions').textContent = currentQuestion + 1;
    document.getElementById('number-of-question').textContent = last;
}

document.getElementById("start").addEventListener("click", function(){
    start();
})

previous.addEventListener("click", function(){
    if(!this.classList.contains(("DisableInput"))){
        questions[current].response = questionBoxAnswer.value;
        current -=1;
        assignQuestion(current);
    }
})

next.addEventListener("click", function(){
    if(!this.classList.contains(("DisableInput"))){
        questions[current].response = questionBoxAnswer.value;
        current +=1;
        assignQuestion(current);
    }
})

Submit.addEventListener("click", function(){
    questions[current].response = questionBoxAnswer.value;
    showElements(document.querySelector(".confirm"));
    console.log(questions)
})
document.getElementById("confirmYes").addEventListener("click", function() {
    hideElements(document.querySelector(".confirm"));
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
document.getElementById("confirmNo").addEventListener("click", function() {
    hideElements(document.querySelector(".confirm"));
})


box.addEventListener("keydown", function(e){
    if(e.which == 13) {
        e.preventDefault();
        start();
    }
})

/*
reStart.addEventListener("click", function(){
    showElements(box)
    hideElements(result)
})




*/
