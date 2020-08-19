const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
const a = 'а';

function getRow(firstRow, secondRow) {
    let resultFirst = '';
    for (let i = 0; i < firstRow.length; i++) {
        let result = firstRow.charAt(i);
        if (result != a) {
            continue
        } 
        resultFirst += firstRow.charAt(i);
    }
    
    let resultSecond = '';
    for (let i = 0; i < secondRow.length; i++) {
        let result = secondRow.charAt(i);
        if (result != a) {
            continue
        } 
        resultSecond += secondRow.charAt(i);
      
    }
    
    if (resultFirst.length > resultSecond.length) {
        console.log(firstRow)
    } else {
        console.log(secondRow)
    }
}

const fullCount = getRow(firstRow, secondRow)



