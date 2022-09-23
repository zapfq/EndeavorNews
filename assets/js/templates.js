const TWITTER_LINK = "https://twitter.com/zapql";
const INSTAGRAM_LINK = "https://www.instagram.com/zapfq/";
const FACEBOOK_LINK = "https://web.facebook.com/profile.php?id=100009289258245&_rdc=1&_rdr";


class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div>
            <div class="bg-cover clearfix pt-3">
                <h2 class="logo"><a href="index.html">Endeavor</a></h2>
                <nav class="nav nav-fill mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="${FACEBOOK_LINK}"
                            target="_blank"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${TWITTER_LINK}" target="_blank"><i
                                class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${INSTAGRAM_LINK}"><i class="fab fa-instagram"></i></a>
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
                        <a class="nav-link" href="${FACEBOOK_LINK}" target="_blank"><i
                                class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${TWITTER_LINK}" target="_blank"><i
                                class="fab fa-twitter"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${INSTAGRAM_LINK}"><i class="fab fa-instagram"></i></a>
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

class Author extends HTMLElement {
    constructor() {
        super();
        let name = getAttribute(this, "name", "Carlla Willstons");
        let src = getAttribute(this, "src", "assets/images/carlla-willstons.jpg")
        let role = getAttribute(this, "role", "Reporter")

        this.innerHTML = `
        <h3 class="text-center text-white">Author</h3>
        <hr class="bg-white" />
        <div class="owl-theme">
            <div>
                <div class="card pb-5"> <img class="card-img link-img rounded"
                        src="${src}" alt="">
                </div>
                <h3 class="text-center mt-3 mb-0">${name}</h3>
                <p class="text-center mt-1 third-clr">${role}</p>
            </div>
        </div>
        `
    }
}

class TwitterPosts extends HTMLElement {

    // Edit posts here
    posts = [
        {
            content: "Let's go #TeamEndeavor",
            timestamp: "Just Now",
        },
        {
            content: "Wanna read relaxing news? Go Endeavor #TeamEndeavor #RelaxGang",
            timestamp: "14 minutes ago",
        },
        {
            content: "Learn more about local sports #TeamEndeavor #Esports #F1",
            timestamp: "30 minutes ago",
        },
        {
            content: "Kpop is in the area #TeamEndeavor #Blackpink",
            timestamp: "2 Days ago",
        },


    ]

    constructor() {
        super();
        this.innerHTML = `
        <div class="owl-carousel bg-gray owl-carousel5 owl-theme my-5 pb-5">
            ${this.posts.map(post => `
            <div>
                <div class="card bg-gray">
                    <h3 class="text-center mt-3 mb-0">Twitter Posts</h3>
                    <hr class="mx-auto" />
                    <p class="text-center mt-1">${post.content}</p>
                    <p class="text-center my-1"><span>${post.timestamp}</span></p>
                </div>
            </div>
            `).join("\n")}


         </div>
        `
    }
}

class FollowUs extends HTMLElement {
    // Edit links here (null to remove link)
    facebookLink = FACEBOOK_LINK;
    twitterLink = TWITTER_LINK;
    instagramLink = INSTAGRAM_LINK;
    googlePlusLink = null;
    rssLink = null;


    constructor() {
        super();
        this.innerHTML = `
            <h3 class="text-center">Follow Us</h3>
            <hr class="mx-auto" />
            <nav class="nav nav-fill mx-auto mb-5">
                ${this.facebookLink ? `
                <li class="nav-item">
                    <a class="nav-link" href="${this.facebookLink}" target="_blank"><i
                            class="fab fa-facebook-f"></i></a>
                </li>
                `: ""}

                ${this.twitterLink ? `
                <li class="nav-item">
                    <a class="nav-link" href="${this.twitterLink}" target="_blank"><i
                            class="fab fa-twitter"></i></a>
                </li>
                `: ""}

                ${this.instagramLink ? `
                <li class="nav-item">
                    <a class="nav-link" href="${this.instagramLink}"><i class="fab fa-instagram"></i></a>
                </li>
                `: ""}

                ${this.googlePlusLink ? `
                <li class="nav-item">
                    <a class="nav-link" href="${this.googlePlusLink}}"><i class="fab fa-google-plus-g"></i></a>
                 </li>
                
                `: ""}

                ${this.rssLink ? `
                    <li class="nav-item">
                        <a class="nav-link" href="${this.rssLink}"><i class="fas fa-rss"></i></a>
                    </li>
                `: ""}



            </nav>
        `
    }
}

class InstagramPosts extends HTMLElement {

    // Edit images here
    images = [
        "assets/images/insta1.png",
        "assets/images/insta2.png",
        "assets/images/insta3.png",
        "assets/images/insta4.png",
        "assets/images/insta5.png",
        "assets/images/insta6.png",
    ]


    constructor() {
        super();
        this.innerHTML = `
        <h3 class="text-center">Instagram</h3>
        <hr class="mx-auto" />
        <div class="row insta-links mt-2">
            ${this.images.map(src => `
            <div class="col-md-4 col-sm-6 col-6">
                <div class="card">
                    <img class="card-img w-100" src="${src}" alt="">
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                        <a href="#"><img src="assets/images/right-icon.png" alt=""></a>
                    </div>
                </div>
            </div>`).join("\n")}
        </div>
        `;
    }
}

class TrendingPosts extends HTMLElement {
    // Edit here
    posts = [
        {
            image: "assets/images/F1s.png",
            title: "Sepang F1 Circuit Hiatus",
            href: "article7.html",
            timestamp: "21 Sept 2022",
        },
        {
            image: "assets/images/kpops.png",
            title: "Growing Kpop Culture",
            href: "article5.html",
            timestamp: "21 Sept 2022",
        },
        {
            image: "assets/images/books.png",
            title: "Reading Experience",
            href: "article1.html",
            timestamp: "21 Sept 2022",
        },

    ]

    constructor() {
        super();
        this.innerHTML = `
        <h3 class="text-center mt-5">Trending Posts</h3>
        <hr class="mx-auto" />
        <div class="tranding-posts mt-4">
            ${this.posts.map(post => `
            <div class="media my-3">
                <div class="d-flex align-items-center justify-content-center"><a href="${post.href}"><img
                            src="${post.image}" alt=""></a></div>
                <div
                    class="media-body text-center d-flex align-items-center justify-content-center flex-column px-3">
                    <a href="${post.href}">${post.title}</a>
                    <p class="mt-1">${post.timestamp}</p>
                </div>
            </div>
            `).join("\n")}

        </div>
        
        `
    }
}

class RelatedAritcle extends HTMLElement {


    constructor() {
        super();

        const src = getAttribute(this, "src", "assets/images/ar-left.png");
        const title = getAttribute(this, "title", "Default title");
        const tag = getAttribute(this, "tag", "No tag");
        const author = getAttribute(this, "author", "John Doe");
        const timestamp = getAttribute(this, "timestamp", "21 Sept 2022");
        const desc = getAttribute(this, "desc", "No description.");
        const href = getAttribute(this, "href", "#");





        this.classList.add("related-articles-inner");
        this.innerHTML = `
        <div class="related-article-first-container">
            <div>
                <img src="${src}" alt="">

            </div>
            <div style="height: 90px";>
                <p class="img-tag text-center">${tag}</p>
                <hr class="mt-0" />
                <h3 class="text-center">${title}</h3>
            </div>

        </div>

        <div style="display: flex; flex-grow: 1; flex-direction: column; justify-content: space-between;">
            <div>
                <ul class="nav nav-fill mx-auto pb-3" style="height: 50px;">
                    <li class="nav-item">
                        <a class="nav-link" href="#">By ${author}</a>
                    </li>
                    <li><span>.</span></li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">${timestamp}</a>
                    </li>
                </ul>
                <p class="second-clr text-center">${desc}</p>
            </div>


            <a href="${href}" class="btn text-uppercase text-center mx-auto">Read More</a>
        </div>
        
        `
    }
}

function getAttribute(el, name, defaultVal) {
    const attr = el.attributes;
    const attrItem = attr.getNamedItem(name);
    return attrItem ? attrItem.value : defaultVal;

}



customElements.define('header-template', Header);
customElements.define('footer-template', Footer);
customElements.define('author-template', Author)
customElements.define('twitter-posts', TwitterPosts);
customElements.define('follow-us', FollowUs);
customElements.define('instagram-posts', InstagramPosts);
customElements.define('trending-posts', TrendingPosts);
customElements.define('related-article', RelatedAritcle)

document.body.append(new Footer());