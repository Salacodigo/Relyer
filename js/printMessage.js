
function printMessage(maincolor, secondcolor, message, messageType) {

    let sendMessage = document.createElement('div')
    sendMessage.style = `
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 450px;
        height: 70px;
        border-radius: 5px;
        display:flex;
        justify-content:center;
        align-items:center; 
        background-color: ${maincolor};
        color: ${secondcolor} ;
        z-index: 9999999999999999;
        `
    sendMessage.className = messageType
    sendMessage.innerHTML = `
        <div class="decoration" style="    
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 15px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background-color: ${secondcolor};
        z-index: 999999999999999991;

        ">
        </div>

        <h2 style="font-size: 1.2rem ; max-width:75%"> <strong> ${message}</strong> </h2>
        `

    document.body.prepend(sendMessage)

    setTimeout(() => {
        document.body.removeChild(sendMessage)
    }, 3000);
}