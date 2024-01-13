var NameUser = document.getElementById("name");
var EmailUser = document.getElementById("email");
var InfoBox = document.querySelector(".info-box");
var QuestionBox = document.querySelector(".question-box");
var InfoText = document.querySelector(".info-text")
function hideElements(input){
    input.style.display = 'none';
}

function showElements(input){
    input.style.display = 'block';
}
function Start(){
    if(NameUser.value.replace(/^\s+|\s+$/g, "").length != 0 && EmailUser.value.replace(/^\s+|\s+$/g, "").length != 0){
        hideElements(InfoBox);
        showElements(QuestionBox);
        InfoText.innerHTML = "";
    }else{
        InfoText.innerHTML = "Please fill in all information";
    }

}