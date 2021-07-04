
// GO TO HOME ON ARROW BACK
let arrowBack = document.getElementsByClassName('fa-arrow-circle-left')[0]
arrowBack.addEventListener('click', () => history.back())


const ctaButton = document.getElementsByClassName('register-form')[0]
let inputData = document.querySelectorAll('form input')
let ubication = document.getElementById('city')
let role = document.getElementById('entrp')


ctaButton.addEventListener('submit', async (e) => {

    e.preventDefault()

    // FORM DATA CREATION TO FETCH
    let name = inputData[0].value
    let mail = inputData[1].value
    let password = inputData[2].value

    let userUbication = ubication.value
    let userRole = role.value

    let userData = {
        nombre: name,
        correo: mail,
        password,
        location: userUbication,
        position: userRole,
        rol: "USER_ROLE"

    }


    try {

        let request = await fetch('https://server-relyer.herokuapp.com/api/usuarios', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(userData)
        })
        let response = await request.json()
        console.log(response)


        let maincolor, secondcolor, message;

        if (response.usuario) {


            maincolor = "#C5F3D7"
            secondcolor = "#20AB5A"
            message = "User correctly created"

            let sucessMessage = document.createElement('div')
            sucessMessage.style = `
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
            sucessMessage.className = "errorMessage"
            sucessMessage.innerHTML = `
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

        <h2 style="font-size: 1.2rem"> <strong> ${message}</strong> </h2>
    `

            document.body.appendChild(sucessMessage)


            setTimeout(() => {
                window.location.href = "../html/login.html"
            }, 2500);


        } else {

            maincolor = "#FFE1DE"
            secondcolor = "#FE455B"
            message = response.errors[0].msg


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

    }
    catch (err) {
        console.error(err)
    }

})