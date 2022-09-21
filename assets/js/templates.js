class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div>
            <div class="bg-cover clearfix pt-3">
                <h2 class="logo"><a href="index.html">Endeavor</a></h2>
                <nav class="nav nav-fill mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://web.facebook.com/profile.php?id=100009289258245&_rdc=1&_rdr"
                            target="_blank"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/fh5co" target="_blank"><i
                                class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.instagram.com/zapfq/"><i class="fab fa-instagram"></i></a>
                    </li>
                </nav>


                <input type="text" id="nav-search" class="nav-search mx-auto" name="" class="form-control">
                <div class="ml-0 mr-0 pb-1">
                    <nav class="navbar navbar-expand-md">
                        <!-- Hamburger -->
                        <button class="navbar-toggler ml-auto" data-target="#my-nav" data-toggle="collapse"
                            aria-controls="my-nav" aria-expanded="false" onclick="myFunction(this)"
                            aria-label="Toggle navigation">
                            <span class="bar1"></span> <span class="bar2"></span> <span class="bar3"></span>
                        </button>

                        <!-- Hamburger End -->
                        <div id="my-nav" class="collapse navbar-collapse">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">HOME</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="article7.html">SPORTS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="article1.html">LITERATURE</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="article9.html">ENVIRONMENT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="article5.html">ENTERTAINMENT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="article4.html">TRAVEL</a>
                                </li>
                                <li class="nav-item">
                                    <form action="" method="POST">
                                        <div class="input-group mt-0 mx-auto" style="width:16px;">

                                            <div class="">
                                                <img src="assets/images/search-icon.png" id="toggle-search"
                                                    class="ml-2 toggle-search" alt="search icon">
                                            </div>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
            <nav class="hamburger-nav" id="hamburger">
                <ul>
                    <li><a href="/">News</a></li>
                    <li><a href="/">History</a></li>
                    <li><a href="/">Culture</a></li>
                    <li><a href="/">Tech</a></li>
                    <li><a href="/">Life</a></li>
                    <li><a href="/">Opinion</a></li>
                </ul>
            </nav>
        </div>
    `;
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer class="container-fluid pt-5">
            <div class="container">
                <h2 class="logo text-center">Endeavor</h2>
                <nav class="nav nav-fill mx-auto mt-5">
                    <li class="nav-item">
                        <a class="nav-link" href="https://facebook.com/fh5co" target="_blank"><i
                                class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://facebook.com/fh5co" target="_blank"><i
                                class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fab fa-instagram"></i></a>
                    </li>
                </nav>
            </div>
            <div class="copyright mt-4">
                <p class="text-center">&copy; 2022 <a href="#" class="text-white">Endeavor</a>. All Rights Reserved. Design
                    by Fu Qi - JingChun - Jocelyn <a target="_blank" class="text-white">Schwenzo.co</a>.</p>
            </div>
        </footer>
        `
    }
}

customElements.define('header-template', Header);
customElements.define('footer-template', Footer);

document.body.append(new Footer());