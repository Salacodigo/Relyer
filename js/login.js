
// GO TO HOME ON ARROW BACK
let arrowBack = document.getElementsByClassName('fa-arrow-circle-left')[0]
arrowBack.addEventListener('click', () => history.back())

const login = document.getElementsByClassName('loginForm')[0]


login.addEventListener('submit', async (e) => {

    let loginData = document.querySelectorAll(' input')
    let mail = loginData[0].value
    let userPassword = loginData[1].value

    e.preventDefault()

    let message = {
        correo: mail,
        password: userPassword
    }

    console.log(JSON.stringify(message))

    let request = await fetch('https://server-relyer.herokuapp.com/api/auth/login', {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(message)
    })

    let response = await request.json()

    if (response.usuario) {
        console.log(response)
    } else {


        let maincolor = "#FFE1DE"
        let secondcolor = "#FE455B"
        let message = "Password o email son incorrectos"


        let errorMessage = document.createElement('div')
        errorMessage.style = `
position: absolute;
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
`
        errorMessage.className = "errorMessage"
        errorMessage.innerHTML = `
    <div class="decoration" style="    
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: ${secondcolor}">
    </div>

    <h2 style="font-size: 1.2rem; max-width:70%;"> <strong> ${message}</strong> </h2>
`

        document.body.appendChild(errorMessage)

        setTimeout(() => {
            document.body.removeChild(errorMessage)
        }, 3000);

    }

})