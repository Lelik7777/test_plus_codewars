

console.log('oooo');
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
function addYear(){

}
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

function map(arr:Array<any>,func:Function){
    const newArr2:Array<any>=[];
    /*arr.forEach((st)=>{
        newArr2.push(func(st));
    })*/
    arr.forEach((st,i)=>{
        newArr2[i]=func(st)
    })
    return newArr2;
}
let  doTest:Array<number>=[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

console.log(getAddRepeatedNum(doTest));