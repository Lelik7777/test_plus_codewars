type ManType={
    name: string;
    age: number;
}
 export const people:Array<ManType>=[
    {name:'Alex Ivanov',age:35},
    {name:'Bob Orion',age:30},
    {name:'Nick Dvorkovich',age:32},
];

export function getNewArrayPeople(arr:Array<ManType>) {
    return arr.map(p => ({
        stack: 'Html,Css,Js,React',
        firstName: p.name.split('')[0],
        secondName: p.name.split(' ')[1],
    }));
}
export  function congratulationsPeople(arr:Array<ManType>){
    return arr.map(a=>({
        message: `Hello, ${a.name.split(' ')[0]}.Welcome to us!`,
    }))
}