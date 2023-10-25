const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




function askQuestion(question, myTest = '') {
    rl.question(question, (answer) => {


        if (answer === 'exit') {
            rl.close();
        } else if (answer.length > 4){
            askQuestion('How would you like to sort: \n' +
                '1.Sort words alphabetically\n' +
                '2.Show numbers from lesser to greater\n' +
                '3.Show numbers from bigger to smaller\n' +
                '4.Display words in ascending order by number of letters in the word\n' +
                '5.Show only unique words\n' +
                '6.Display only unique values from the set of words and numbers entered by the user\n' +
                'To exit the program, the user need to enter exit, otherwise the program will repeat itself again and again, asking for new data and suggesting sorting\n', answer);

        } else if (answer.length < 4) {
            mainFunction(myTest, answer);

            askQuestion('Hello enter 10 words: ');
        }
    });
}

function mainFunction(str, typeOfSort) {
    const { words, numbers } = separatorNumbersAndWords(str);

    switch (typeOfSort) {
        case '1': {
            sortWordsAlphabetically(words);
            break;
        }
        case '2': {
            lesserToGreater(numbers);
            break;
        }
        case '3': {
            biggerToSmaller(numbers);
            break;
        }
        case '4': {
            stringAscendingOrder(words);
            break;
        }
        case '5': {
            showUniqueWords(words);
            break;
        }
        case '6': {
            showUniqueWordsAndNumbers([...words, ...numbers]);
            break;
        }

    }


}

function separatorNumbersAndWords(str) {
    const pattern = /(\d+|\w+)/g;
    const matches = str.match(pattern);

    const numbers = [];
    const words = [];

    matches.forEach(match => {
        if (/^\d+$/.test(match)) {
            numbers.push(+match);
        } else {
            words.push(match);
        }
    });

    return { words, numbers }
}

function sortWordsAlphabetically(words) {
    const res = words.sort(function (a, b) {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    console.log('res', res);
}

function lesserToGreater(numbers) {
    const res = numbers.sort((a, b) => a - b);
    console.log('res', res);
}

function biggerToSmaller(numbers) {
    const res = numbers.sort((a, b) => b - a);
    console.log('res', res);
}

function stringAscendingOrder(words) {
    const res = words.sort((a, b) => a.length - b.length);
    console.log('res', res);
}

function showUniqueWords(words) {
    const res = [...new Set(words)];
    console.log('res', res);
}

function showUniqueWordsAndNumbers(arrInput) {
    const res = [...new Set(arrInput)];
    console.log('res', res);
}

askQuestion('Hello enter 10 words: ');
