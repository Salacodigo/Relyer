
// GO TO HOME ON ARROW BACK
let arrowBack = document.getElementsByClassName('fa-arrow-circle-left')[0]
arrowBack.addEventListener('click', () => history.back())

const login = document.getElementsByClassName('loginForm')[0]


login.addEventListener('submit', async (e) => {

    let loginData = document.querySelectorAll(' input')
    let mail = loginData[0].value
    let userPassword = loginData[1].value

    e.preventDefault()

    // let message = {
    //     correo: mail,
    //     password: userPassword
    // }

    // console.log(JSON.stringify(message))

    // let request = await fetch('https://server-relyer.herokuapp.com/api/auth/login', {
    //     method: 'POST',
    //     headers: {
    //         "content-type": 'application/json'
    //     },
    //     body: JSON.stringify(message)
    // })

    // let response = await request.json()
    // console.log(response)

    var raw = "{\n    \"correo\": \"test1@mail.com\",\n    \"password\": \"123456\"   \n}";

    var requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
    };

    fetch("https://server-relyer.herokuapp.com/api/auth/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


})