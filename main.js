let result = 0;
let index = 0;
let binaryNumber = 128;

let array = [];

const btn = document.querySelector('button');
const div = document.querySelector('div');
const input = document.querySelector('input');
const h3 = document.querySelector('h3');

const handleButton = () => {
    const strValue = input.value;
    if (strValue.length % 8 == 0 && strValue.length <= 240) {
        for (let i = 0; i < strValue.length; i++) {
            if (strValue[i] == "1") {
                if (index < 7) {
                    index++;
                    result += binaryNumber;
                    binaryNumber = binaryNumber / 2;
                } else {
                    result += binaryNumber;
                    array.push(result);
                    let arrayString = array.join(", ");
                    div.textContent = `${arrayString}`;
                    binaryNumber = 128;
                    index = 0;
                    result = 0;
                }
            } else if (strValue[i] == "0") {
                if (index < 7) {
                    index++;
                    binaryNumber = binaryNumber / 2;
                } else {
                    array.push(result);
                    let arrayString = array.join(", ");
                    div.textContent = `${arrayString}`;
                    binaryNumber = 128;
                    index = 0;
                    result = 0;
                }
            } else {
                return div.textContent = "ERROR OF GIVEN VALUES";
            }
        }
    } else {
        div.textContent = "VALUE LENGTH ERROR";
    }
    input.value = '';
    h3.textContent = 'THE LENGTH OF THE BINARY CODE SHOULD BE FROM 8 TO 240';
}

const handleLength = (e) => {
    const value = e.target.value;
    if (value.length <= 240) {
        h3.textContent = `Input length = ${value.length}`;
    } else {
        h3.textContent = `YOU EXCEEDED THE LENGTH RANGE 8 - 240, REDUCE THE LENGTH`;
    }
}

btn.addEventListener('click', handleButton);
input.addEventListener('input', handleLength);