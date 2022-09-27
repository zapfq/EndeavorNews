jQuery(document).ready(function () {

    jQuery(".play-1, .play-2").yu2fvl();

    jQuery(".owl-carousel4").owlCarousel(
        {
            loop: true,
            center: true,
            margin: 20,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 2,

                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: true
                }
            }
        }
    );

    jQuery(".owl-carousel5").owlCarousel(
        {
            loop: true,
            center: false,
            margin: 10,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 2,

                },
                600: {
                    items: 3,

                },
                1000: {
                    items: 6,
                    nav: false,
                    loop: true
                }
            }
        }
    );

});

// Hamburger
let hamMenuOpen = false;

function myFunction(x) {
    hamMenuOpen = true;
    x.classList.toggle("change");

    const hamElement = document.getElementById("hamburger");

    hamElement.classList.toggle("show-nav");
}



jQuery(".link-img").click(function () {
    var link = jQuery(this).attr("data-link");
    //alert(link);
    jQuery("#screen").attr("src", link)
});



var count = 0;
jQuery("#toggle-search").click(function () {
    count++;
    //even odd click detect 
    var isEven = function (someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    // on odd clicks do this
    if (isEven(count) === false) {
        //jQuery("#nav-search").css({"display":"block"});
        jQuery("#nav-search").slideDown();
        jQuery("#toggle-search").attr("src", "assets/images/close.png");

    }
    // on even clicks do this
    else if (isEven(count) === true) {
        //jQuery("#nav-search").css({"display":"none"});
        jQuery("#nav-search").slideUp();

        jQuery("#toggle-search").attr("src", "assets/images/search-icon.png");
    }
});

const query = [
    {
      title: "The state of reading will evolve with your life's experience.",
      tag: "Literature",
      href: "article1.html",
    },
    {
      title: "The situation of Malaysian people reading books.",
      tag: "Literature",
      href: "article2.html",
    },
    {
      title: "How to improve reading habits?",
      tag: "Literature",
      href: "article3.html",
    },
    {
      title: "Travel: Has the pandemic affected tourism levels in Malaysia? Let's take a look.",
      tag: "Travel",
      href: "article4.html",
    },
    {
      title: "Has Malaysian culture really been influenced by KPOP? Let's find out.",
      tag: "Entertainment",
      href: "article5.html",
    },
    {
      title: "The Benefits of Travel",
      tag: "Travel",
      href: "article6.html",
    },
    {
      title: "Youth Perspective on Esports as a Career and Future.",
      tag: "Sports",
      href: "article7.html",  
    },
    {
      title: "Reasons behind Sepang F1 hiatus and plans to bring it back",
      tag: "Sports",
      href: "article8.html",  
    },
    {
      title: "How Are Youths Rectifying The Pollution Problems",
      tag: "Environment",
      href: "article9.html",  
    },  
    {
      title: "Film Review - Sowon",
      tag: "Entertainment",
      href: "article10.html",  
    },  
  ]

function getResult(searchVal) {
  return query.filter(item => 
    item.title.toLowerCase().includes(searchVal.toLowerCase()) || item.tag.toLowerCase().includes(searchVal.toLowerCase())
    )
}

function populateSearchResult(result) {
  const searchResultEl = document.getElementById("search-result")

  searchResultEl.innerHTML = ``;

  let innerHtml = ``;

  if (result.length == 0) {
    innerHtml += "<div style='padding-top: 20px'>No Result</div>"
  }
  
  for (const item of result) {
    
    const inner = `
      <div class="search-item" onclick="window.location.href = '${item.href}'">
        <p>${item.tag.toUpperCase()}</p>
        <a>${item.title}</a>
      </div>\n
    `

    innerHtml += inner;
  }

  searchResultEl.innerHTML = innerHtml;
}

function clearSearch() {
  const searchResultEl = document.getElementById("search-result")
  const searchInputEl = document.getElementById("search-input")

  searchInputEl.value = "";
  searchResultEl.innerHTML = `<div style='padding-top: 20px'>Start Searching</div>`
}

function searchNow() {
  const searchInputEl = document.getElementById("search-input")
  const searchResultEl = document.getElementById("search-result")
  
  
  searchInputEl.addEventListener("keydown", () => {
    const res = getResult(searchInputEl.value)

    if (searchInputEl.value == "") {
      clearSearch()

      return
    }

    populateSearchResult(res)
  })
}

function toggleSearch() {
  console.log("search")
  const searchContainerEl = document.getElementById("search-container")
  searchContainerEl.classList.toggle("show")
  searchContainerEl.classList.toggle("hide")
}