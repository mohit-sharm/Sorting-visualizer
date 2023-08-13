console.log("hi");
// 

// async function hi(){
//     console.log("HI");
// }
// let arr = [1, 5, 3, 7, 4, 8];

 async function quickSortHelper(l, r){
    if(l > r)return;
    else if(l == r){
        changeColorCompare(l);
        await wait1();
        changeColorDefault(l);
        return;
    }
    let start = l, end = r;
    let ind = Math.round(l + (r-l)/2);
    let val = arr[r];
   


  for(let i = l; i < r; i++){
    changeColorCompare(l);
    changeColorCompare(i);
    if(arr[i] <= val){
       let temp = arr[i];
       arr[i] = arr[l];
       arr[l] = temp;
     
       await wait1();
       updateArrayValue(i, arr[i]);
       updateArrayValue(l, arr[l]);
       changeColorDefault(l);
       changeColorDefault(i);
    //    await hi();
       l++;
    }else{
      await wait1();
      changeColorDefault(l);
      changeColorDefault(i);
    }
   
  }
//   await bo;
changeColorCompare(l);
changeColorCompare(end);
  let temp = arr[l];
  arr[l] = arr[end];
 
  arr[end] = temp;
  await wait1();
  updateArrayValue(l, arr[l]);
  updateArrayValue(end, arr[end]);
  changeColorDefault(l);
  changeColorDefault(end);
//   console.log(l + " " + val);

 await quickSortHelper(start, l-1);
 await quickSortHelper(l+1, r);

}



async function quickSort(){
    disable_buttons();
    isRunning = true;
   
    
    let l = 0, r = arr.length - 1;
    await quickSortHelper(l,r);

    for(let i =0;i<arr.length;i++)
    {
        changeColorCompare(i);
        await foo2();
        changeColorGreen(i);
    }

    isRunning = false;
    disable_buttons();

    sortButton.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
    sortButton.style.backgroundColor = "#0b2c46";
    sortButton.classList.toggle('bigButtonHover');
    sortButton.style.color = "#b8d9f6";

}




// console.log(arr.join(" "));
