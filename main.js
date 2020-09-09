import Pokemon from './pokemon.js';
import { generateLog } from './logs.js'
import { random } from './random.js'

class Game {
    getPokemons = async () => {
        const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons?random=true');
        const body = await responce.json();
        return body;
    }

    getDamage = async () => {
        const responce = await fetch('https://reactmarathon-api.netlify.app/api/fight?player1id=25&attackId=1&player2id=1');
        const damage = await responce.json();
        return damage;
    }

    start = async () => {
        const pokemon = await this.getPokemons();
        const pokemonEnemy = await this.getPokemons();
        const damage = await this.getDamage();
        
        
        let player1 = new Pokemon({
            ...pokemon,
            selectors: 'player1',
        });

        let player2 = new Pokemon({
            ...pokemonEnemy,
            selectors: 'player2',
            
        });

        const $control = document.querySelector('.control');

        player1.attacks.forEach(item => {
            const $btn = document.createElement('button');
            $btn.classList.add('button');
            const $span = document.createElement('span');
            $span.classList.add('span');
            $btn.innerText = item.name;
            const btnCount = countKick(item.maxCount, $btn, $span)

            $btn.addEventListener('click', () => {
                btnCount();
                player1.changeHP(random(damage.kick.player1), function(count) {
                    for (let i = 0; i < 1; i++) {
                        const $logs = document.querySelector('#logs');
                        const $p = document.createElement('p');
                        $p.innerText = `${generateLog(player2, player1, count, random)}`;
                        $logs.insertBefore($p, $logs.children[0]);

                    }
                    
                }, startGame );
                

                player2.changeHP(random(damage.kick.player2), function(count) {
                    for (let i = 0; i < 1; i++) {
                        const $logs = document.querySelector('#logs');
                        const $p = document.createElement('p');
                        $p.innerText = `${generateLog(player2, player1, count, random)}`;
                        $logs.insertBefore($p, $logs.children[0]);
                    }
                    
                }, startGame );
                
            })
            
            $control.appendChild($btn);
            $btn.appendChild($span);
        })



        function countKick(count, el, span) {
            
            return function() {
                count--;
                span.innerText =  `У вас осталось ${count} нажатий`
                if(count === 0) {
                    el.disabled = true;
                    el.innerText = `У вас не осталось нажатий`
                }

                return count;
                
            }
        }

        function startGame(winner) {   
            if(player1.hp.current <=0 || player2.hp.current <=0 ) {
                newPokemons()
                const allButtons = document.querySelectorAll('.control .button');   
                allButtons.forEach($item => $item.remove());
                // const $start = document.querySelector('.control');
                // const $btnstart = document.createElement('button');
                // $btnstart.classList.add('button');
                // $btnstart.innerText = 'Start game!';
                // $start.appendChild($btnstart);
                winner.remove();
                // $btnstart.addEventListener('click', () => {
                //     player1 = new Pokemon({
                //         ...pokemon,
                //         selectors: 'player1',
                        
                //     });  
                    
                //     player2 = new Pokemon({
                //         ...pokemonEnemy,
                //         selectors: 'player2',
                        
                //     });
                //     // newPokemons();

                //     $btnstart.remove();
                //     winner.remove();
                //     attack()
                // })
                
            } 
            
        }
        // function attack() {
        //     player1.attacks.forEach(item => {
        //         const $btn = document.createElement('button');
        //         $btn.classList.add('button');
        //         const $span = document.createElement('span');
        //         $span.classList.add('span');
        //         $btn.innerText = item.name;
        //         const btnCount = countKick(item.maxCount, $btn, $span)
        //         $btn.addEventListener('click', () => {
        //             btnCount();
        //             player1.changeHP(random(item.minDamage), function(count) {
                        
        //                     const $logs = document.querySelector('#logs');
        //                     const $p = document.createElement('p');
        //                     $p.innerText = `${generateLog(player2, player1, count, random)}`;
        //                     $logs.insertBefore($p, $logs.children[0]);
            
                        
                        
        //             }, startGame );
                    
            
        //             player2.changeHP(random(item.minDamage), function(count) {
                     
        //                     const $logs = document.querySelector('#logs');
        //                     const $p = document.createElement('p');
        //                     $p.innerText = `${generateLog(player2, player1, count, random)}`;
        //                     $logs.insertBefore($p, $logs.children[0]);
                        
                        
        //             }, startGame );
                    
        //         })
                
        //         $control.appendChild($btn);
        //         $btn.appendChild($span);
        //     })
        // }

        function newPokemons() {
            game.start();
        }

    }
}

const game = new Game();
game.start();

