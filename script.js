function hello (name='Nimetu', age= Infinity){ //algväärtused
    let yearText = 'years';
    if (age === 1 ){
        yearText = 'year'; //grammar
    }
    //clunkier ver: console.log('hello ' + name + ' and you are ' + age + ' years old');
    console.log(`hello ${name}, you are ${age} ${yearText} old`);
}

hello('Kaspar', 30);
hello('Martin', 10);
hello('Mickie', 1);
hello(); //if default not set simply undefined

function volume(h, l, w){ //e.g cube
    return h*w*l;
}

let answer = volume(4,2,5); 
console.log(answer);

function numbers(i) {   //recursive
    console.log(i);
    if(i<10){
        numbers(i+1);
    }
}
numbers(0);

let nums = [0, 1, 2, 3, 4];

function print(num){
    console.log(num)
}

nums.forEach(print);
nums.forEach(function (num){
    console.log('num is ' + num);
});
//lühem ver üleval olevast all
nums.forEach(num => console.log('num is ' + num));

let sums = nums.map(num => {
    return num + 10;
});
console.log(sums);

sums = nums.map(num => num + 10); //short ver
console.log(sums);

let sum = nums.reduce((total, num) => total+num);
console.log(sums);

let sorted = nums.sort((a,b) => {
    if(a>b) {
            return -1;
    }   else if(a<b) {
            return 1;
    }   else {
            return 0; //has to be equal no need to specify
    }
});
console.log(sorted);

console.log(Math.PI);
console.log(Math.round(Math.random() * 50) + 50); //selle enda kasutuseks nt 1-100 vahel numbri saamiseks *100. vahemikku jaoks +