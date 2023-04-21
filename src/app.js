const doc = {
    getButton : document.querySelector("#getButton"),
    setButton : document.querySelector("#setButton"),
    delButton : document.querySelector("#delButton")
}
window.addEventListener("load", ()=>{
    init()
})

function init(){
    doc.setButton.addEventListener("click", ()=>{
        startSet()
    })
    doc.getButton.addEventListener("click", ()=>{
        startGet()
    })
}

function startSet(){
    localStorage.setItem("jelszó","titok")
}
function startGet(){
    let pass = localStorage.getItem("jelszó")
    console.log(pass)
}