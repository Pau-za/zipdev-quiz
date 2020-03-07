$(document).ready(function () {
    $('.tabs').tabs();
});

$(document).ready(function () {
    $('.sidenav').sidenav();
});

//hacer un objeto que guarde toda la informaci{on del usuario para pintarla al final del quiz}

const userAnswers = {
    'q1': '',
    'q2': '',
    'q3': '',
    'q4': ''
};

const get1stQ = () => {
    const question1 = document.getElementsByClassName('q1');
    for (let i = 0; i < question1.length; i++) {
        if (question1[i].checked == true) {
            // add info to the object;
            userAnswers.q1 = question1[i].value;
            console.log(userAnswers);
        }
    };
};

const btns = document.getElementsByTagName('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => {
        event.preventDefault();
        const specificBtn = btns[i].name;
        if (specificBtn == 2) {
            //cambiar a pregunta 2
            //obtener el radiobutton seleccionado
            get1stQ();
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