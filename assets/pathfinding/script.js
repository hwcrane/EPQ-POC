var cols = window.innerWidth / 30;
var rows = window.innerHeight / 50;
grid = document.getElementById("grid");

for(var i = 0; i < rows; i++){
    var row = document.createElement("tr");
    row.classList.add("node-row")
    row.setAttribute("id", `row-${i}`)
    for(var j = 0; j < cols; j++){
        var node = document.createElement("td");
        node.classList.add("node");
        node.classList.add("empty");
        node.setAttribute("id", `${j}-${i}`)
        row.appendChild(node);
    }
    grid.appendChild(row)
}

var mouseDown = 0;
document.body.onmousedown = function() { 
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}

function swap(node){
    if(node.matches(".empty")){
        node.classList.replace("empty", "wall");
    }
    else if(node.matches(".wall")){
        node.classList.replace("wall", "empty");
    }
}

nodeDivs = document.querySelectorAll(".empty");
nodeDivs.forEach(node => {
    node.addEventListener("mouseenter", function(){
        if(mouseDown == 1){
            swap(node);
        }
    });
    node.addEventListener("mousedown", function(){
        swap(node);
    });
});
