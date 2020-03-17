function showElementAnimation() {

    var element = document.getElementsByClassName('contents');
    if(!element) return; // 要素がなかったら処理をキャンセル
    var images = new Array('url(images/wind.jpg)','url(images/avionics.jpg)','url(images/ski.jpg)','url(images/aside.jpg)');
    var colors = new Array('#36ab77','#e04747', '#e7ff03', '#035fff');
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
            if(i==0){
                element[i].style.backgroundImage = 'none';
                //document.body.style.backgroundImage = 'none';
            }
            else{
                element[i].style.backgroundImage= images[i];
                //document.body.style.backgroundImage = images[i];
                
            }
        } 
        
        else if(WindowHeight < elemY) {
            element[i].classList.remove('show');
        }

        else{
            document.body.style.backgroundColor = '#000';
            document.body.style.backgroundImage = 'none';
        }
        
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
