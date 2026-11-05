const hasDuplicate = (input) => {
  return new Set(input).size < input.length
}
 
let a = hasDuplicate([1,4,2,3])
console.log(a)

const isAnagram = (s, t) => {
  if(s.length != t.length) return false
  let mapS = {}
  let mapT = {}
  for(let i = 0; i < s.length; i++) {
    mapS[s[i]] = mapS[s[i]] == undefined ? 1 : mapS[s[i]]++
    mapT[t[i]] = mapT[t[i]] == undefined ? 1 : mapT[t[i]]++
  }
  for(let key in mapS) {
    if(mapS[key] != mapT[key]) return false
  }
  return true
}

let b = isAnagram('abbt', 'btbaa')
console.log(b)

const hasSum = (input, target) => {
  let map = {}
  for(let i = 0; i < input.length; i++) {
    const val = input[i]
    if((target -val ) in map) return [map[target -val], i]
    map[val] = i
  }
}

let c = hasSum([3,4,5,6], 7)
console.log(c)

const groupAnagram = (input) => {
  let map = {}
  for(let item of input) {
    let key = createKey(item)
    if(map[key] == undefined) map[key] = []
    map[key].push(item);
  }
  return Object.values(map);
}
const createKey = (s) => {
  let arr = new Array(26).fill(0);
  for(let c of s) {
    let pos = c.charCodeAt(0) - 'a'.charCodeAt(0);
    arr[pos]++
  }
  return arr.join(',')
}
let d = groupAnagram(["act","pots","tops","cat","stop","hat"])
console.log(d)

const topK =(nums, k) => {
  let map = {}
  for(let num of nums) {
    if(!(num in map)) map[num] = 0
    map[num]++
  }
  let minHeap = new MinHeap(x=>x[1]);
  for(let key in map) {
    minHeap.push([key, map[key]]);
    if(minHeap.size > k) minHeap.pop()
  }
  let rv = []
  for(let i = 0; i < k; i++) {
    rv.push(minHeap.pop()[0])
  }
  return rv
}
  class MinHeap {
    comparator;
    constructor(comparator) {
      this.comparator = comparator
    }
    pop(){
      
    }
    push(){
      
    }
  }
const bucketSort = (nums, k) => {
  let map = {}
  let rv = []
  for(let num of nums) {
    if(!(num in map)) map[num] = 0
    map[num]++
  }
  let freq = Array(nums.length);
  for(let num in map) {
    freq[+map[num]] = num
  }
  for(let i = freq.length - 1; i >= 0; i--) {
    if(freq[i] != undefined){rv.push(freq[i])
                            k--}
    if(k === 0) break
  }
  return rv
}
let z = bucketSort([7,7], 1)
console.log(z)
