import {multi, splitIntoWords, sum} from './01';
let a:number,b:number,c:number;
beforeEach(()=>{
    a=5;
    b=4;
    c=6;
})
test.skip('sum should be correct',()=>{

    const res=sum(a,b);
    const res2=sum(a,c)
    expect(res).toBe(9);
    expect(res2).toBe(11);
})
test.skip('multi must be correct ',()=>{
     a=3;
     b=2;
    const res=multi(a,b);
    expect(res).toBe(6);
})
test.skip(' splitIntoWords must be correct',()=>{
    const str1="Hello my friends";
    const res1=splitIntoWords(str1);
    const str2= 'js - programming language';
    const res2=splitIntoWords(str2);
    expect(res1.length).toBe(3);
    expect(res1[0]).toBe('hello');
    expect(res1[1]).toBe('my');
    expect(res1[2]).toBe('friends');
    expect(res2.length).toBe(4);
    expect(res2[0]).toBe('js');
    expect(res2[1]).toBe('-');
    expect(res2[2]).toBe('programming');
    expect(res2[3]).toBe('language');
})