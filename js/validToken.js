
const loginButton = document.getElementsByClassName('login')[0]
let logged = false

if (localStorage.getItem('token')) {

    let language = localStorage.getItem('language')

    if (language === "es") {
        loginButton.innerHTML = 'Cerrar sesión'
    } else {
        loginButton.innerHTML = 'Logout'
    }

    logged = true
}

loginButton.addEventListener('click', () => {

    let language = localStorage.getItem('language')

    if (logged === true) {

        event.preventDefault()
        localStorage.setItem('token', '')

        if (language === "es") {
            loginButton.innerText = "Iniciar sesión"
            printMessage('#FFE1DE', '#FE455B', 'Cierre de sesión correcto', 'successMessage')
        } else {
            loginButton.innerText = "Login/Register"
            printMessage('#FFE1DE', '#FE455B', 'Successful logout', 'successMessage')
        }



        logged = false

    }
})
