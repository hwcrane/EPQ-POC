async function insertionSort() {
    for (var i = 0; i < arrLen; i++) {
        var j = i - 1;
        current = i;
        setBarColour(current, "red");
        while (j > -1 && arrNums[current] < arrNums[j]) {
            await pause();

            swap(current, j);
            setBarColour(current, "green");
            current--;

            setBarColour(current, "red");
            j--;
        }
        setBarColour(current, "green");
    }
}
