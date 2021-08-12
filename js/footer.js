let footer = document.getElementsByTagName("footer")[0];
let footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
        <div class="img-background-footer">
            <div class="mobile content-logo-footer ">
                <div class="logo-footer">
                    <img src="../assets/footer/logo.png" alt="">
                </div>
            </div>
            <div class="background-menu mobile" style="display:flex;justify-content: space-around;align-items: center;">
                <div class="menu-footer-mobile mobile" style="width:50%;">
                    <ul>
                        <li> <a href="../index.html"> Home</a></li>
                        <li> <a href="./experts.html"> Services</a></li>
                        <li> <a href="./learn.html"> Learn more</a></li>
                        <li><a href="./aboutUs.html"> About us</a></li>
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
                    <li> <a href="../index.html"> Home</a></li>
                        <li> <a href="./experts.html"> Services</a></li>
                        <li> <a href="./learn.html"> Learn more</a></li>
                        <li><a href="./aboutUs.html"> About us</a></li>
                    </ul>
                </div>
                <div class="content-logo-footer">
                    <div class="logo-footer">
                        <a href="../index.html">
                            <img src="../assets/footer/logo.png" alt="relyer logo">
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
`;

footer.appendChild(footerTemplate.content);
