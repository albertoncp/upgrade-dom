const allDivs = document.querySelectorAll('.fn-insert-here');

for (const div of allDivs) {
    const myP = document.createElement('p');
    myP.innerText = "Voy dentro";
    div.appendChild(myP);
}
