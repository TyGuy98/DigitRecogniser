const container = document.querySelector(".container");
let defaultColor = "black";
let size = 20;
let isMouseDown = false;


function createGrid(){
    const totalDivs = size * size;
    for (let i = 0; i < totalDivs; i ++){
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.flex = `1 0 calc(100% / ${size})`;


        div.addEventListener("mousedown", (e) => {
            if(e.button === 0) {
                isMouseDown = true;
                div.style.backgroundColor = defaultColor;
            }  
        });


        div.addEventListener("mouseenter", (e) => {
            if(isMouseDown) {
                div.style.backgroundColor = defaultColor;
            }
        });
            
        container.appendChild(div);
    }
}

document.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isMouseDown = true;
    } 
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

document.body.onmousedown = () => false;  




createGrid(size);
