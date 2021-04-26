async function bubblesort() {
    for (i = 0; i < arrLen; i++) {
        for (ii = 0; ii < arrLen - i - 1; ii++) {
            setBarColour(ii, "red");
            setBarColour(ii + 1, "red");
            await pause();
            if (arrNums[ii] > arrNums[ii + 1]) {
                swap(ii, ii + 1);
                await pause();
            }

            setBarColour(ii, "rgb(0, 140, 255)");
            setBarColour(ii + 1, "rgb(0, 140, 255)");
        }
        setBarColour(arrLen - i - 1, "green");
    }
}
