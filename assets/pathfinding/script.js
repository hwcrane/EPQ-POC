var mouseDown = 0;
var drawingMode = "";
var moved = false;
var startMoving = false;
var startLoc;
var targetMoving = false;
var targetLoc;

class PriorityQueue {
    constructor() {
        this.list = [];
    }

    enqueue(node) {
        for (var i; i < this.list.length; i++) {
            if (node.f() < this.list[i].f()) {
                this.list.slice(i, 0, node);
                break;
            }
        }
    }

    dequeue() {
        return this.list.pop();
    }

    getCurrent() {
        return this.list[0];
    }
}
class Node {
    constructor(row, col, type, total_rows, total_cols) {
        this.row = row;
        this.col = col;
        this.type = type;
        this.neighors = [];
        this.total_rows = total_rows;
        this.total_cols = total_cols;
        this.g;
        this.h;
    }

    f() {
        return this.g + this.h;
    }

    getPos() {
        return this.row, this.col;
    }

    is(type) {
        return this.type == type;
    }
    set(newtype) {
        document
            .getElementById(`${this.col}-${this.row}`)
            .classList.replace(this.type, newtype);
        this.type = newtype;
    }

    updateNeighbors(grid) {
        this.neighors = [];

        if (
            this.row < this.total_rows - 1 &&
            !grid[this.row + 1][this.col].is("wall")
        ) {
            this.neighors.push(grid[this.row + 1][this.col]);
        }
        if (this.row > 0 && !grid[this.row - 1][this.col].is("wall")) {
            this.neighors.push(grid[this.row - 1][this.col]);
        }
        if (
            this.col < this.total_cols - 1 &&
            !grid[this.row][this.col + 1].is("wall")
        ) {
            this.neighors.push(grid[this.row][this.col + 1]);
        }
        if (this.col > 0 && !grid[this.row][this.col - 1].is("wall")) {
            this.neighors.push(grid[this.row][this.col - 1]);
        }
    }
}

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
                    moved = true;
                    swapStart(node);
                } else if (node.matches(".empty") && targetMoving) {
                    moved = true;
                    swapTarget(node);
                } else if (node.matches(`.${drawingMode}`)) swap(node);
            }
        });
        node.addEventListener("mouseup", function () {
            if ((node.matches(".start") || node.matches(".target")) && moved) {
                startMoving = false;
                targetMoving = false;
                moved = false;
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
function createNodes() {
    var cols = Math.floor(window.innerWidth / 30);
    var rows = Math.floor(window.innerHeight / 50);
    var grid = new Array(rows);
    for (var i = 0; i < rows; i++) {
        var n = new Array(cols);
        for (var j = 0; j < cols; j++) {
            n[j] = new Node(
                i,
                j,
                document.getElementById(`${j}-${i}`).classList[1],
                rows,
                cols
            );
        }
        grid[i] = n;
    }
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i][j].updateNeighbors(grid);
        }
    }
    return grid;
}
function e(node1, node2) {
    var r1,
        c1 = node1.getPos();
    var r2,
        c2 = node2.getPos();
    return Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(c1 - c2), 2);
}
function aStar(grid) {
    var start;
    var target;
    var cameFrom = {};
    var openList = [];
    var closedList = [];
    grid.forEach((row) => {
        row.forEach((n) => {
            if (n.is("start")) {
                start = n;
            } else if (n.is("target")) {
                target = n;
            }
        });
    });
    openList.push(closed);
}
function startPathfinding() {
    document.getElementById("grid").interactable = true;
}
createDivs();
