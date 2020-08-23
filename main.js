const $btn = document.getElementById('btn-kick');
const $btnSuperKick = document.getElementById('btn-super-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    damageCount: document.getElementById('damage-count'),
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    damageCount: document.getElementById('damage-count-enemy'),
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click', function(person){
    changeHP(random(20), character);
    changeHP(random(20), enemy);
    
});

$btnSuperKick.addEventListener('click', function(){
    changeHP(random(20), character);
    changeHP(random(50), enemy);
    $btnSuperKick.disabled = true;
});

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP (count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедный ' + person.name + ' проиграл')
        $btn.disabled = true;
    } else {
        person.damageHP -= count;
    }
    person.damageCount.innerText = '-' + count;
    person.damageCount.innerText = '-' + count;
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();