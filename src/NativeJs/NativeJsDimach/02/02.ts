type TechType = {
    id: number;
    title: string;
}
type CityType1 = {
    title: string;
    countyTitle: string;
}
type AddressType1 = {
    streetTitle: string;
    city: CityType1;
}
 export type StudentType = {
    name: string;
    age: number;
    isActive:boolean;
    address: AddressType1;
    technologies: Array<TechType>
}
 export const student: StudentType = {
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

export function splitToWords(str:string) {
    return str.toLowerCase().split(' ');
}
console.log(student.technologies[0].title);