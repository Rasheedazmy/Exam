let nav_width = 0

let isTrue = !0;
$(".slider-sign").click(function () {

    /*on*/
    if (isTrue) {
        ($(".nav-menu").addClass("open-menu").removeClass("close-menu"),

            nav_width = $(".nav-menu").width(),
            $(".nav-slider").css("left", nav_width),

            $(".fa-align-justify").toggleClass("fa-times"),

            $(".nav-menu .link1").animate({
                opacity: "1",
                paddingTop: "30px"
            }, 1000),

            $(".nav-menu .link2").animate({
                opacity: "1",
                paddingTop: "30px"
            }, 1000),

            $(".nav-menu .link3").animate({
                opacity: "1",
                paddingTop: "30px"
            }, 1000),

            $(".nav-menu .link4").animate({
                opacity: "1",
                paddingTop: "30px"
            }, 1000),

            $(".nav-menu .link5").animate({
                opacity: "1",
                paddingTop: "30px"
            }, 1000),

            $(".nav-menu .link6").animate({
                opacity: "1",
                paddingTop: "30px"
            }, 1000), 
            isTrue = !isTrue)
    }




    /*of*/

    else ($(".nav-menu").addClass("close-menu").removeClass("open-menu"),
        $(".fa-align-justify").toggleClass("fa-times"),
        $(".nav-slider").css("left", 0),
        $(".nav-menu li").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 500), isTrue = !isTrue)
});



let alldata = !0;
let allmovie = !0;
let serchtrue = !0;






$(".strip-search").click(function () {
    if (serchtrue) {
        ($(".search").addClass("open-menu").removeClass("close-search"),
            $(".fa-search").toggleClass("fa-times"), $(".search-input").animate({
                top: "50%"
            }, 1500, function () {
                $(".search-input").animate({
                    top: "50%"
                }, 250)
            }), serchtrue = !serchtrue)
    }

    else ($(".search").addClass("close-search").removeClass("open-menu"),
        $(".fa-search").toggleClass("fa-times"),
        $(".search-input").animate({ top: "300%" }), serchtrue = !serchtrue)
});



    URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=955f6c1d988d0595c82400858e342a9e",

    categorylinks = document.getElementsByClassName("nav-content"),

    result = document.getElementById("serch_result"),

    allMoviesByWord = document.getElementById("allmovie"),

    popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=955f6c1d988d0595c82400858e342a9e",

    latestURL = "https://api.themoviedb.org/3/movie/latest?api_key=955f6c1d988d0595c82400858e342a9e",

    searchURL = "https://api.themoviedb.org/3/search/movie?query=mad&api_key=955f6c1d988d0595c82400858e342a9e",

    trendingURL = "https://api.themoviedb.org/3/trending/all/day?api_key=955f6c1d988d0595c82400858e342a9e",

    topratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=955f6c1d988d0595c82400858e342a9e",

    upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=955f6c1d988d0595c82400858e342a9e",

    NowURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=955f6c1d988d0595c82400858e342a9e",

    category = "",

    search_bar = document.getElementById("word");
        getMovies();


    var row = document.getElementById("row-Data")

for (var i = 0; i < categorylinks.length; i++)
    categorylinks[i].addEventListener("click", function (e) {
        "Now playing" == (category = e.target.innerHTML) && (URL = NowURL, getMovies()),
            "Popular" == category
                ? (URL = popularURL, getMovies())
                : "Top Rated" == category
                    ? (URL = topratedURL, getMovies())
                    : "Latest" == category
                        ? (URL = latestURL, getMovies())
                        : "Trending" == category
                            ? (URL = trendingURL, getMovies())
                            : "Upcoming" == category && (URL = upcomingURL, getMovies())
    });

function getMovies() {
    var get_mov = new XMLHttpRequest;
    get_mov.open("get", URL),
        get_mov.send(),
        get_mov.onreadystatechange = function () {
            if (4 == get_mov.readyState && 200 == get_mov.status) { (allmovie = (allmovie = JSON.parse(get_mov.response)).results, displayMovies()) }
            else (console.log("error"))
        }
}




function getmovbyword(ser) {
    var testt = new XMLHttpRequest,
        resul = "https://api.themoviedb.org/3/search/movie?query=" + ser + "&api_key=955f6c1d988d0595c82400858e342a9e";
    testt.open("get", resul),
        testt.send(),
        testt.onreadystatechange = function () {
            if (4 == testt.readyState && 200 == testt.status) { (allmovie = (allmovie = JSON.parse(testt.response)).results, displayMovies()) }
            else (console.log("error"))
        }
}


allMoviesByWord.onkeyup = function () {
    getmovbyword(allMoviesByWord.value)
};




var imgPath = "https://image.tmdb.org/t/p/w500";
function displayMovies() {
    for (var i = "", a = 0; a < allmovie.length; a++)
        i +=
            `
        <div class="col-md-6 col-lg-4 my-3">
            <div class="movie position-relative">
                <div class="post">                 
                    <img src='${imgPath + allmovie[a].poster_path}' class="img-fluid"/>                   
                    <div class="layer d-flex align-items-center ">                    
                    <div class="info p-0">                                         
                        <h2>${allmovie[a].original_title}</h2>                        
                        <p>${allmovie[a].overview}</p>                       
                        <p>rate:${allmovie[a].vote_average}</p>                       
                        <p>${allmovie[a].release_date}</p>                                           
                    </div>                   
                </div>                  
            </div>                   
        </div>               
     </div>
     `


    row.innerHTML = i
}



search_bar.onkeyup = function () {
    var i = search_bar.value;
    var testt = "";
    if ("" == i)
        return result.innerHTML = " ",
            !1;

    for (var t = 0; t < allmovie.length; t++)
        1 == allmovie[t].original_title.includes(i) && 
        (testt += 
        `
        <div class="col-md-4 my-3 ">            
            <div class="movie rounded position-relative">                    
                <div class="post">
                    <img src='${imgPath + allmovie[t].poster_path}' class="img-fluid"/>                    
                    <div class="layer d-flex align-items-center ">                   
                        <div class="info p-5">                       
                            <h2>'${allmovie[t].original_title}"</h2>                        
                            <p>"${allmovie[t].overview}"</p>                        
                            <p>rate: "${allmovie[t].vote_average}"</p>                       
                            <p>" ${allmovie[t].release_date}  "</p>                                           
                        </div>                    
                    </div>                    
                </div>                    
            </div>                
        </div>`, result.innerHTML = testt)

};



/*contact*/

var yourname = document.getElementById('name')
var youremail = document.getElementById('email')
var yourphone = document.getElementById('phone')
var yourage = document.getElementById('age')
var yourpassword = document.getElementById('password')
var repassword = document.getElementById('repassword')
var inputs = document.getElementById('form-control')
var addBtn = document.getElementById('submitBtn')
var namealert = document.getElementById('namealert')
var emailalert = document.getElementById('emailalert')
var phonealert = document.getElementById('phonealert')
var agealert = document.getElementById('agealert')
var passwordalert = document.getElementById('passwordalert')
var rePasswordalert = document.getElementById('rePasswordalert')


yourname.onkeyup = function () {
    var nameRejex = /^[a-zA-Z0-9]+$/
    if (nameRejex.test(yourname.value)) {
        addBtn.removeAttribute('disabled')
        namealert.classList.add('d-none')
    }
    else {
        addBtn.disabled = 'true'
        namealert.classList.remove('d-none')
    }
}



youremail.onkeyup = function () {
    var emailRejex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (emailRejex.test(youremail.value)) {
        addBtn.removeAttribute('disabled')
        emailalert.classList.add('d-none')
    }
    else {
        addBtn.disabled = 'true'
        emailalert.classList.remove('d-none')
    }
}




yourphone.onkeyup = function () {
    var phoneRejex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (phoneRejex.test(yourphone.value)) {
        addBtn.removeAttribute('disabled')
        phonealert.classList.add('d-none')
    }
    else {
        addBtn.disabled = 'true'
        phonealert.classList.remove('d-none')
    }
}




yourage.onkeyup = function () {
    var ageRejex = /^[1-9][0-9]?$|^100$/
    if (ageRejex.test(yourage.value)) {
        addBtn.removeAttribute('disabled')
        agealert.classList.add('d-none')
    }
    else {
        addBtn.disabled = 'true'
        agealert.classList.remove('d-none')
    }
}




yourpassword.onkeyup = function () {
    var passwordRejex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (passwordRejex.test(yourpassword.value)) {
        addBtn.removeAttribute('disabled')
        passwordalert.classList.add('d-none')
    }
    else {
        addBtn.disabled = 'true'
        passwordalert.classList.remove('d-none')
    }
}

yourpassword.onkeyup = function () {
    if (yourpassword.value == repassword.value) {
        addBtn.removeAttribute('disabled')
        rePasswordalert.classList.add('d-none')
    }
    else {
        addBtn.disabled = 'true'
        rePasswordalert.classList.remove('d-none')
    }
}
