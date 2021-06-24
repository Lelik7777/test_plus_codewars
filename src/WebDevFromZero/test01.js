function test01() {

    console.log('test01');

    function test02() {
        console.log('test02');
    }

    test02();

}

function unixTime() {
    let time = Math.floor(new Date().getTime());
    console.log(time);
}
unixTime();
unixTime();
unixTime();
unixTime();
unixTime();