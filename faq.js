const arrows = document.querySelectorAll('svg');
const answers = document.querySelectorAll('.answer');
const questionList = document.querySelectorAll('li');
const question = document.querySelectorAll('.question')

for (let i = 0; i < questionList.length; i++) {
    questionList[i].addEventListener('click', function (event) {
        let element = answers[i];
        if (element.style.display === "block") {
            arrows[i].style.transform="rotate(0deg)"
            element.style.display = "none";
            question[i].style.fontWeight = "normal";
            question[i].style.color = 'hsl(240, 6%, 50%)'
        } else {
            element.style.display = "block"
            arrows[i].style.transform="rotate(180deg)"
            question[i].style.fontWeight = "bold";
            question[i].style.color = 'black';
        }
    })
}