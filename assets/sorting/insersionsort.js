async function insertionSort() {
    for (var i = 0; i < arrLen; i++) {
        var j = i - 1;
        current = i;
        setBarColour(current, "sorting");
        while (j > -1 && arrNums[current] < arrNums[j]) {
            await pause();

            swap(current, j);
            updateComparisons(1);
            updateSwaps(1);
            setBarColour(current, "sorted");
            current--;

            setBarColour(current, "sorting");
            j--;
        }
        updateComparisons(1);
        setBarColour(current, "sorted");
    }
}
