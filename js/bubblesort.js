async function bubble() {
    for (i = 0; i < barNums.length; i++) {
        for (j = 0; j < barNums.length - i; j++) {
            bars[j].style.backgroundColor = "red";
            if (barNums[j] > barNums[j + 1]) {
                bars[j + 1].style.backgroundColor = "red";
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
            await new Promise((r) => setTimeout(r, 2));

            bars[j].style.backgroundColor = "white";
        }
        bars[bars.length - i - 1].style.backgroundColor = "green";
    }
}
