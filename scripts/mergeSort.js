// let arr = [1, 3, 7, 3, 4, 9, 8, 5, 55, 2, 3, 34, 65, 10, 5, 6];

async function mergeSortHelper(l, r) {
  if (l > r) {
    return;
  } else if (l == r) {
    changeColorCompare(l);
    await wait1();
    changeColorGreen(l);
    return;
  }

  let mid = Math.floor(l + (r - l) / 2);
  // console.log(l + " "  + mid + " " + r);

  await mergeSortHelper(l, mid);
  await mergeSortHelper(mid + 1, r);
  //  console.log(l + " " + r + " " + mid);

  let L = new Array(mid - l + 1);

  let R = new Array(r - mid);

  for (let i = 0; i < mid - l + 1; i++) {
    L[i] = arr[l + i];
  }

  for (let i = 0; i < r - mid; i++) {
    R[i] = arr[mid + 1 + i];
  }

  let p = 0;
  let q = 0;

  let k = l;
  // changeColorRed(l);
  // changeColorRed(r);
  while (q < r - mid && p < mid - l + 1) {
    while (isPaused) {
      await wait1();
    }

    if (L[p] <= R[q]) {
      changeColorCompare(l + p);
      changeColorCompare(mid + q);
      await wait1();

      arr[k] = L[p];
      updateArrayValue(k, arr[k]);
      changeColorGreen(l + p);
      changeColorGreen(mid + q);
      p++;
    } else {
      changeColorCompare(l + p);
      changeColorCompare(mid + q);
      await wait1();
      arr[k] = R[q];
      updateArrayValue(k, arr[k]);

      changeColorGreen(l + p);
      // console.log(mid + 1 + q);
      changeColorGreen(mid + q);
      q++;
    }
    k++;
    await wait1();
  }

  while (q < r - mid) {
    arr[k] = R[q];
    changeColorCompare(k);
    updateArrayValue(k, arr[k]);
    changeColorGreen(k);
    q++;
    k++;
  }
  while (p < mid - l + 1) {
    arr[k] = L[p];
    changeColorCompare(k);
    updateArrayValue(k, arr[k]);
    changeColorGreen(k);
    p++;
    k++;
  }
  // changeColorGreen(l);
  // changeColorGreen(r);
}

async function mergeSort() {
  disable_buttons();
  isRunning = true;

  let l = 0,
    r = arr.length - 1;

  await mergeSortHelper(l, r);

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
