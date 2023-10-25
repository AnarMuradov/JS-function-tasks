// ? 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.
// ? Example [12,32,44,56,45] = >45 =>4-cu indeksdir.

// let params =[12,32,44,56,45]

// function findElmIndex() {
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]==45) {
               
//             return i
//         } 
//     }
// }
// console.log("45 " + findElmIndex() + "-cu indeksdir")


// ? 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.

// ? Example: const arr =  [3,2,1,4,3,1,5,6,9,3,2,52,3,2]   let num = 3   ->     4  tekrar 


// const arr =  [3,2,1,4,3,1,5,6,9,3,2,52,3,2]
// let num =+prompt()
// let res =0
// function findElm() {
//     for (let i = 0; i < arr.length; i++) {
//         if (num==arr[i]) {
//             res++
//         } 
//     }
//     return res
//     }
// console.log( num + " -> " + findElm() + " tekrar");


// ? 3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə
// ? qalan elementlərin cəmini tapan function.
// ? Example :
// ? [2,1,3,4,6]     -> 9   


// const arr =  [2,1,3,4,6]
// let max =arr[0]
// let min =arr[0]
// let sum = 0
// function findsum() {
//     for (let i = 0; i < arr.length; i++) {
//         if (max<arr[i]) {
//            max=i
//         } 
//         else if(min>arr[i]) {
//             min=i
//          } 
//         }
//         arr[max]=0;
//         arr[min]=0;
//         for(let i = 0; i < arr.length; i++){
//             sum=sum+arr[i]
//         }
//         return sum
//     }
// console.log(findsum());


// ? 4.Verilmis n ededinin son reqemini onun evveline getirerek yeni bir eded duzelden function.
// ?    (misalcun daxil edilen eded 475 olarsa, geriye 547 qaytarsin)

// function reverse() {
// let num = +prompt()
// if(num > 0 && num <100){
//   num=(num%10)*10+(num-(num%10))/10
//   return num

// }
// else if (num > 100 && num <1000) {
//     num=(num%10)*100+(num-(num%10))/10
//     return num
    
// }
// else if (num > 1000 && num <10000) {
//    num= (num%10)*1000+(num-(num%10))/10  
//     return num
// }
// else{
//     return "the number is too large or negative please choose a normal number "
// }
// }
// console.log(reverse());