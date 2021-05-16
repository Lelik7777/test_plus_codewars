const tlId_1='32sf-34fa';
const tlId_2='36sf-34da';
//массив объектов
const toDoList=[
    {id: tlId_1,title:'What to learn' ,filter: 'all', },
    {id: tlId_2,title:'What to buy' ,filter: 'all',  },
];
//объект тасок
//массивы тасок нужно хранить в виде объекта,у которого ключи в квадратных скобках,в которых переменные айдишек
//в квадратных скобках вычисляемое выражение
const tasks={
    [tlId_1]:[//32sf-34fa
        {name:'html',isDone:true},
        {name:'react',isDone: false}
    ],
    [tlId_2]:[//36sf-34da
        {name:'milk',isDone:true},
        {name:'beer',isDone: false}
    ],
    [1>4]:[],//false
}
console.log(tasks);
console.log(tasks[toDoList[0].id][1].name)

//reduce
let numbers=[23,43,45,1,3,22,33]
//суммировать все элементы массива
console.log(numbers.reduce((accumulator,el)=>accumulator+el,0))

//получить максимально значение массива
console.log(numbers.reduce((accumulator,el)=>accumulator>el?accumulator:el))

const students=[
    {name:'alex',age:34,score:120},
    {name:'ann',age:30,score:100},
    {name:'bob',age:32,score:130},
    {name:'nick',age:35,score:140},
];
function  findAlex(acc,el){
    if(el.name==='alex'){
        acc=el;
    }
    return acc;
}

console.log(students.reduce(findAlex,null));

function getBestStudent(acc,el){
    if(el.score>100){
        acc.push(el);
    }
    return acc;
}

console.log(students.reduce(getBestStudent,[]));

function addScore(acc,el){
    //добавляем копию студента
    acc.push({...el,scores:el.score+10})
    return acc;
}
console.log(students.reduce(addScore,[]));

let arrNum=[1,4,5,7,34,23];
console.log(arrNum.indexOf(7));
console.log(Math.min(...arrNum));
let a=10;
function change(){
    a=5;
}
change();
console.log(a);