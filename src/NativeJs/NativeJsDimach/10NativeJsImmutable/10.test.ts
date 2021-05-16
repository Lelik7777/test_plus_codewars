import {
    addBook,
    addBooks,
    changeAddress,
    changeAddress2,
    changeHousePerson,
    HouseInAddress,
    makeHairStyle,
    PersonType,
    PersonWithBooksType,
    PersonWithLaptop,
    upgradeLaptop
} from './10';


test('immutable function', () => {
    let person: PersonType = {
        name: 'alex',
        hair: 32,
        address: {
            city: 'minsk'
        }
    }
    const personCutHair = makeHairStyle(person, 2);
    person = makeHairStyle(person, 4)
    expect(personCutHair.hair).toBe(16);
    expect(person.hair).toBe(8);
})
test('immutable function with change address', () => {
    let person: PersonType = {
        name: 'alex',
        hair: 32,
        address: {
            city: 'minsk'
        }
    }
    const personNewAddress = changeAddress(person, 'london');
    person = makeHairStyle(person, 4)
    expect(person.address.city).toBe('minsk');
    expect(personNewAddress.address.city).toBe('london');
})
test('immutable function with change address+laptop', () => {
    let person: PersonWithLaptop = {
        name: 'alex',
        hair: 32,
        address: {
            city: 'minsk'
        },
        laptop: {
            title: 'asus'
        }
    }
    const personNewAddress = changeAddress2(person, 'london')
    const personAny = person;
    //person=personNewAddress;
    expect(person.address.city).toBe('minsk');
    expect(personNewAddress.address.city).toBe('london');
    expect(person).not.toBe(personNewAddress);
    expect(person).toEqual(personAny);
    expect(person.laptop).toEqual(personNewAddress.laptop);
    expect(person.address).not.toEqual(personNewAddress.address)
})
test('immutable function with change address+ upgrade laptop', () => {
    let person: PersonWithLaptop = {
        name: 'alex',
        hair: 32,
        address: {
            city: 'minsk'
        },
        laptop: {
            title: 'asus'
        }
    }
    const personWithNewLaptop = upgradeLaptop(person, 'apple');
    expect(person.laptop.title).not.toEqual(personWithNewLaptop.laptop.title);
    expect(person.laptop).not.toEqual(personWithNewLaptop.laptop);
    expect(person).not.toEqual(personWithNewLaptop);
    expect(person.address).toEqual(personWithNewLaptop.address);
    expect(person.laptop.title).toBe('asus');
    expect(personWithNewLaptop.laptop.title).toBe('apple');

})
test('immutable function with change address+ laptop+books', () => {
    let person: PersonWithLaptop & PersonWithBooksType = {
        name: 'alex',
        hair: 32,
        address: {
            city: 'minsk'
        },
        laptop: {
            title: 'asus'
        },
        books: ['react', 'html&css', 'tutorial'],
    }


})
test('!!!!immutable function with change address: city and house', () => {
    let person: PersonType & HouseInAddress = {
        name: 'alex',
        hair: 32,
        address: {
            city: 'minsk',
            house: 23,
        }
    }
    const personNewAddress = changeAddress(person, 'london');
    const personNewHouse = changeHousePerson(person, 25);

    expect(personNewAddress.address.city).toBe('london');
  expect(person.address.house).toBe(23)
    expect(person).not.toEqual(personNewHouse);
    expect(person.address.city).toEqual(personNewHouse.address.city);
    expect(personNewHouse.address.house).toBe(25);
    expect(person.address.house).toBe(23)
    expect(personNewHouse.address.city).toBe('minsk')

});
test('immutable function with adding book', () => {

    let person: PersonType & HouseInAddress & PersonWithBooksType = {
        name: 'alex',
        hair: 32,
        address: {
            city: 'minsk',
            house: 23,
        },
        books: ['react', 'html', 'css'],
    }

    let personWithAddingBook = addBook(person, 'angular');

    expect(person.books.length).toBe(3);
    expect(personWithAddingBook.books.length).toBe(4);
    expect(person.books).not.toEqual(personWithAddingBook.books);
    expect(personWithAddingBook.books[3]).toBe('angular');

})


test('???immutable function with adding books', () => {

    let person: PersonType & HouseInAddress & PersonWithBooksType = {
        name: 'alex',
        hair: 32,
        address: {
            city: 'minsk',
            house: 23,
        },
        books: ['react', 'html', 'css'],
    }

    let personWithAddingBooks = addBooks(person,['angular','c++']);

    expect(person.books.length).toBe(3);
    expect(personWithAddingBooks.books.length).toBe(5);
    expect(person.books).not.toEqual(personWithAddingBooks.books);

    expect(personWithAddingBooks.books[4]).toBe('c++');

})
/*
test('???immutable function with updating books', () => {

    let person: PersonType & HouseInAddress & PersonWithBooksType = {
        name: 'alex',
        hair: 32,
        address: {
            city: 'minsk',
            house: 23,
        },
        books: ['react', 'html', 'css'],
    }

    let personWithUpdatingBooks = updateBook(person,'css','new css');

   expect(person.books).not.toEqual(personWithUpdatingBooks.books)
expect(personWithUpdatingBooks.books[2]).toBe('new css');
})
*/

