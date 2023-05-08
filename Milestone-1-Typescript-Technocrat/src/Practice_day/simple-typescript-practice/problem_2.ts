function checkAndReturn(nums1: number[], nums2: number[]) {
  let newArray: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        newArray.push(nums2[j]);
      }
    }
  }
  return newArray;
}

console.log(checkAndReturn([1, 2, 3, 4, 5], [2, 4, 6, 8]));
