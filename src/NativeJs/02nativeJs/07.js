let students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    }, {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.map(st => ({...st, a: st.age + 1})));

/*
function map(arr: Array<any>, func: Function) {
    const newArr: Array<any> = [];
    for (let i: number = 0; i < newArr.length; i++) {
        newArr[i] = func(arr[i]);
    }
    return newArr;
}
console.log(map(students, (st: { age: number; }) => ({...st, a: st.age + 1})));*/

function map(arr, func) {
    const newArr2 = [];
    /*arr.forEach((st)=>{
        newArr2.push(func(st));
    })*/
    arr.forEach((st, i) => {
        newArr2[i] = func(st)
    })
    return newArr2;
}

function addProp(elem) {
    return {...elem, isMarried: false}
}

function filter(arr, func) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr1 = filter(students, st => !st.isMarried);
console.log((arr1));

/*function find(arr, func) {
    for (let i: number = 0; i < newArr.length; i++) {
        if (func(arr[i]))++ {
            return arr[i];
        }
    }
}*/
