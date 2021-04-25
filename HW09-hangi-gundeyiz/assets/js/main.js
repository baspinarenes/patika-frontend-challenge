const timeDOM = document.querySelector(".time");
const dateDOM = document.querySelector(".date");
const nameDOM = document.querySelector("#name");

function showTime() {
    let date = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const dateFormatted = `${date.toLocaleTimeString('tr-TR', options).slice(0, -9)}`;
    dateDOM.innerHTML = dateFormatted;

    const timeFormatted = `${date.toLocaleTimeString('tr-TR', options).slice(-8)}`;
    timeDOM.innerHTML = timeFormatted;

    setTimeout(showTime, 1000);
}

function askName(){
    let name = prompt('İsminiz nedir?');
    nameDOM.innerHTML = `, ${name}`;

    showTime();
}

