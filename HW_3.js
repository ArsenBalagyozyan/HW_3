//1.
function separateOddsAndEvens (arr) {
  let odds = [];
  let evens = [];
  for (let i = 0; i <= arr.length - 1; i++){
    arr[i] % 2 === 0 ? evens.push(arr[i]) : odds.push(arr[i])
  }
  return [odds, evens];
}
console.log(separateOddsAndEvens([45, 12, 3, 6, 17, 0]))

//2.
function filterRange (arr, a, b){
  let result = [];
  for (let i = 0; i <= arr.length - 1; i++){
    if (arr[i] >= a && arr[i] <= b) result.push(arr[i])
  }
  return result;
}

console.log(filterRange([-10, -8, 0, 10, 20], -100, 15))

//3.
const frameworks = [
{ id: 1, title: "react" },
{ id: 2, title: "angular" },
{ id: 3, title: "vue" }
];
function findById (arr, num) {
  let check = false;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].id === num) {check = true, console.log(arr[i])}
  }
   if (!check) console.log(`No Data`)
}

findById(frameworks, 3)

//4.
const arr = ['Godfather', 'Whiplash', 'Social Network'];

function generate(arr) {
  let result = [];
  for (let i = 0; i <= arr.length - 1; i++){
    let obj = {};
    obj.title = arr[i];
    obj.idx = i;
    result.push(obj)
  }
  return result;
}

console.log(generate(arr))

//5.

function removeByLetter(arr, letter) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let a = arr[i].toLowerCase();
    if (a.charAt(0) === letter) arr.splice(i, 1);
  }
  return arr;
}

console.log(removeByLetter(['Godfather', 'Game of thrones', 'Social Network'], 'g'))

//6.
function makeEqualLength(str1, str2){
  if (str1.length === str2.length) return `Please insert strings with different lengths`;
  else if (str1.length === 0 || str2.length === 0) return `Please insert valid string`;
  else if (str1.length < str2.length) {
      let a = Math.floor(str2.length / str1.length);
      return str1 = str1.repeat(a) + str1.substr(0, (str2.length - a * str1.length))
  } else {
      let a = Math.floor(str1.length / str2.length);
      return str2 = str2.repeat(a) + str2.substr(0, (str1.length - a * str2.length))
  }
}

console.log(makeEqualLength('ingenius','forest'))