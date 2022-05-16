let comments = document.getElementById("comments");

let buttons = document.querySelectorAll("input"); 
let enterComment = () =>{
    let div = document.createElement("div")
    div.className = "comment"; 
    let text = buttons[0].value
    if (text != null)
    {
        div.innerText = text
    }
    comments.appendChild(div)
    buttons[0].value = ""
}
buttons[1].addEventListener("click", enterComment)


