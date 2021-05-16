let obj={
    0:'bread',
    1:'water',
    2:'milk',
};
console.log( typeof Object.values(obj));
let arr=[1,3,5];
console.log(typeof arr)
obj[null]='hello';
const users = {
    '002': {id: '002', name: 'alex'},
    '0102': {id: '0102', name: 'bob'},
    '1003': {id: '1003', name: 'ann'},
};
const user1={id:'004',name:'ben'};
users[user1.id]=user1;

users['002'].name='alex new';
console.log(users);