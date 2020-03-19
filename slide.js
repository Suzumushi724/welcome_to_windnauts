function Slide(){
    var slidecontents = document.getElementsByClassName('slidecontents');
    var showTiming = 0;
    var WindowHeight = window.innerHeight;

    for(var i=0;i<slidecontents.length;i++){
        var elemY = slidecontents[i].getBoundingClientRect().top; 
        
        if(WindowHeight - showTiming > elemY) {
            slidecontents[i].classList.add('slide');
        }
        else if(WindowHeight < elemY) {
            slidecontents[i].classList.remove('slide');
           
        }
    }
}

Slide();
window.addEventListener('scroll',Slide);