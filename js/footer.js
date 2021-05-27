

let footerTemplate= document.createElement('template')
footerTemplate.innerHTML = `
        <div class="img-background-footer">
            <div class="mobile content-logo-footer ">
                <div class="logo-footer">
                    <img src="../Assets/Logo.png" alt="">
                </div>
            </div>
            <div class="background-menu mobile">
                <div class="menu-footer-mobile">
                    <ul>
                        <li> <a href=""> Recent news</a></li>
                        <li><a href=""> Contact</a></li>
                        <li><a href=""> About us</a></li>
                        <li><a href=""> Donate</a></li>
                    </ul>
                </div>

            </div>
            <div class="background-menu desktop">
                <div class="menu-footer">
                    <ul>
                        <li> <a href=""> Recent news</a></li>
                        <li><a href=""> Contact</a></li>
                        <li><a href=""> About us</a></li>
                        <li><a href=""> Donate</a></li>
                    </ul>
                </div>
                <div class="content-logo-footer">
                    <div class="logo-footer">
                        <img src="../Assets/Logo.png" alt="">
                    </div>
                </div>
                <div class="networks">
                    <div class="img-networks">
                        <img src="../Assets/markunread.png" alt="Correo">
                        <img src="../Assets/Instagram.png" alt="Instagram">
                        <img src="../Assets/Facebook.png" alt="Facebook">
                        <img src="../Assets/Tinder.png" alt="Tinder">
                    </div>
                </div>

            </div>
            <div class="networks mobile">
                <div class="img-networks">
                    <img src="../Assets/markunread.png" alt="Correo">
                    <img src="../Assets/Instagram.png" alt="Instagram">
                    <img src="../Assets/Facebook.png" alt="Facebook">
                    <img src="../Assets/Tinder.png" alt="Tinder">
                </div>
            </div>
        </div>
`

let footer = document.getElementsByTagName('footer')[0]

footer.appendChild(footerTemplate.content)
