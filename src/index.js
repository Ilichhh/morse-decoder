const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {  
    let result = '';
    const arrExpr = [];

    let newE = '';
    for (let i = 0; i <= expr.length; i++) {
        if (newE.length === 10) {
            arrExpr.push(newE);
            newE = '';
        }
        newE += expr[i];
    }

    const morseArr = arrExpr.map(e => {
        let morseChar = '';
        if (e === '**********') {
            morseChar = ' ';
        } else {
            e.match(/.{1,2}/g).forEach(el => {
                if (el === '10') morseChar += '.';
                if (el === '11') morseChar += '-';
            })
         }
        return morseChar;
    })

    morseArr.forEach(char => char === ' ' ? result += ' ' : result += MORSE_TABLE[char]);       

    return result;
}

module.exports = {
    decode
}