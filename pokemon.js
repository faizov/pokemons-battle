class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.damageCount = document.getElementById(`damage-count-${name}`);
        this.namePokemon = document.getElementById(`name-${name}`);
        
        this.imgPokemon = document.getElementById(`img-${name}`);

        this.$control = document.querySelectorAll('.control');
        this.$btnSuperKick = document.getElementById('btn-super-kick');
        this.$startGame = document.createElement('button');
    }
}

class Pokemon extends Selectors{
    constructor({ name, img, hp, type, selectors, attacks = [], random }) {
        super(selectors)
        this.name = name;
        this.img = img;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.attacks = attacks;
        this.random = random;

        this.namePokemon.innerText = name;

        this.renderImg();
        this.renderHP();
    }
    
    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderImg = () => {
        this.imgPokemon.src = this.img;
    }
    
    renderHPLife = () => {
        this.elHP.innerText = this.hp.current + ' / ' + this.hp.total;
    }
    
    renderProgressbarHP = () => {
        this.elProgressbar.style.width = this.hp.current / this.hp.total * 100 + '%';
    }

    changeHP = (count, cb ,startGame ) => {
        this.hp.current -= count; 
            if (this.hp.current <= 0) {
                this.hp.current = 0;
                const $winner = document.querySelector('#winner');
                const $win = document.createElement('p');
                $win.innerText = `Бедный ${this.name} проиграл`;
                $winner.insertBefore($win, $winner.children[0]);
                startGame($win, $winner);
            }
            this.damageCount.innerText = '-' + count;
            this.renderHP()
            cb && cb(count);
    }

}

export default Pokemon; 