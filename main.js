import Pokemon from './pokemon.js';
import { logs } from './logs.js'

const $btn = $getElById('btn-kick');
const $btnSuperKick = $getElById('btn-super-kick');
const $countKick = $getElById('count-kick');
const $countSuperKick = $getElById('count-super-kick');

const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    hp: 500,
    defaultHP: 100,
    damageHP: 100,
    selectors: 'character',
});

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp: 500,
    defaultHP: 100,
    damageHP: 100,
    selectors: 'enemy',
});


console.log(player1)
console.log(player2)

function $getElById(id) {
    return document.getElementById(id)
}




$btn.addEventListener('click', function(){
    player1.changeHP(random(20), function(count) {
        addLogs(count);
    });
    player2.changeHP(random(20), function(count) {
        addLogs(count);
    });
    kick();
});

$btnSuperKick.addEventListener('click', function(count){
    player2.changeHP(random(50));
    addLogs(count);
    superKick();
});

function init() {
    player1.renderHP();
    console.log('Start Game!');
}

function addLogs(count) {
    for (let i = 0; i < 1; i++) {
        const $logs = document.querySelector('#logs');
        const log = this === generateLog(player1, player2, count);
        const $p = document.createElement('p');
    
        $p.innerText = `${generateLog(player1, player2, count)}`;
        
        $logs.insertBefore($p, $logs.children[0]);
    }
}

const random = (num) => Math.ceil(Math.random() * num);

function generateLog (firstPerson, secondPerson, count) {
    const { name } = player1;
    const { name: enemyName } = player2;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]  `,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. -${count} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
    ];

    return logs[random(logs.length - 1)]
}


function countKick(count) {
    return function() {
        count--;
        $countKick.innerText = `У вас осталось ${count} нажатий`
        if(count === 0) {
            $btn.disabled = true;
            $countKick.innerText = `У вас не осталось нажатий`
        }
       
    }
}

function countSuperKick(count) {
    return function() {
        count--;

        $countSuperKick.innerText = `У вас осталось ${count} нажатий`

        if(count === 0) {
            $btnSuperKick.disabled = true;
            $countSuperKick.innerText = `У вас не осталось нажатий`
        }
       
    }
}

const kick = countKick(7);
const superKick = countSuperKick(1);


init();
