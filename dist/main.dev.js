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
  character.changeHP(random(20));
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
  this.elProgressbar.style.width = this.damageHP / this.defaultHP * 100 + '%';
}

function changeHP(count) {
  this.damageHP -= count;

  if (this.damageHP <= count) {
    this.damageHP = 0;
    var $winner = document.querySelector('#winner');
    var $win = document.createElement('p');
    $win.innerText = "\u0411\u0435\u0434\u043D\u044B\u0439 ".concat(this.name, " \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B");
    $winner.insertBefore($win, $winner.children[0]);
    $btn.disabled = true;
    $btnSuperKick.disabled = true;
  }

  this.damageCount.innerText = '-' + count;
  character.renderHP();
  enemy.renderHP();

  for (var i = 0; i < 1; i++) {
    var $logs = document.querySelector('#logs');
    var log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    var $p = document.createElement('p');
    $p.innerText = "".concat(log);
    $logs.insertBefore($p, $logs.children[0]);
  }
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

function generateLog(firstPerson, secondPerson, count) {
  var logs = ["".concat(firstPerson.name, " \u0432\u0441\u043F\u043E\u043C\u043D\u0438\u043B \u0447\u0442\u043E-\u0442\u043E \u0432\u0430\u0436\u043D\u043E\u0435, \u043D\u043E \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u043E ").concat(secondPerson.name, ", \u043D\u0435 \u043F\u043E\u043C\u043D\u044F \u0441\u0435\u0431\u044F \u043E\u0442 \u0438\u0441\u043F\u0443\u0433\u0430, \u0443\u0434\u0430\u0440\u0438\u043B \u0432 \u043F\u0440\u0435\u0434\u043F\u043B\u0435\u0447\u044C\u0435 \u0432\u0440\u0430\u0433\u0430. -").concat(count, " [").concat(firstPerson.damageHP, "/").concat(firstPerson.defaultHP, "]"), "".concat(firstPerson.name, " \u043F\u043E\u043F\u0435\u0440\u0445\u043D\u0443\u043B\u0441\u044F, \u0438 \u0437\u0430 \u044D\u0442\u043E ").concat(secondPerson.name, " \u0441 \u0438\u0441\u043F\u0443\u0433\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u043B \u043F\u0440\u044F\u043C\u043E\u0439 \u0443\u0434\u0430\u0440 \u043A\u043E\u043B\u0435\u043D\u043E\u043C \u0432 \u043B\u043E\u0431 \u0432\u0440\u0430\u0433\u0430. -").concat(count, " [").concat(firstPerson.damageHP, "/").concat(firstPerson.defaultHP, "]"), "".concat(firstPerson.name, " \u0437\u0430\u0431\u044B\u043B\u0441\u044F, \u043D\u043E \u0432 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0433\u043B\u044B\u0439 ").concat(secondPerson.name, ", \u043F\u0440\u0438\u043D\u044F\u0432 \u0432\u043E\u043B\u0435\u0432\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435, \u043D\u0435\u0441\u043B\u044B\u0448\u043D\u043E \u043F\u043E\u0434\u043E\u0439\u0434\u044F \u0441\u0437\u0430\u0434\u0438, \u0443\u0434\u0430\u0440\u0438\u043B. -").concat(count, " [").concat(firstPerson.damageHP, "/").concat(firstPerson.defaultHP, "]"), "".concat(firstPerson.name, " \u043F\u0440\u0438\u0448\u0435\u043B \u0432 \u0441\u0435\u0431\u044F, \u043D\u043E \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u043E ").concat(secondPerson.name, " \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E \u043D\u0430\u043D\u0435\u0441 \u043C\u043E\u0449\u043D\u0435\u0439\u0448\u0438\u0439 \u0443\u0434\u0430\u0440. -").concat(count, " [").concat(firstPerson.damageHP, "/").concat(firstPerson.defaultHP, "]  "), "".concat(firstPerson.name, " \u043F\u043E\u043F\u0435\u0440\u0445\u043D\u0443\u043B\u0441\u044F, \u043D\u043E \u0432 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F ").concat(secondPerson.name, " \u043D\u0435\u0445\u043E\u0442\u044F \u0440\u0430\u0437\u0434\u0440\u043E\u0431\u0438\u043B \u043A\u0443\u043B\u0430\u043A\u043E\u043C <\u0432\u044B\u0440\u0435\u0437\u0430\u043D\u043D\u043E \u0446\u0435\u043D\u0437\u0443\u0440\u043E\u0439> \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A\u0430. -").concat(count, " [").concat(firstPerson.damageHP, "/").concat(firstPerson.defaultHP, "]"), "".concat(firstPerson.name, " \u0443\u0434\u0438\u0432\u0438\u043B\u0441\u044F, \u0430 ").concat(secondPerson.name, " \u043F\u043E\u0448\u0430\u0442\u043D\u0443\u0432\u0448\u0438\u0441\u044C \u0432\u043B\u0435\u043F\u0438\u043B \u043F\u043E\u0434\u043B\u044B\u0439 \u0443\u0434\u0430\u0440. -").concat(count, " [").concat(firstPerson.damageHP, "/").concat(firstPerson.defaultHP, "]"), "".concat(firstPerson.name, " \u0432\u044B\u0441\u043C\u043E\u0440\u043A\u0430\u043B\u0441\u044F, \u043D\u043E \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u043E ").concat(secondPerson.name, " \u043F\u0440\u043E\u0432\u0435\u043B \u0434\u0440\u043E\u0431\u044F\u0449\u0438\u0439 \u0443\u0434\u0430\u0440. -").concat(count, " [").concat(firstPerson.damageHP, "/").concat(firstPerson.defaultHP, "]"), "".concat(firstPerson.name, " \u043F\u043E\u0448\u0430\u0442\u043D\u0443\u043B\u0441\u044F, \u0438 \u0432\u043D\u0435\u0437\u0430\u043F\u043D\u043E \u043D\u0430\u0433\u043B\u044B\u0439 ").concat(secondPerson.name, " \u0431\u0435\u0441\u043F\u0440\u0438\u0447\u0438\u043D\u043D\u043E \u0443\u0434\u0430\u0440\u0438\u043B \u0432 \u043D\u043E\u0433\u0443 \u043F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A\u0430. -").concat(count, " [").concat(firstPerson.damageHP, "/").concat(firstPerson.defaultHP, "]"), "".concat(firstPerson.name, " \u0440\u0430\u0441\u0441\u0442\u0440\u043E\u0438\u043B\u0441\u044F, \u043A\u0430\u043A \u0432\u0434\u0440\u0443\u0433, \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u043E ").concat(secondPerson.name, " \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E \u0432\u043B\u0435\u043F\u0438\u043B \u0441\u0442\u043E\u043F\u043E\u0439 \u0432 \u0436\u0438\u0432\u043E\u0442 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430. -").concat(count, " [").concat(firstPerson.damageHP, "/").concat(firstPerson.defaultHP, "]"), "".concat(firstPerson.name, " \u043F\u044B\u0442\u0430\u043B\u0441\u044F \u0447\u0442\u043E-\u0442\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043D\u043E \u0432\u0434\u0440\u0443\u0433, \u043D\u0435\u043E\u0436\u0438\u0434\u0430\u043D\u043D\u043E ").concat(secondPerson.name, " \u0441\u043E \u0441\u043A\u0443\u043A\u0438, \u0440\u0430\u0437\u0431\u0438\u043B \u0431\u0440\u043E\u0432\u044C \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0443. -").concat(count, " [").concat(firstPerson.damageHP, "/").concat(firstPerson.defaultHP, "]")];
  return logs[random(logs.length - 1)];
}

init();