import Pokemon from './pokemon.js';
import { generateLog } from './logs.js'
import { random } from './random.js'

const $btn = $getElById('btn-kick');
const $btnSuperKick = $getElById('btn-super-kick');
const $countKick = $getElById('count-kick');
const $countSuperKick = $getElById('count-super-kick');

const player1 = new Pokemon({
    name: 'Pikachu',
    type: 'electric',
    defaultHP: 100,
    damageHP: 100,
    selectors: 'character',
});

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    defaultHP: 100,
    damageHP: 100,
    selectors: 'enemy',
});


function $getElById(id) {
    return document.getElementById(id)
}

$btn.addEventListener('click', function(){
    player1.changeHP(random(20), function(count) {
        for (let i = 0; i < 1; i++) {
            const $logs = document.querySelector('#logs');
            const $p = document.createElement('p');
            $p.innerText = `${generateLog(player2, player1, count, random)}`;
            $logs.insertBefore($p, $logs.children[0]);
            
        }
    });
    player2.changeHP(random(20), function(count) {
        for (let i = 0; i < 1; i++) {
            const $logs = document.querySelector('#logs');
            const $p = document.createElement('p');
            $p.innerText = `${generateLog(player1, player2, count, random)}`;
            $logs.insertBefore($p, $logs.children[0]);
            
        }
    });
    console.log(player2);
    kick();
});

$btnSuperKick.addEventListener('click', function(count){
    player2.changeHP(random(20), function(count) {
        for (let i = 0; i < 1; i++) {
            const $logs = document.querySelector('#logs');
            const $p = document.createElement('p');
            $p.innerText = `${generateLog(player1, player2, count, random)}`;
            $logs.insertBefore($p, $logs.children[0]);
            
        }
    });
    superKick();
});

function init() {
    player1.renderHP();
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
