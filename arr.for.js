// const nav_data = [
//     {
//         gnb_li_a : "회사소개",
//         gnb_li_href : "./company.html"
//     },
//     {
//         gnb_li_a : "제품소개",
//         gnb_li_href : "./product.html"
//     },
//     {
//         gnb_li_a : "커뮤니티",
//         gnb_li_href : "./board.html"
//     }
// ]
// console.log{
//     nav_data[2].gnb_li_a
// }

console.log("한번만 실행되지");
for(var i = 0; i < 5; i++ ){
    console.log("나는 다섯번 실행되지");
}

// 연산식
let count = 10;
    count += 100; // 110
    count += 1; // 111
    ++count; // 112
    count++; // 112

    console.log(count); // 113

let multy = 10;
    multy = multy * 3; // multy *= 3 // 30

    console.log(multy);
  

// 문자연산식
let mystudy = "리액트";
    mystudy = "리액트" + "뷰" ; // mystudy += "뷰" ; -> 문자는 결합만 가능함 

    console.log(mystudy)

let startjs = 10; 
    startjs += 10; // 20
    startjs += "원"; // 20원 -> 문자화된 식은 계속해서 문자로 인식하여 결합식만 실행함
    startjs += 100; // 20원 100
    startjs += 100; // 20원 100100

    console.log(startjs)
