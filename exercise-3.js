const myDiv = document.createElement("div")
document.body.appendChild(myDiv)
for (let index = 0; index < 6; index++) {
    const myP = document.createElement("p")
    myP.innerText= "Hello" + index
    myDiv.appendChild(myP)
    console.log(myP)
}



