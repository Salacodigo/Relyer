// NAV BUTTONS FUNCTIONALITY
let servicesMenu= document.getElementsByClassName('services')[0]
let aboutUsNav= document.getElementsByClassName('aboutus')[0]

servicesMenu.addEventListener('click',()=> showMenu([0,1]) )
aboutUsNav.addEventListener('click',()=> showMenu([2,3]))


const showMenu = (position) => {

    position.forEach(element => {
        let accordionMenu = document.getElementsByClassName('paragraph')[element]
        accordionMenu.classList.toggle("display")

        if (accordionMenu.classList.contains("display"))
            accordionMenu.parentElement.blur()
        
    })
}

//  GO TO ON CLICK

let experts = document.getElementsByClassName('experts')[0]
let test = document.getElementsByClassName('test')[0]
let knowus = document.getElementsByClassName('knowus')[0]
let contact = document.getElementsByClassName('contact')[0]

experts.addEventListener('click',()=> window.location.href = "#")
test.addEventListener('click',()=> window.location.href = "../html/testInformative.htmlz<")
knowus.addEventListener('click',()=> window.location.href = "../html/aboutUs.html")
contact.addEventListener('click',()=> window.location.href = "../html/contact.html")