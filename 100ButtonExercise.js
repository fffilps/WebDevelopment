// WRITE YOUR CODE IN HERE:
const container = document.querySelector('#container');

for(let i = 0; i < 100; i++) {
    let button = document.createElement('button');
    button.innerText = 'Some';
    container.appendChild(button);
}
