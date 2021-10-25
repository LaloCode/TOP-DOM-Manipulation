const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redText = document.createElement('p');
redText.style.color = 'red';
redText.textContent = "Hey I'm red!";

const blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = "I'm a blue H3!"

const pinkDiv = document.createElement('div');
pinkDiv.style.borderStyle = 'solid';
pinkDiv.style.borderColor = 'black';
pinkDiv.style.backgroundColor = 'pink';

const basicH1 = document.createElement('h1');
basicH1.textContent = "I'm in a div!";

const basicP = document.createElement('p');
basicP.textContent = 'ME TOO!';

pinkDiv.appendChild(basicH1);
pinkDiv.appendChild(basicP);

container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueH3);
container.appendChild(pinkDiv);