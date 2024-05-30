// const nav_data = [
//     {
//     gnb_li_a : "회사소개",
//     gnb_li_href : "./company.html"
//     },
//     {
//     gnb_li_a : "제품소개",
//     gnb_li_href : "./product.html"
//     },
//     {
//     gnb_li_a : "커뮤니티",
//     gnb_li_href : "./board.html"
//     },
//     {
//     gnb_li_a : "인트라넷",
//     gnb_li_href : "./intro.html"
//     }
//     ]
    // let mygnb = "";
    //     for(let liea = 0; liea < nav_data.length; liea++ ){
    //         mygnb += nav_data[liea].gnb_li_href;
    //     }
    //     console.log( mygnb );

    // let mygnb2 = "";
    //     for(let v in nav_data){
    //         mygnb2 += `${nav_data[v].gnb_li_href}\n` ;
    //     }
    //     console.log(mygnb2);

const nav_data = [
    {
        gnb_li_a : "MEN",
        gnb_li_href : "./MEN.html"
    },
    {
        gnb_li_a: "WOMEN",
        gnb_li_href : "./WOMEN.html"
    },
    {
        gnb_li_a: "SPORTS",
        gnb_li_href : "./sports.html"
    },{
        gnb_li_a: "DISCOVERY",
        gnb_li_href : "./discovery.html"
    },
]

let result = ""; 
    for(let x in nav_data){
        result += `${nav_data[x].gnb_li_href}\n`
    }
    console.log(result)


