

window.onload = function(){
    // onload는 화면이 로딩이 끝나면 실행되는 이벤트이다.
    // addEventListener와의 차이를 꼭 기록해준다.
    // onload 이벤트는 딱 한번 실행된다.
    // 만약 2번 쓰면 그중 1개는 실행되지 않는다.
    // document.body.innerHTML = hd_yys["gnb"][0].Text;

    // document.querySelector("#gnb li").innerHTML = `<a href = "${hd_yys["gnb"][0].href}">${hd_yys["gnb"][0].Text}</a>`;

    let navitag ="";
    for(x in hd_yys.gnb){
        navitag += `<li class = '${hd_yys.gnb[x].cls[0]}'>
            <a href ='${hd_yys.gnb[x].href}' class = '${hd_yys.gnb[x].cls[1]}'>
            ${hd_yys.gnb[x].Text}
        </a>`;
        if(hd_yys.gnb[x].gnb_ul_li.length > 0 ) navitag +=`<ul>`;
        for(j in hd_yys.gnb[x].gnb_ul_li){
            navitag += `<li><a href = '${hd_yys.gnb[x].gnb_ul_li[j].href}'>
                                    ${hd_yys.gnb[x].gnb_ul_li[j].Text}
            </a>
            </li>`
        }
        if(hd_yys.gnb[x].gnb_ul_li.length > 0 ) navitag +=`</ul>`;
        navitag += `</li>`;

        
    }
    document.querySelector("#gnb").innerHTML = navitag;
}

// window.addEventListener('load', function(){})
