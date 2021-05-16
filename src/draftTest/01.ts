export type StudentType={
    name:string;
    exam:boolean;
}
export function removeStudent (students:StudentType[],name:string){
    return students.filter(s=>s.name!==name);
}
export function removeStudentByFind(students:StudentType[],name:string){
    return students.find(st=>st.name===name);
}
