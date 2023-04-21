const doc = {
    getButton : document.querySelector("#getButton"),
    setButton : document.querySelector("#setButton"),
    delButton : document.querySelector("#delButton"),
    passwordOutput: document.querySelector("#password")
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
    doc.delButton.addEventListener("click", ()=>{
        startDel()
    })
}

function startSet(){
    let pass = "titok"
    localStorage.setItem("jelszó",pass)
}
function startGet(){
    let pass = localStorage.getItem("jelszó")
    doc.passwordOutput.value = pass
}
function startDel(){
    localStorage.removeItem("jelszó")
    doc.passwordOutput.value = ""
}