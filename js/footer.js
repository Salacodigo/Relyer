let footer = document.getElementsByTagName('footer')[0]
let footerTemplate = document.createElement('template')

footerTemplate.innerHTML = `
        <div class="img-background-footer">
            <div class="mobile content-logo-footer ">
                <div class="logo-footer">
                    <img src="../Assets/Logo.png" alt="">
                </div>
            </div>
            <div class="background-menu mobile" style="display:flex;justify-content: space-around;align-items: center;">
                <div class="menu-footer-mobile mobile" style="width:50%;">
                    <ul>
                        <li> <a href="/html/home.html"> Home</a></li>
                        <li> <a href="/html/learn.html"> Services</a></li>
                        <li> <a href="/html/learn.html"> Learn more</a></li>
                        <li><a href="/html/aboutUs.html"> About us</a></li>
                    </ul>
                </div>
                <div class="networks mobile" style="width:50%;">
                <div class="img-networks">
                <a href="#" target="blank"><i class="fab fa-facebook"></i></a>
                <a href="#" target="blank"><i class="fab fa-twitter"></i></i></a>
                <a href="#" target="blank"><i class="fab fa-instagram"></i></i></a>
                <a href="#" target="blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>

            </div>
            <div class="background-menu desktop">
                <div class="menu-footer">
                    <ul>
                    <li> <a href="/html/home.html"> Home</a></li>
                        <li> <a href="/html/learn.html"> Services</a></li>
                        <li> <a href="/html/learn.html"> Learn more</a></li>
                        <li><a href="/html/aboutUs.html"> About us</a></li>
                    </ul>
                </div>
                <div class="content-logo-footer">
                    <div class="logo-footer">
                        <a href="/html/home.html">
                            <img src="../Assets/Logo.png" alt="relyer logo">
                        </a>
                    </div>
                </div>
                <div class="networks">
                    <div class="img-networks">
                        <a href="#" target="blank"><i class="fab fa-facebook"></i></a>
                        <a href="#" target="blank"><i class="fab fa-twitter"></i></i></a>
                        <a href="#" target="blank"><i class="fab fa-instagram"></i></i></a>
                        <a href="#" target="blank"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>

            </div>
           
        </div>
`

footer.appendChild(footerTemplate.content)

