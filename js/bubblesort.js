async function bubble() {
    for (i = 0; i < barNums.length; i++) {
        for (j = 0; j < barNums.length - i; j++) {
            bars[j].setAttribute("id", "current");
            if (barNums[j] > barNums[j + 1]) {
                bars[j + 1].setAttribute("id", "current");
                bars[j].style.height = `${
                    (barNums[j + 1] / barNums.length) * 100
                }%`;
                bars[j + 1].style.height = `${
                    (barNums[j] / barNums.length) * 100
                }%`;

                var temp = barNums[j + 1];
                barNums[j + 1] = barNums[j];
                barNums[j] = temp;
            }
            await new Promise((r) => setTimeout(r, 200));

            bars[j].setAttribute("id", "unsorted");
        }
        bars[bars.length - i - 1].setAttribute("id", "sorted");
    }
}
