import {addStudent, changeExam, onlyExamFalse, onlyExamTrue, removeStudent, Students} from './01';

let students: Students;
let group1: string;
let group2: string;
beforeEach(() => {
    group1 = 'group1';
    group2 = 'group2';
    students = {
        [group1]: [
            {id: 1, idGroup: group1, name: 'alex', exam: true},
            {id: 2, idGroup: group1, name: 'ann', exam: false},
            {id: 3, idGroup: group1, name: 'nick', exam: true},
        ],
        [group2]: [
            {id: 1, idGroup: group2, name: 'alex2', exam: true},
            {id: 2, idGroup: group2, name: 'kate', exam: false},
            {id: 3, idGroup: group2, name: 'lusy', exam: false},
        ],
    }


})
test('add student', () => {
    const newStudents = addStudent(group1, students, 4, 'bob', false);
    expect(students).not.toEqual(newStudents);
    expect(newStudents[group1].length).toBe(4);
    expect(newStudents[group1][0].name).toBe('bob')
});
test('remove Student', () => {
    const newStudents1 = removeStudent(group2, students, 2);
    expect(students[group2].length).toBe(3);
    expect(newStudents1[group2].length).toBe(2);

})
test('change student exam',()=> {
    const newStudents2=changeExam(students,group1,2,true);
    expect(students[group1][1].exam).toBe(false);
    expect(newStudents2[group1][1].exam).toBe(true);
})
test('array students passed exam',()=>{
    const studentsPassedExam2=onlyExamTrue(students,group2);
    const studentsPassedExam1=onlyExamTrue(students,group1);
    expect(studentsPassedExam2.length).toBe(1);
    expect(studentsPassedExam1.length).toBe(2);
    expect(students[group1].length).toBe(3);
})
test('array students don`t pass exam',()=>{
    const studentsDontPassExam=onlyExamFalse(students,group1);
    expect(studentsDontPassExam.length).toBe(1);
    expect(studentsDontPassExam).toEqual([{id: 2, idGroup: group1, name: 'ann', exam: false}])
})