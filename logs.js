export function generateLog (player2, player1, count, random) {
    const { name } = player1;
    const { name: enemyName } = player2;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. -${count} [${player1.hp.current }/${player1.hp.total}]`,
        `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. -${count} [${player1.hp.current }/${player1.hp.total}]`,
        `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count} [${player1.hp.current }/${player1.hp.total}]`,
        `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. -${count} [${player1.hp.current }/${player1.hp.total}]  `,
        `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count} [${player1.hp.current }/${player1.hp.total}]`,
        `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. -${count} [${player1.hp.current }/${player1.hp.total}]`,
        `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. -${count} [${player1.hp.current }/${player1.hp.total}]`,
        `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника. -${count} [${player1.hp.current }/${player1.hp.total}]`,
        `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. -${count} [${player1.hp.current }/${player1.hp.total}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. -${count} [${player1.hp.current }/${player1.hp.total}]`
    ];

    return logs[random(logs.length - 1)]
}