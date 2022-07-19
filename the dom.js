const container = document.querySelector('#container');

const p = document.createElement('p');
p.textContent = "Hey I’m red!";
container.appendChild(p);
p.style.color = "red";

const h3 = document.createElement('h3');
h3.textContent = "I’m a blue h3!";
container.appendChild(h3);
h3.style.color = "blue";

const div = document.createElement('div');
div.classList.add('newDiv');
container.appendChild(div);
div.style.cssText = 'border: black; background: pink;';

const newDiv = document.querySelector('.newDiv');
const h1 = document.createElement('h1');
h1.textContent = "I’m in a div";
newDiv.appendChild(h1);

const newP = document.createElement('p');
newP.textContent = "ME TOO!";
newDiv.appendChild(newP);
