async function quicksort(first, last) {
    if (last - first <= 1) {
        setBarColour(first, "green");
        return;
    }
    pivot = first;
    setBarColour(pivot, "purple");
    index = pivot + 1;

    for (var i = index; i < last; i++) {
        setBarColour(i, "red");
        if (arrNums[i] < arrNums[pivot]) {
            swap(i, index);
            await pause();

            index++;
        }
        setBarColour(i, "rgb(0, 140, 255)");
    }
    swap(pivot, index - 1);
    setBarColour(pivot, "rgb(0, 140, 255)");
    setBarColour(index - 1, "purple");
    await pause();
    setBarColour(index - 1, "green");
    await quicksort(first, index - 1);
    await quicksort(index, last);
}
