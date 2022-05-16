function explanation(title){
    let array = document.getElementsByClassName("content");
    for(let ele of array ){
        if( ele == title){
            ele.style.display = "inline";
        }
        else{
            ele.style.display = "none";
        }
    }

}