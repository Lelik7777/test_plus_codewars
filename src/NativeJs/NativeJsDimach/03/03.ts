import {StudentType} from '../02/02';

export function addSkill(st:StudentType,skill:string){
    st.technologies.push({id:new Date().getTime(),title:skill});
}
export function changeAge(st:StudentType,age:number){
    st.age=age;
}
export function makeStudentActive(st:StudentType){
    st.isActive=true;
}
export function isThisCity(st: StudentType, c: string){
    return st.address.city.title===c;
}