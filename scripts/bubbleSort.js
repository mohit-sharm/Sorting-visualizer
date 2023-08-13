async function bubbleSort() {
  isRunning = true;
  disable_buttons();
  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length) {
      changeColorGreen(0);
      continue;
    }
    for (let j = 0; j < arr.length - i - 1; j++) {
      while (isPaused) {
        await wait1();
      }

      changeColorCompare(j);
      changeColorCompare(j + 1);

      await wait1();

      if (arr[j] > arr[j + 1]) {
        let x = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = x;
        updateArrayValue(j, arr[j]);
        updateArrayValue(j + 1, arr[j + 1]);
      }
      changeColorRed(j);
      changeColorGreen(j + 1);
      await wait1();
    }
  }
  disable_buttons();
  console.log(arr.join(" "));
  isRunning = false;

  sortButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  sortButton.style.backgroundColor = "#0b2c46";
  sortButton.classList.toggle("bigButtonHover");
  sortButton.style.color = "#b8d9f6";
}
