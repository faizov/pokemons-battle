"use strict";

var $btn = document.getElementById('btn-kick');
var $btnSuperKick = document.getElementById('btn-super-kick');
var character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  damageCount: document.getElementById('damage-count'),
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP
};
var enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  damageCount: document.getElementById('damage-count-enemy'),
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),
  changeHP: changeHP,
  renderHP: renderHP,
  renderHPLife: renderHPLife,
  renderProgressbarHP: renderProgressbarHP
};
$btn.addEventListener('click', function () {
  character.changeHP(random(20));
  enemy.changeHP(random(20));
});
$btnSuperKick.addEventListener('click', function () {
  character.changeHP(random(50));
  enemy.changeHP(random(50));
  $btnSuperKick.disabled = true;
});

function init() {
  console.log('Start Game!');
  character.renderHP();
  enemy.renderHP();
}

function renderHP() {
  character.renderHPLife();
  enemy.renderHPLife();
  character.renderProgressbarHP();
  enemy.renderProgressbarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count) {
  if (this.damageHP <= count) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' проиграл');
    $btn.disabled = true;
    $btnSuperKick.disabled = true;
  } else {
    this.damageHP -= count;
  }

  this.damageCount.innerText = '-' + count;
  character.renderHP();
  enemy.renderHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

init();