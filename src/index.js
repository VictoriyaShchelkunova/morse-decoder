const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const phrase = [];
    const words = expr.split('**********');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let arrLetters = [];

        for (let j = 0; j < word.length; j += 10) {
            arrLetters.push(word.split('').splice(j, 10).join(''));
        };
        for (let k = 0; k < arrLetters.length; k++) {
            let letter = arrLetters[k];
            letter = parseInt(letter) + '';
            letter = letter.replace(new RegExp('10', 'g'), '.');
            letter = letter.replace(new RegExp('11', 'g'), '-');
            arrLetters[k] = MORSE_TABLE[letter];
        }
        phrase.push(arrLetters.join(''));
    }
    return phrase.join(' ');
}

module.exports = {
    decode
}