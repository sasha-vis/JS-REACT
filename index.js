const changeString = function (string) {
    let newString = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return console.log(newString);
};

changeString('пиТеР');

changeString('javaScript');

const sayHello = function (name) {
    if(name === 'Mark') return console.log('Hi, Mark!');
    console.log(`Hello, ${name}!`);
};

sayHello('Sasha');

sayHello('Mark')

const arrayAndLength = function (array, length) {
    let newArray = [];
    array.forEach(element => {
        if (element.length <= length) newArray.push(element);
    });
    return console.log(newArray);
};

arrayAndLength(['a', 'ab', 'abc'], 2);

arrayAndLength(['I love JS', 'some very long string', 'hell'], 9);

