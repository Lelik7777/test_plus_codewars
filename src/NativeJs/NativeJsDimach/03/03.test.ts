import {StudentType} from '../02/02';
import {addSkill, changeAge, isThisCity, makeStudentActive} from './03';

let student:StudentType;
 beforeEach(()=>{
     student={
         name: 'Alex',
         age: 44,
         isActive:false,
         address: {
             streetTitle: 'Tambovska',
             city: {
                 title: 'Simferopol',
                 countyTitle: 'Russia',
             },
         },
         technologies: [
             {
                 id: 1,
                 title: 'Html',
             },
             {
                 id: 2,
                 title: 'Css',
             },
             {
                 id: 3,
                 title: 'React',
             }
         ]
     };
 })
test.skip('addSkill must be add a new skill in technologies',()=>{
    expect(student.technologies.length).toBe(3);
    addSkill(student,'Js');
   expect(student.technologies.length).toBe(4);
   expect(student.technologies[3].title).toBe('Js');
   expect(student.technologies[3].id).toBeDefined();
})
test.skip('changeAge must change age of student',()=>{
    expect(student.age).toBe(44);
    changeAge(student,50);
    expect(student.age).toBe(50);
})
test.skip('change status of student',()=>{
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})
test.skip('does the student live it this city',()=>{
    const res=isThisCity(student,'Moscow');
    const res2=isThisCity(student, 'Simferopol')
    expect(res).toBe(false);
    expect(res2).toBe(true);

})