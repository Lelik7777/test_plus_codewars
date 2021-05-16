console.log('hello');
const sm = document.getElementById('small');
const md = document.getElementById('medium');
const bg = document.getElementById('big');

//через литерал
//sm.onclick=()=>alert('yo!');//установили отработчик
//sm.onclick=null;//отменили отработчик

//через  имя функции
/*const  fn=()=>alert('yo!');
sm.onclick=fn;

console.dir(sm);*/

function onClickHandler(e){
   /* console.dir(e.type);
    console.dir(e.altKey);//позволяет узнать: зажат ли alt, возвращает булеан
    console.log(e.type,e.altKey);*/
   // console.dir(e);//сведенья об элементе c учетом всех дочерних элементов
    //console.log(e.currentTarget)//сведения об элементе без дочерних элементов,только о текущем
    e.stopPropagation();
    console.log(e.target.name);//делегирование событий

}
md.onclick=onClickHandler;
//sm.onmouseover=onClickHandler;

//Практичнее использовать currentTarget, но при делегировании события используем target
//если не

// погружение события и  всплытие события.
//md.onclick=onClickHandler;
//е


