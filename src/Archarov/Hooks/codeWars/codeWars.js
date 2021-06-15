//задачка с тестового собеса
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
let page = {
    content: '',
    render() {
        document.write(this.content)
    }
}
page.content = `<div>hello,my friend</div>`;
page.render();
let obj = {
    #state;
    state: {
        name: 'alex',
        age: 23,
    },
    getState() {
        return this.#state;
    }
}
console.log(obj._state.name);