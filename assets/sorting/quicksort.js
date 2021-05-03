async function quicksort(first, last) {
    if (last - first <= 1) {
        updateComparisons(1);
        setBarColour(first, "sorted");
        return;
    }
    pivot = first;
    setBarColour(pivot, "pivot");
    index = pivot + 1;

    for (var i = index; i < last; i++) {
        setBarColour(i, "sorting");
        updateComparisons(1);
        if (arrNums[i] < arrNums[pivot]) {
            updateSwaps(1);
            swap(i, index);
            await pause();

            index++;
        }
        setBarColour(i, "unsorted");
    }
    swap(pivot, index - 1);
    setBarColour(pivot, "unsorted");
    setBarColour(index - 1, "pivot");
    await pause();
    setBarColour(index - 1, "sorted");
    await quicksort(first, index - 1);
    await quicksort(index, last);
}
