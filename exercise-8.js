const myDivs = document.querySelectorAll('div');
const myP = document.createElement('p');
myP.innerText = 'Voy en medio';


document.body.insertBefore(myP, myDivs[1]);
