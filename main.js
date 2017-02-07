function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var correct = 0;


if (question1 == "15,200FT") {
correct++;
}
if (question2 == "22:00") {
correct++;
}




document.getElementById("after_submit").style.visibility  = "visible";
document.getElementById("number_correct").innerHTML = "you got " + correct + " correct";
}