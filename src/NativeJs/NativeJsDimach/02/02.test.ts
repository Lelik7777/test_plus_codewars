import {splitToWords} from './02';

let str:string;
beforeEach(()=>{
    str='Hello my friends';
})
test.skip('splitToWords must be correct',()=>{
    const res=splitToWords(str);
    expect(res.length).toBe(3);
    expect(res[0]).toBe('hello');
    expect(res[1]).toBe('my');
    expect(res[2]).toBe('friends');

});
