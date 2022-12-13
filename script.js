let text = document.getElementById("display-text");

function updateDisplay(e){
    text.innerHTML = e.value;
}
function sortText(){
    const text = document.getElementById("input-field").value;
    let container = document.getElementById("display-text");
    container.innerHTML = "";
    let array = text.split(" ");
    array.sort((a, b) => {
        return a.toLowerCase() > b.toLowerCase();
    });

    array.forEach((word, index) => {
        setTimeout(() => {
            container.innerHTML += word + `&nbsp`;
            // container.insertAdjacentHTML("beforeend",
            //     `<h2>${word}</h2> &nbsp`
            // )    
        }, 70*index);     
    });
       
}