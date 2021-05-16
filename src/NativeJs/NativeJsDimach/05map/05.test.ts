import {congratulationsPeople, getNewArrayPeople, people} from './05';

test.skip('arr must be so',()=>{
    expect(people[0].name).toBe('Alex Ivanov');
    expect(people[2].age).toBe(32);
    expect(people[0].name.split(' ')[0]).toBe('Alex');
    expect(people[2].name.split(' ')[1]).toBe('Dvorkovich');
})
test.skip('getNewArrayPeople must return new array people',()=>{
    expect(getNewArrayPeople(people)[0].stack).toBe('Html,Css,Js,React');
    expect(getNewArrayPeople(people)[1].secondName).toBe('Orion');
})
test.skip('congratulationsPeople must work correct',()=>{
    expect(congratulationsPeople(people)[0].message).toBe('Hello, Alex.Welcome to us!');
})
test.skip('',()=> {

    let arr:Array<number> = [];
    for(let i=0;i<10;i++){
       // arr.push(Number(Math.random().toFixed(2)));
        arr.push(Math.random())

    }
})
test.skip('function must be',()=>{

  let arr3:Array<number>=[-1,5,-4,4,-3,2];
    for(let i=0;i<arr3.length;i++){
        arr3=arr3.filter(a=>a>0&&a<10);
    }
})
test.skip('must',()=>{
    let arr11=[1,45,-3,44,-34,5,32,11,-23];
    for(let i=0;i<arr11.length;i++){
        if(arr11[i]==5)
        {
            console.log(arr11[i]);
            break;
        }
    }
})
test.skip('must be ',()=>{
    let a=5;
    a=Math.pow(a,2);
    let b=a;

})