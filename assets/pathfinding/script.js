var mouseDown = 0;
var drawingMode = "";
var startMoving = false;
var startLoc;
var targetMoving = false;
var targetLoc;

function createDivs() {
    var cols = Math.floor(window.innerWidth / 30);
    var rows = Math.floor(window.innerHeight / 50);

    grid = document.getElementById("grid");

    for (var i = 0; i < rows; i++) {
        var row = document.createElement("tr");
        row.classList.add("node-row");
        row.setAttribute("id", `row-${i}`);

        for (var j = 0; j < cols; j++) {
            var node = document.createElement("td");
            node.classList.add("node");
            node.classList.add("empty");
            node.setAttribute("id", `${j}-${i}`);
            row.appendChild(node);
        }
        grid.appendChild(row);
    }

    startRow = Math.floor(rows / 2);
    startCol = Math.floor(rows / 5);

    document
        .getElementById(`${startCol}-${startRow}`)
        .classList.replace("empty", "start");

    document
        .getElementById(`${cols - startCol - 1}-${startRow}`)
        .classList.replace("empty", "target");

    nodeDivs = document.querySelectorAll(".node");
    nodeDivs.forEach((node) => {
        node.addEventListener("mouseenter", function () {
            if (mouseDown == 1) {
                if (node.matches(".empty") && startMoving) {
                    swapStart(node);
                } else if (node.matches(".empty") && targetMoving) {
                    swapTarget(node);
                } else if (node.matches(`.${drawingMode}`)) swap(node);
            }
        });
        node.addEventListener("mouseup", function () {
            if (node.matches(".start") || node.matches(".target")) {
                startMoving = false;
                targetMoving = false;
            }
        });
        node.addEventListener("mousedown", function () {
            if (node.matches(".empty") && startMoving) {
                swapStart(node);
                startMoving = false;
            } else if (node.matches(".empty") && targetMoving) {
                swapTarget(node);
                targetMoving = false;
            } else {
                if (node.matches(".start")) {
                    startMoving = true;
                } else if (node.matches(".target")) {
                    targetMoving = true;
                } else {
                    swap(node);
                    if (node.matches(".empty")) {
                        drawingMode = "wall";
                    } else if (node.matches(".wall")) {
                        drawingMode = "empty";
                    }
                }
            }
        });
    });
}
createDivs();

function swap(node) {
    if (node.matches(".empty")) {
        node.classList.replace("empty", "wall");
    } else if (node.matches(".wall")) {
        node.classList.replace("wall", "empty");
    }
}
function swapStart(newNode) {
    document.querySelector(".start").classList.replace("start", "empty");
    newNode.classList.replace("empty", "start");
}
function swapTarget(newNode) {
    document.querySelector(".target").classList.replace("target", "empty");
    newNode.classList.replace("empty", "target");
}
document.body.onmousedown = function () {
    mouseDown = 1;
};
document.body.onmouseup = function () {
    mouseDown = 0;
    drawingMode = "";
};
