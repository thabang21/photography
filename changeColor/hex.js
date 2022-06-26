const hex =[1, 2, 3, 4, 5, 6, 7, "A","B", "C", "E", "F"]

document.getElementById("btn").addEventListener("click",function (){

    let hexColor="#"

    for(let i=0; i<6; i++){
        hexColor = hexColor + hex[Math.floor(Math.random() * hex.length)]
    }

    document.body.style.backgroundColor = hexColor;
    document.getElementById("color").textContent = hexColor

})