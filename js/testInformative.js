let cards = document.querySelectorAll('.card');
console.log(cards)
let tiempo = 1000;

function xxxx (){
     
    
    for (let i = 0; i<cards.length ; i++) {
        setTimeout( () =>{ cards[i].classList.toggle('arriba') } , tiempo);tiempo = tiempo + 1000;
    
}
}
    
  
        
        setInterval(() => {
            xxxx();
        } , 50);
        
        
                
    
