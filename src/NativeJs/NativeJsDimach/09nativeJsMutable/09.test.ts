function increaseAge(u: UserTypeN) {
    u.age = u.age + 1;
}

type UserTypeN = {
    name: string;
    age: number;
}
type User1Type = {
    name: string,
    age: number;
    address: { title: string };
}
test('test with user=object-reference type', () => {
    let user = {
        name: 'alex',
        age: 44,
    }
    increaseAge(user);
    expect(user.age).toBe(45);
    expect(user.name).toBe('alex')
    let newUser = user;
    newUser.age = 100;
    expect(user.age).toBe(100);
});
test('test with user2 +address=object-reference type', () => {
    let user1: User1Type = {
        name: 'alex',
        age: 44,
        address: {
            title: 'London',
        }
    }
   // let address = user1.address.title;
    let user2:User1Type = {
        name: 'kolya',
        age: 34,
        address: user1.address
    }
    user2.address.title = 'moscow';
    expect(user1.address.title).toBe('moscow')
});test('test with user2 array-reference type', () => {
    let user1: User1Type = {
        name: 'alex',
        age: 44,
        address: {
            title: 'London',
        }
    }
   // let address = user1.address.title;
    let user2:User1Type = {
        name: 'kolya',
        age: 34,
        address: user1.address
    }
    let users=[user1,user2,{name:'vika',age:30,address:user2.address}];
    let admins=[user1,user2];
    admins[0].name='Alex';
    expect(user1.name).toBe('Alex');

});
test('test with array=reference type', () => {
    let users = [
        {
            name: 'alex',
            age: 44,
        },
        {
            name: 'nick',
            age: 40,
        },
    ];
    let admins = users;
    admins.push({name: 'new chel', age: 30});
    expect(users[2]).toEqual({name: 'new chel', age: 30});
});
test('test with value type', () => {

    let userCount = 100;
    let adminCount = userCount;
    adminCount = 200;
    expect(userCount).toBe(100);
});