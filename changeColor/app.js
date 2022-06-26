

const colors = ["green", "yellow", "blue", "gold", "red"]


document.getElementById("btn").addEventListener("click",function(){


    document.body.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)]; 
    document.getElementById("color").textContent= colors[Math.floor(Math.random() * colors.length)] 
})