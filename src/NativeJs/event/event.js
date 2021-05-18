function countRabbits() {
    for (let i=0;i<3;i++){
        alert(`rabbits=${i}`);
        console.log('hello');
    }
}
function hello(){
    alert('hello');
}
document.getElementById('rabbit').addEventListener('click',hello);
