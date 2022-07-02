
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const myUl = document.createElement('ul');
document.body.appendChild(myUl);

for (const app of apps) {
    const myLi = document.createElement('li');
    
    myLi.innerText = app;
    myUl.appendChild(myLi);
}


