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

const phone = '+71234567890';
let phoneResult = '';

function formattedPhone(phone) {
    
    for (let i = 0; i < phone.length; i++) {
        phoneResult += phone.charAt(i);
        if (i == 1) {
            phoneResult += ' (';
        } else if (i == 4) {
            phoneResult += ') ';
        } else if (i == 7) {
            phoneResult += '-';
        } else if (i == 9) {
            phoneResult += '-';
        }
    }
    return phone;
}

console.log(formattedPhone(phone));
console.log(phoneResult);



