//  GO TO ON CLICK
let servicesMenu= document.getElementsByClassName('services')[0]
let aboutUsNav= document.getElementsByClassName('aboutus')[0]
let experts = document.getElementsByClassName('experts')[0]
let test = document.getElementsByClassName('test')[0]
let knowus = document.getElementsByClassName('knowus')[0]
let contact = document.getElementsByClassName('contact')[0]

experts.addEventListener('click',()=> window.location.href = "#")
test.addEventListener('click',()=> window.location.href = "../html/testInformative.html")
knowus.addEventListener('click',()=> window.location.href = "../html/aboutUs.html")
contact.addEventListener('click',()=> window.location.href = "../html/contact.html")


// ON MOBILE 
let responsive1 = document.getElementsByClassName('responsive1')[0]
let responsive2= document.getElementsByClassName('responsive2')[0]
let responsive3 = document.getElementsByClassName('responsive3')[0]
let responsive4 = document.getElementsByClassName('responsive4')[0]
let responsive5 = document.getElementsByClassName('responsive5')[0]
let responsive6 = document.getElementsByClassName('responsive6')[0]


responsive1.addEventListener('click',()=> document.location.href= "../index.html")
responsive2.addEventListener('click',()=> document.location.href= "#")
responsive3.addEventListener('click',()=> document.location.href= "../html/testInformative.html")
responsive4.addEventListener('click',()=> document.location.href= "../html/learn.html")
responsive5.addEventListener('click',()=> document.location.href= "../html/aboutUs.html")
responsive6.addEventListener('click',()=> document.location.href= "../html/contact.html")