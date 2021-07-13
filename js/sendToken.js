
if (localStorage.getItem('token')) {

    console.log(localStorage.getItem('token'))

    var myHeaders = new Headers();
    myHeaders.append("x-token", localStorage.getItem('token'));

    // var requestOptions = {
    //     method: 'PUT',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };

    // fetch("https://server-relyer.herokuapp.com/api/usuarios/60d253bc088e8c3473c6b6aa", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

}