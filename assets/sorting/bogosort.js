async function bogosort() {
    while (!isSorted()) {
        arrNums = arrNums.sort(() => Math.random() - 0.5);
        for (i = 0; i < arrLen; i++) {
            setBarHeight(i, arrNums[i]);
            updateSwaps(1);
        }
        await pause();
    }
    for (i = 0; i < arrLen; i++) {
        setBarColour(i, "sorted");
    }
}

function isSorted() {
    for (i = 1; i < arrLen; i++) {
        updateComparisons(1);
        if (arrNums[i - 1] > arrNums[i]) {
            return false;
        }
    }
    return true;
}
