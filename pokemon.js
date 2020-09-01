class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.damageCount = document.getElementById(`damage-count-${name}`);
        this.$btn = document.getElementById('btn-kick');
        this.$btnSuperKick = document.getElementById('btn-super-kick');
    }
}

class Pokemon extends Selectors{
    constructor({ name, defaultHP, damageHP, type, selectors }) {
        super(selectors)
        this.name = name;
        this.defaultHP = defaultHP;
        this.damageHP = damageHP;
        this.type = type;
        this.renderHP();
    }
    
    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }
    
    renderHPLife = () => {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    }
    
    renderProgressbarHP = () => {
        this.elProgressbar.style.width = this.damageHP / this.defaultHP * 100 + '%';
    }

    changeHP = (count, cb) => {
    
        this.damageHP -= count;    
        if (this.damageHP <= count) {
            this.damageHP = 0;
            const $winner = document.querySelector('#winner');
            const $win = document.createElement('p');
            $win.innerText = `Бедный ${this.name} проиграл`;
            $winner.insertBefore($win, $winner.children[0]);
            this.$btn.disabled = true;
            this.$btnSuperKick.disabled = true;
        }
        this.damageCount.innerText = '-' + count;
        this.renderHP()
        cb && cb(count);
    }
}

export default Pokemon; 