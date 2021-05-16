/*type LessonType={
    title:string;
}*/

import {ManType} from './destruction';

let props1:ManType;
beforeEach(()=>{
    props1={
        name:'alex',
        age:32,
        lesson:[{title:'1'},{title: '2'}],
        address:{
            street:{
                title:"Bronnay",
            }
        }

    }
})
test.skip('destruction',()=>{

    const {name:n,age:a,...propsEnd}=props1;//...propsEnd - остаточные элементы
    const {name,age}=props1;
    expect(n).toBe('alex');
    expect(a).toBe(32);
    expect(name).toBe('alex');
    expect(age).toBe(32)
    expect(propsEnd.lesson?.length).toBe(2);
    expect(propsEnd.address?.street.title).toBe('Bronnay')
})
test.skip('',()=>{
   const [l1,l2]=props1.lesson;
   expect(l1).toBe(2);
})
