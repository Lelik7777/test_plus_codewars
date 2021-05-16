import {chooseNums} from './04';
let arr:Array<number>;
beforeEach(()=>{
    arr=[1,56,33,55,65,76];
})
test.skip('choose only more then 50',()=>{
    const arr2=[56,55,65,76];
    const res=chooseNums(arr);

    expect(chooseNums(arr)[0]).toBe(56);
    expect(chooseNums(arr)[3]).toBe(76);

    expect(chooseNums(arr).length).toBe(4);
})
test.skip('task is true',()=>{
    const tasks=[
        {id:1,
        title:'bread',
            isDone:true,
        },
        {id:2,
            title:'salt',
            isDone:false,
        },
        {id:3,
            title:'milk',
            isDone:true,
        },
    ];
    let completeTasks=tasks.filter(t=>t.isDone);
    expect(completeTasks.length).toBe(2);
    expect(completeTasks[0].title).toBe('bread');
    expect(completeTasks[1].id).toBe(3);
})