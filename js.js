var threeSum = function (nums) {
  const sN = nums.sort((a, b) => a - b)

  let otv = []

  let i = 0,
    j = 1,
    k = 2

  while (i < sN.length - 2) {
    let trio = sN[i] + sN[j] + sN[k]
    console.log(trio)
    if (trio === 0) {
      otv.push([sN[i], sN[j], sN[k]])
      j++
      k++
      while (nums[j] === nums[j - 1] && j < k) j++
      while (nums[k] === nums[k - 1] && j < k) k--
    } else if (trio !== 0) {
      if (k < sN.length - 1) {
        console.log('k', k)
        k++
      } else if (j < sN.length - 2) {
        console.log('j')
        j++
      } else {
        console.log('ijk')
        i++
        j = i + 1
        k = j + 1
      }
    }
  }
  let setOtv = new Set(otv)
  return [...setOtv]
}

const arr = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(arr)) // должно получится  [[-1,-1,2],[-1,0,1]]
