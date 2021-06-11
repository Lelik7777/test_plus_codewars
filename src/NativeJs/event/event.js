function countRabbits() {
    for (let i=0;i<3;i++){
        alert(`rabbits=${i}`);
        console.log('hello');
    }
}
function hello(){
    alert('hello');
}
document.getElementById('rabbit').addEventListener('click',countRabbits);

function one(){
    alert('hello one');
}
function two(){
    alert('hello two');
}
function three(){
    alert('hello three');
}
const arrFunc=[one,two,three];
const item=document.getElementById('item');
arrFunc.map(a=>item.addEventListener('click',a));
//arrFunc.map(a=>item.removeEventListener('click',a));
/*
item.addEventListener('click',one);
item.addEventListener('click',two);
item.addEventListener('click',three);
*/
const item1=document.getElementById('item1');
function func(event) {
    alert(`${event.type} on ${event.currentTarget}`);
    alert(`coordinate of button: ${event.clientX} : ${event.clientY}`);
}
item1.addEventListener('click',func);

/*Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал. Добавьте JavaScript к кнопке
button, чтобы при нажатии элемент <div id="text"> исчезал*/
const item2=document.getElementById('hide');
const textToHide=document.getElementById('textToHide');
function hideText() {
    textToHide.style.display='none';
}
item2.addEventListener('click',hideText);

/*Создайте кнопку, которая будет скрывать себя по нажатию.*/
const item3=document.getElementById('hideMe');
function hideButton() {
    item3.style.display='none';
}
item3.addEventListener('click',hideButton);

/*
Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:*/
const field=document.getElementById('field');
let fieldCoords = field.getBoundingClientRect();
console.log(fieldCoords)
const ball=document.getElementById('ball');
function moveBall(event){
    ball.style.top=event.clientX;
    ball.style.left=event.clientY;

}
ball.addEventListener('click',moveBall);

/*
Создать меню, которое по нажатию открывается либо закрывается:*/
const sweet=document.getElementById('sweet');
const sweetList=document.getElementById('sweetList')
function hideSweets() {

}
sweet.addEventListener('click',hideSweets);