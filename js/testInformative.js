let cards = document.querySelectorAll('.card');
let tiempo = 1000;

function cardsUp (){
    for (let i = 0; i<cards.length ; i++) {
        setTimeout( () =>{ cards[i].classList.toggle('arriba') } , tiempo);tiempo = tiempo + 1000;
    
    }
}
setInterval(() => cardsUp() , 5);
        
        
                
    
