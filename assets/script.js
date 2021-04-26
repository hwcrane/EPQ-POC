function makeBars() {
    arrLen = document.getElementById("sizeBar").value;

    // clears array
    document.getElementById("arrayBox").innerHTML = "";

    // creates array 1 -> arrLen
    arrNums = [];
    for (i = 0; i < arrLen; i++) {
        arrNums.push(i + 1);
    }
    // shuffles array
    arrNums = arrNums.sort(() => Math.random() - 0.5);

    for (i = 0; i < arrLen; i++) {
        var bar = document.createElement("DIV");

        bar.classList.add("arrayBar");
        bar.setAttribute("id", `B${i}`);
        bar.style.height = `${(arrNums[i] / arrLen) * 100}%`;
        document.getElementById("arrayBox").appendChild(bar);
    }
}

function pause(change = 1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, speed * 100 * change);
    });
}

function setSpeed() {
    speed = 4 - document.getElementById("speedBar").value;
}

function setBarHeight(barNum, height) {
    bar = document.getElementById(`B${barNum}`);
    bar.style.height = `${(height / arrLen) * 100}%`;
}

function setBarColour(barNum, colour) {
    bar = document.getElementById(`B${barNum}`);
    bar.style.backgroundColor = `${colour}`;
}

async function sort() {
    document.getElementById("sizeBar").disabled = true;
    document.getElementById("dropdown").disabled = true;
    document.getElementById("start").disabled = true;
    document.getElementById("randomize").disabled = true;
    switch (document.getElementById("dropdown").value) {
        case "":
            window.alert("Please select the algorithm");
            break;
        case "Bubble":
            await bubblesort();
            break;
        case "insertion":
            await insertionSort();
            break;
        case "quick":
            await quicksort(0, arrLen);
            break;
        case "bogo":
            await bogosort();
            break;
    }
    document.getElementById("sizeBar").disabled = false;
    document.getElementById("dropdown").disabled = false;
    document.getElementById("start").disabled = false;
    document.getElementById("randomize").disabled = false;
}

function swap(n1, n2) {
    var temp = arrNums[n1];
    setBarHeight(n1, arrNums[n2]);
    setBarHeight(n2, arrNums[n1]);
    arrNums[n1] = arrNums[n2];
    arrNums[n2] = temp;
}

var speed = 2;
var arrLen;
var arrNums;
makeBars();
