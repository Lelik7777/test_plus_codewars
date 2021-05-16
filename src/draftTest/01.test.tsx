import {removeStudentByFind, StudentType} from './01';
let students:StudentType[];
beforeEach(()=>{
    students=[
        {name:'alex',exam:true},
        {name:'bob',exam:true},
        {name:'ann',exam:false},
    ];
})
test('remove array elements',()=>{

   let removeStudent=removeStudentByFind(students,'alex');

    expect(removeStudent).toEqual({name:'alex',exam:true});
    expect(students.length).toBe(3);
})