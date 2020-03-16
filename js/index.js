$(document).ready(function () {
    $('.tabs').tabs();
});

$(document).ready(function () {
    $('.sidenav').sidenav();
});

//hacer un objeto que guarde toda la informaci{on del usuario para pintarla al final del quiz}

const userAnswers = {
    'q1': '',
    'q2': [],
    'q3': '',
    'q4': ''
};

const get1stQ = () => {
    const question1 = document.getElementsByClassName('q1');
    for (let i = 0; i < question1.length; i++) {
        if (question1[i].checked == true) {
            console.log('clicking 1 btn');
            userAnswers.q1 = question1[i].value;
        }
    };
    if (userAnswers.q1 == '') {
        alert('You need to check an option to pass to the next question.');
    } else {
        document.getElementById('question1').classList.add('hide');
        document.getElementById('question2').classList.remove('hide');
    };
}

const get2ndQ = () => {
    const question2 = document.getElementsByClassName('q2');
    for (let i = 0; i < question2.length; i++) {
        if (question2[i].checked) {
            console.log(question2[i].name);
            userAnswers.q2.push(question2[i].name);
        }
    } if (userAnswers.q2[1] == '') {
        alert('You need to select at least one option to pass to the next question.');
    } else {
        document.getElementById('question2').classList.add('hide');
        document.getElementById('question3').classList.remove('hide');
    }
    console.log(userAnswers);
}

const btns = document.getElementsByTagName('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => {
        event.preventDefault();
        const specificBtn = btns[i].name;
        if (specificBtn == 2) {
            get1stQ();
            console.log('clicked btn 1');
        } else if (specificBtn == 3) {
            get2ndQ();
            console.log('clicked btn 2');
        }
    })
};

// --------------------- funci{on para barra de progreso}
// let i = 0;
// let width = 25;
// const move = () => {
//   if (i == 0) {
//     i = 1;
//     const elem = document.getElementById("myBar");
//     const frame = () => {
//       if (width >= 50) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     };
//     const id = setInterval(frame, 50);
//   }
// }