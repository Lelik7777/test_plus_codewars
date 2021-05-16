import React from 'react';


export type ManType = {
    name: string;
    age: number;
    lesson: Array<{ title: string }>;//  ?- означает необязательный параметр,элемент объекта
    address?: { street: { title: string } };

}
type PropsType = {
    title: string;
    man?: ManType;
    food?:Array<string>;
    car?:Array<string>;
}


/*export const ManComponent:React.FC<PropsType>=()=>{*/


/*
export const ManComponent: React.FC<PropsType> = ({title,man:{name},...prop}) => {
   // const {title,man:{name}}=props;//здесь ключевое имя name,которое достается через {}
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
            <div>
                {prop.food}
            </div>
        </div>)
}

*/
