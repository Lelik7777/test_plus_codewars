const array = [777, 23, 12, 43, 32, 65, 82, 21, 0, 99]

//array.length-1 чтобы не выйти за пределы массива
for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            /* let temp = array[i + 1];
             array[i + 1] = array[i];
             array[i] = temp;*/
        }
    }
}
console.log(array);
let a = 10;
let b = 5;
[a, b] = [b, a];
console.log(a, b)

//sort
const name = ['bob', 'Alex', , 'alex', 3, , '3', 'ann', 'donald', 'ramzan'];
name.sort();
console.log(name);
const numbers = [100, 1, 1000, 222, 9, 33323];
numbers.sort();
console.log(numbers);
numbers.sort();
console.log(numbers)

//сортировка по возрастанию
function compare(a, b) {
    if (a <= b) {
        return -1;
    } else {
        return 1
    }
}

console.log(numbers.sort(compare));
const shortComp = (a, b) => a - b;
console.log(numbers.sort((a,b)=>b-a))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];
console.log(students.sort((a,b)=>b.scores-a.scores));
//запись в виде цепочки
/*console.log(students
    .sort((a,b)=>b.age-a.age)
    .reverse()
    .pop()
)*/
//если сортировка объекта по полям
console.log(students.sort((a,b)=>a.name>b.name?1:-1))
function pow(x,n){
    let res=1;
    for (let i=0;i<n;i++){
        res*=x;
    }
    return res;
}

console.log(`pow= ${pow(2,3)}`);

const arr=[1,3,6,6];
let str=arr.join('/');
console.log(str)
document.body.style.backgroundColor='blue';
document.body.style.cursor='pointer';