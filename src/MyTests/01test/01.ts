export type Student={
    id:number;
    idGroup:string;
    name:string;
    exam:boolean;
}
export type Students={
    [key:string]:Student[];
}

export function addStudent(idG:string,students:Students,id:number,name:string,exam:boolean){
return {...students,[idG]:[{id,idGroup:idG,name,exam},...students[idG]]};
}
export function removeStudent(idG:string,students:Students,id:number){
    return {...students,[idG]:students[idG].filter(s=>s.id!==id)};
}
export function changeExam(students:Students,idG:string,idS:number,exam:boolean){
    return{...students,[idG]:students[idG].map(s=>s.id===idS?{...s,exam}:s)};
};
export function onlyExamTrue(students:Students,idG:string){
    return students[idG].filter(s=>s.exam);
}
export function onlyExamFalse(students:Students,idG:string){
    return students[idG].filter(s=>!s.exam);
}
