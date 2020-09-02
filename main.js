import Pokemon from './pokemon.js';
import { generateLog } from './logs.js'
import { random } from './random.js'
import { pokemons } from './pokemons.js'

const $btnSuperKick = $getElById('btn-super-kick');
const $countSuperKick = $getElById('count-super-kick');

const pikachu = pokemons.find(item => item.name === 'Pikachu');

const player1 = new Pokemon({
    ...pikachu,
    selectors: 'player1',
});

const player2 = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    defaultHP: 100,
    damageHP: 100,
    selectors: 'player2',
});

const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;
    const btnCount = countKick(item.maxCount, $btn)
    $btn.addEventListener('click', () => {
        btnCount();
        
    })
    $control.appendChild($btn);
})

function $getElById(id) {
    return document.getElementById(id)
}

// $btn.addEventListener('click', function(){
//     player1.changeHP(random(20), function(count) {
//         for (let i = 0; i < 1; i++) {
//             const $logs = document.querySelector('#logs');
//             const $p = document.createElement('p');
//             $p.innerText = `${generateLog(player2, player1, count, random)}`;
//             $logs.insertBefore($p, $logs.children[0]);
            
//         }
//     });
//     player2.changeHP(random(20), function(count) {
//         for (let i = 0; i < 1; i++) {
//             const $logs = document.querySelector('#logs');
//             const $p = document.createElement('p');
//             $p.innerText = `${generateLog(player1, player2, count, random)}`;
//             $logs.insertBefore($p, $logs.children[0]);
            
//         }
//     });
//     console.log(player2);
//     kick();
// });

// $btnSuperKick.addEventListener('click', function(count){
//     player2.changeHP(random(20), function(count) {
//         for (let i = 0; i < 1; i++) {
//             const $logs = document.querySelector('#logs');
//             const $p = document.createElement('p');
//             $p.innerText = `${generateLog(player1, player2, count, random)}`;
//             $logs.insertBefore($p, $logs.children[0]);
            
//         }
//     });
//     superKick();
// });

function init() {
    player1.renderHP();
}

function countKick(count, el) {
    
    return function() {
        count--;
        el.innerText =  `${el.innerText} (${count})`
        if(count === 0) {
            el.disabled = true;
            el.innerText = `У вас не осталось нажатий`
        }

        return count;
        
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
