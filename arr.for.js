const nav_data = [
    {
        gnb_li_a : "회사소개",
        gnb_li_href : "./company.html"
    },
    {
        gnb_li_a : "제품소개",
        gnb_li_href : "./product.html"
    },
    {
        gnb_li_a : "커뮤니티",
        gnb_li_href : "./board.html"
    },
    {
        gnb_li_a : "인트라넷",
        gnb_li_href : "./intro.html"
    }
]

// console.log(nav_data[1].gnb_li_href);
// console.log(nav_data[1]["gnb_li_href"]);

let mygnb ="";
for(let liea = 0; liea < 4; liea++ ){ // for(let liea = 0; liea < nav_data.legth; liea++ ) 도 사용가능함
    mygnb += nav_data[liea].gnb_li_href;
}
console.log( mygnb );

// document.getElementsByClassName("gnb").length // 풀이 :class gnb의 개수만큼
// document.querySelectorAll("gnb").length;

let mygnb2 = "";
for(let v in nav_data){
//    console.log("fonin문처리 : ", v);
    mygnb2 += `(nav_data[v].gnb_li_href)\n` ;
}
console.log(mygnb2)

// console.log{
//     nav_data[2].gnb_li_a
// }

// console.log("한번만 실행되지");
for(var i = 0; i < 5; i++ ){
    // console.log("나는 다섯번 실행되지");
}

// 연산식
let count = 10;
    count += 100; // 110
    count += 1; // 111
    ++count; // 112
    count++; // 112

    // console.log(count); // 113

let multy = 10;
    multy = multy * 3; // multy *= 3 // 30

    // console.log(multy);
  

// 문자연산식
let mystudy = "리액트";
    mystudy = "리액트" + "뷰" ; // mystudy += "뷰" ; -> 문자는 결합만 가능함 

    // console.log(mystudy)

let startjs = 10; 
    startjs += 10; // 20
    startjs += "원"; // 20원 -> 문자화된 식은 계속해서 문자로 인식하여 결합식만 실행함
    startjs += 100; // 20원 100
    startjs += 100; // 20원 100100

    // console.log(startjs)

for(let i = 0; i < 10; i++){
    // console.log("나 열번 나오게 해줘")
}

let meg = "";
for(let i = 0; i < 10; i++ ){
    meg += "나 \"열번\"나오게 해줘 \n";
}

console.log(meg)