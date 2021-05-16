export type PersonType = {
    name: string;
    hair: number;
    address: { city: string };
}
//правомерно ли так добавлять свойсво в объект в объекте?
export type HouseInAddress = {
    address: { house: number };
}
export type LaptopType = {
    title: string;
}
export type PersonWithLaptop = PersonType & {
    laptop: LaptopType;
}
export type PersonWithBooksType = {
    books: string[];
}

export function changeHousePerson(pers: PersonType & HouseInAddress, house: number) {
    return {
        ...pers,
        address: {
            ...pers.address,
            house: house,
        }
    }
}

export function changeAddress(pers: PersonType, city: string) {
    return {...pers, ...pers.address, address: {city: city}};

}

export function changeAddress2(pers: PersonWithLaptop, city: string) {
    return {
        ...pers,
        ...pers.address,
        address: {
            city: city
        }
    };
}

export function upgradeLaptop(pers: PersonWithLaptop, laptop: string) {
    return {
        ...pers,
        laptop: {
            ...pers.laptop,
            title: laptop,
        }
    }
}

export function makeHairStyle(pers: PersonType, pow: number) {
    let copy = {...pers, hair: pers.hair / pow};
    /* copy.hair=pers.hair/pow;*///лучше делать способом выше
    return copy;
}


export function addBook(pers: PersonType & HouseInAddress & PersonWithBooksType, book: string) {
    return {
        ...pers,
        //создается копия массива и добавляется новый элемент в этом массив
        books: [...pers.books, book],
    }
}
//как добавить массив срок?
export function addBooks(pers:PersonType&PersonWithBooksType,newBooks:string[]){
    return{
        ...pers,
        //сначала сшиваем два массива,а потом map возвращает новый массив строк
        //books: pers.books.concat(newBooks).map((b)=>b)
        books:pers.books.concat(newBooks),
    }
}

/*
export  function updateBook(pers:PersonType&PersonWithBooksType,bo:string,boN:string){
    return{
        ...pers,
        books:pers.books.map((b)=>b===bo?boN:b),

    }
}*/
