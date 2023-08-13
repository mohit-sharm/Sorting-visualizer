async function selectionSort() {
  disable_buttons();
  isRunning = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      while (isPaused) {
        await wait1();
      }
      changeColorCompare(i);
      changeColorCompare(j);
      await wait1();

      if (arr[j] <= arr[i]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
        updateArrayValue(i, arr[i]);
        updateArrayValue(j, arr[j]);
      }
      changeColorGreen(i);
      changeColorRed(j);

      await wait1();
    }
    changeColorGreen(i);
  }

  for (let i = 0; i < arr.length; i++) {
    changeColorCompare(i);
    await wait2();
    changeColorGreen(i);
  }

  isRunning = false;
  disable_buttons();
  console.log(arr.join(" "));

  sortButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  sortButton.style.backgroundColor = "#0b2c46";
  sortButton.classList.toggle("bigButtonHover");
  sortButton.style.color = "#b8d9f6";
}
