let Addexpense = document.getElementById('Addexpense');
let ShowMoney = document.getElementById('ShowMoney');
let h1 = document.querySelector('h1');
var section = document.querySelector('section');


function is_number(char) {
    return !isNaN(parseInt(char));
}

function actualisation() {
    let element = 0;
    let tr = document.querySelectorAll('tr');
    for (let i = 0; i < tr.length - 1; i++) {
        let money = document.querySelectorAll('td:nth-child(3)')[i];
        element += Number(money.textContent);
    }
    if (tr.length - 1 == 0) {
        element = 0;
    }
    section.innerHTML = 'Total: ' + element;
    if (element < 0) {
        section.style.color = 'red';
    }
    else {
        section.style.color = 'green';
    }
}

function Delete(id) {
    let child = document.getElementById(id);
    child.parentNode.removeChild(child);
    actualisation();
}

Addexpense.addEventListener('click', () => {
    let name = document.getElementById('Name').value;
    let description = document.getElementById('Description').value;
    let price = document.getElementById('Price').value;
    let table = document.querySelector('table');
    let tr = document.querySelectorAll('tr');

    if (name == '') {
        document.querySelector('span:first-of-type').style.display = 'block';
        document.getElementById('Name').style.borderColor = 'red';
    }
    if (!is_number(price)) {
        document.querySelector('span:last-of-type').style.display = 'block';
        document.getElementById('Price').style.borderColor = 'red';
    }
    if (typeof name == 'string' && is_number(price)) {
        table.innerHTML += '<tr id="'+tr.length+'">' +
            '<td>' + name + '</td>' +
            '<td>' + description + '</td>' +
            '<td>' + price + '</td>' +
            '<td style="color: red;" onclick="Delete('+tr.length+')">x</td>' +
            '</tr>';
    }

    actualisation();
    name = '';
    description = '';
    price = '';
})

