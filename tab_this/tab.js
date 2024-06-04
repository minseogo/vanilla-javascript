window.onload = function(){
    // 페이지가 완전히 로드된 후 실행될 코드를 작성합니다.
    
    const tabbtn = document.querySelectorAll("#tab li");
    // id가 'tab'인 요소 내부의 모든 'li' 요소를 선택하여 변수 tabbtn에 저장합니다.

    tabbtn.forEach(function(ele, idx){
        // 각 'li' 요소(ele)에 대해, 인덱스(idx)와 함께 반복 작업을 수행합니다.

        ele.addEventListener('click', function(){
            // 각 'li' 요소에 클릭 이벤트 리스너를 추가합니다.

            const hrefValue = this.querySelector('a').getAttribute('href');
            // 클릭된 'li' 요소 내부의 'a' 태그에서 'href' 속성 값을 가져와 hrefValue에 저장합니다.
            
            const targetele = document.querySelector(hrefValue);
            // hrefValue 값을 targetele 변수에 저장합니다. 이 구문이 필요한 이유는 hrefValue에 저장된건 단순 문자이고, 
            // targetele 변수가 필요한 이유는 저장된것을 실제 html 요소를 선택하려면 이 구문이 필요하다. 즉 스타일을 입힐 객체를 선택하는것이다.

            const t_sibligns = document.querySelectorAll(".content > div");
            // 클래스명 'content' 안의 모든 자식 'div' 요소를 선택하여 t_sibligns 변수에 저장합니다.

            t_sibligns.forEach(function(ele, idx){
                ele.classList.add("d-none");
                // 모든 콘텐츠 영역(div)에 'd-none' 클래스를 추가하여 숨깁니다.
            });
            
            targetele.classList.remove('d-none');
            // targetele에 저장된 특정 콘텐츠 영역에서 'd-none' 클래스를 제거하여 표시합니다.

            const siblings = this.parentElement.children;
            // 클릭된 'li' 요소의 부모 요소(여기서는 'ul')의 모든 자식 요소('li')를 선택하여 siblings 변수에 저장합니다.

            for (let sibling of siblings) {
                sibling.classList.remove('on');
                // 모든 형제 'li' 요소에서 'on' 클래스를 제거합니다.
            }
            
            this.classList.add('on');
            // 클릭된 'li' 요소에 'on' 클래스를 추가하여 활성화 상태로 만듭니다.
        });
    });
};

