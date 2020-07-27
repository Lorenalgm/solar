var carousel = document.querySelector('.pictures');

carousel.addEventListener("wheel", event => {
    if(event.deltaY > 0){
        event.target.scrollBy(300,0);
    }else{
        event.target.scrollBy(-300,0);
    }
})