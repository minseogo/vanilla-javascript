let study = "프론트앤드";
// const myword = "그래 나도 한번" + study + "해보자!";
const myword = '그래 나도 한번 ${study} 해보자!';
console.log(myword);
// console.log("그래 나도 한번 프론트앤드 해보자!");

let _month = [2, 3, 7];
let _study = ['피그마', '뷰', '리액트'];
let _name = ['홍길동', '나훈아', '조명섭'];

const words0 = `저는 ${_month[0]}개월간의 ${_study[0]} 공부를 한 ${_name[0]} 입니다.`;
const words1 = `저는 ${_month[1]}개월간의 ${_study[1]} 공부를 한 ${_name[1]} 입니다.`;
const words2 = `저는 ${_month[2]}개월간의 ${_study[2]} 공부를 한 ${_name[2]} 입니다.`;

//console.log(words0, words1, words2);


const myarr = [
                ["네이버", "http://www.naver.com"], 
                ["다음", "http://www.daum.net"], 
                ["구글", "http://www.google.com"] 
            ]
console.log("첫번째 배열",myarr[0], typeof myarr[0],
            "첫번째배열의 첫번째값", myarr[0][0], typeof myarr[0][0] )

// console.log("<a href='http://www.naver.com'>네이버</>")

console.log(`<a href='${myarr[0][1]}'>${myarr[0][0]}</>`);
console.log(`<a href='${myarr[1][1]}'>${myarr[1][0]}</>`);
console.log(`<a href='${myarr[2][1]}'>${myarr[2][0]}</>`);


const myarrobj = {
                    _month : [2,3,7],
                    _study : ['피그마', '뷰', '리액트'],
                    _name : ['홍길동', '나훈아', '조명섭']
                }
console.log(myarrobj._study[0])


const gnb = {
            d1 :{
                Text : "회사소개",
                href : "./company.html"
            },
            d2 :[
                {
                    Text : "ceo인사말",
                    href : "./ceo.html"
                },
                {
                    Text : "조직도",
                    href : "./organ.html"
                }
            ]
        }

console.log(`<a href ="${gnb.d1.href}">${gnb.d1.Text}</a>`)
console.log(`<a href ="${gnb.d2[0].href}">${gnb.d2[0].Text}</a>`)
console.log(`<a href ="${gnb.d2[1].href}">${gnb.d2[1].Text}</a>`)

// 나의 펫을 object로 표현하세요

const pet = {
                type : "고양이",
                age : 3,
                name : "심바",
                skill: function(){
                    return "고개를 옆으로 돌리고 야옹한다";
            }
        }

console.log(`나의 펫의 종류는 ${pet.type}, 나이는${pet.age}, 이름은 ${pet.name}이고, 애교는 ${pet.skill()}입니다.`)

