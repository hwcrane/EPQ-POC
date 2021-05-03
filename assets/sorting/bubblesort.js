async function bubblesort() {
    for (i = 0; i < arrLen; i++) {
        for (ii = 0; ii < arrLen - i - 1; ii++) {
            setBarColour(ii, "sorting");
            setBarColour(ii + 1, "sorting");
            updateComparisons(1);
            await pause();

            if (arrNums[ii] > arrNums[ii + 1]) {
                updateSwaps(1);
                swap(ii, ii + 1);
                await pause();
            }

            setBarColour(ii, "unsorted");
            setBarColour(ii + 1, "unsorted");
        }
        setBarColour(arrLen - i - 1, "sorted");
    }
}
