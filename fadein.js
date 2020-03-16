function showElementAnimation() {

    var element = document.getElementsByClassName('contents');
    if(!element) return; // 要素がなかったら処理をキャンセル
    
    var showTiming;
    if(window.innerHeight > 768){
        showTiming = 200;
    } 
    else{
        showTiming = 40;
    }
    var WindowHeight = window.innerHeight;
  
    for(var i=0;i<element.length;i++) { 
        var elemY = element[i].getBoundingClientRect().top; 
        if(WindowHeight - showTiming > elemY) {
            element[i].classList.add('show');
        } 
        
        else if(WindowHeight < elemY) {
            element[i].classList.remove('show');
        }
        
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
