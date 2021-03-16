function run() {
    switch (document.getElementById("dropdownting").value) {
        case "":
            window.alert("Please select the algorithm");
            break;
        case "Bubble":
            bubble(arrLen);
            break;
    }
}

function makeBars() {
    var arrLen = document.getElementById("arrLen").value;

    document.getElementById("barContainer").innerHTML = "";
    bars = [];
    barNums = [];
    for (i = 0; i < arrLen; i++) {
        barNums.push(i + 1);
    }
    barNums = barNums.sort(() => Math.random() - 0.5);
    for (i = 0; i < arrLen; i++) {
        bars.push(document.createElement("DIV"));

        bars[i].classList.add("bar");
        bars[i].style.height = `${(barNums[i] / arrLen) * 100}%`;
        bars[i].style.width = `${100 / arrLen}%`;
        bars[i].style.margin = `0 ${10 / arrLen}%`;
        document.getElementById("barContainer").appendChild(bars[i]);
    }
}
var barNums = [];
var bars = [];
window.onload = makeBars();
