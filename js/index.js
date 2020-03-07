$(document).ready(function () {
    $('.tabs').tabs();
});

$(document).ready(function () {
    $('.sidenav').sidenav();
});

// add event checked try with change event

const question1 = document.getElementsByClassName('q1');
console.log(question1);

for (let i = 0; i < question1.length; i ++) {
    question1[i].addEventListener('change', () => {
        console.log(question1[i].value);
    })
}