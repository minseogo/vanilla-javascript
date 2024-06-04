window.onload = function(){
    const tabbtn = document.querySelectorAll("#tab li");
    tabbtn.forEach(function(ele, idx){
        ele.addEventListener('click', function(){

            const siblings = this.parentElement.children;
            // 나의 부모의 자식들 (html object)
            for (let sibling of siblings) {
                sibling.classList.remove('on');
            }
            // this.classList = 'on';
            // this.classList =+ ' on';
            this.classList.add('on');
        })
    })
}