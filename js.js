// click to move down
var start_button = document.getElementById("start_button");

// get height of intro section
var intro = document.getElementById("intro"),
    intro_height = intro.offsetHeight;

// event listener to listen for click event on start button
start_button.addEventListener("click", start_click);

// hide the content section before user has pressed start
var content = document.getElementById("content");
content.classList.add("hidden");

// hide the ajax loader on page load
var loader = document.getElementById("loader");

// direction elements to move stories left/right
var dir_left = document.getElementById("left"),
    dir_right = document.getElementById("right"),
    header = document.getElementById("header");

// function executes when start button is pressed
function start_click() {

    // show the content section
    content.classList.remove("hidden");

    // run function after 1 second to add move_content class to content div
    setTimeout(function(){

        content.classList.add("move_content");
        dir_left.classList.remove("hidden");
        dir_right.classList.remove("hidden");
        header.classList.add("fixed");


    }, 1000);


// clear columns of any entries
// variables for each column
var bbc_column = document.getElementById("bbc"),
     dailymail_column = document.getElementById("dailymail"),
     independent_column = document.getElementById("independent");
     guardian_column = document.getElementById("independent");
     mirror_column = document.getElementById("independent");
     telegraph_column = document.getElementById("independent");

     // clear columns
     bbc_column.innerHTML = "";
     dailymail_column.innerHTML = "";
     independent_column.innerHTML = "";
     guardian_column.innerHTML = "";
     mirror_column.innerHTML = "";
     telegraph_column.innerHTML = "";

     //urls for api request
var bbc_url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07",
    dailymail_url = "https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07",
    independent_url = "https://newsapi.org/v1/articles?source=independent&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07";
    guardian_url = "https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07";
    mirror_url = "https://newsapi.org/v1/articles?source=mirror&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07";
    telegraph_url = "https://newsapi.org/v1/articles?source=the-telegraph&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07";
    
    // ajax requests
var bbc_req = new XMLHttpRequest();
var dailymail_req = new XMLHttpRequest();
var independent_req = new XMLHttpRequest();
var guardian_req = new XMLHttpRequest();
var mirror_req = new XMLHttpRequest();
var telegraph_req = new XMLHttpRequest();

//bbc request
bbc_req.open("GET", bbc_url, true);
bbc_req.onload = function() {
    if (this.status >= 200 && this.status < 400) {
          // request successful
          // the response from NewsAPI
          var bbc_resp = JSON.parse(bbc_req.responseText);
        } else {
        // not successful
    }
    //callback function
    bbc_data(bbc_resp);
};

bbc_req.onerror = function() {
// not successful
}

bbc_req.send();

//dailymail request
dailymail_req.open("GET", dailymail_url, true);
dailymail_req.onload = function() {
    if (this.status >= 200 && this.status < 400) {
          // request successful
          // the response from NewsAPI
          var dailymail_resp = JSON.parse(dailymail_req.responseText);
        } else {
        // not successful
    }
    //callback function
    dailymail_data(dailymail_resp);
};

dailymail_req.send();

// independent request
independent_req.open("GET", independent_url, true);
independent_req.onload = function() {
    if (this.status >= 200 && this.status < 400) {
          // request successful
          // the response from NewsAPI
          var independent_resp = JSON.parse(independent_req.responseText);
        } else {
        // not successful
    }
    //callback function
    independent_data(independent_resp);
};

independent_req.send();

// guardian request
guardian_req.open("GET", guardian_url, true);
guardian_req.onload = function() {
    if (this.status >= 200 && this.status < 400) {
          // request successful
          // the response from NewsAPI
          var guardian_resp = JSON.parse(guardian_req.responseText);
        } else {
        // not successful
    }
    //callback function
    guardian_data(guardian_resp);
};

guardian_req.send();

// mirror request
mirror_req.open("GET", mirror_url, true);
mirror_req.onload = function() {
    if (this.status >= 200 && this.status < 400) {
          // request successful
          // the response from NewsAPI
          var mirror_resp = JSON.parse(mirror_req.responseText);
        } else {
        // not successful
    }
    //callback function
    mirror_data(mirror_resp);
};

mirror_req.send();

// telegraph request
telegraph_req.open("GET", telegraph_url, true);
telegraph_req.onload = function() {
    if (this.status >= 200 && this.status < 400) {
          // request successful
          // the response from NewsAPI
          var telegraph_resp = JSON.parse(telegraph_req.responseText);
        } else {
        // not successful
    }
    //callback function
    telegraph_data(telegraph_resp);
};

telegraph_req.send();

// function to sort the bbc response data
function bbc_data(bbc_resp) {
    
    // access the articles array with the stories
    var articles = bbc_resp.articles;

    // loop to access each article in array
    for(var i = 0; i < articles.length; i++) {

        // variable for each piece of data for each article
        var author = articles[i].author,
            description = articles[i].description,
            published = articles[i].publishedAt,
            title = articles[i].title,
            url = articles[i].url,
            img = articles[i].urlToImage;

            // console.log(author);
            // console.log(description);
            // console.log(published);
            // console.log(title);
            // console.log(url);
            // console.log(img);

            var html =
                          "<a href='" + url + "'>"
                        + "<div class='article'>"
                        + "<img src='" + img + "'/>"
                        + "<h3>" + title + "</h3>"
                        + "</div></a>";

            bbc.innerHTML += html;

    }
}

// function to sort the dailymail response data
function dailymail_data(dailymail_resp) {

    // access the articles array with the stories
    var articles = dailymail_resp.articles;

    // loop to access each article in array
    for(var i = 0; i < articles.length; i++) {

        // variable for each piece of data for each article
        var author = articles[i].author,
            description = articles[i].description,
            published = articles[i].publishedAt,
            title = articles[i].title,
            url = articles[i].url,
            img = articles[i].urlToImage;

            // console.log(author);
            // console.log(description);
            // console.log(published);
            // console.log(title);
            // console.log(url);
            // console.log(img);

            var html =
                          "<a href='" + url + "'>"
                        + "<div class='article'>"
                        + "<img src='" + img + "'/>"
                        + "<h3>" + title + "</h3>"
                        + "</div></a>";

            dailymail.innerHTML += html;
        }
}

    // function to sort the independent response data
    function independent_data(independent_resp) {

    // access the articles array with the stories
    var articles = independent_resp.articles;

    // loop to access each article in array
    for(var i = 0; i < articles.length; i++) {

        // variable for each piece of data for each article
        var author = articles[i].author,
            description = articles[i].description,
            published = articles[i].publishedAt,
            title = articles[i].title,
            url = articles[i].url,
            img = articles[i].urlToImage;

            // console.log(author);
            // console.log(description);
            // console.log(published);
            // console.log(title);
            // console.log(url);
            // console.log(img);

            var html =
                          "<a href='" + url + "'>"
                        + "<div class='article'>"
                        + "<img src='" + img + "'/>"
                        + "<h3>" + title + "</h3>"
                        + "</div></a>";

            independent.innerHTML += html;
        }
    }

    // function to sort the guardian response data
function guardian_data(guardian_resp) {
    
    // access the articles array with the stories
    var articles = guardian_resp.articles;

    // loop to access each article in array
    for(var i = 0; i < articles.length; i++) {

        // variable for each piece of data for each article
        var author = articles[i].author,
            description = articles[i].description,
            published = articles[i].publishedAt,
            title = articles[i].title,
            url = articles[i].url,
            img = articles[i].urlToImage;

            // console.log(author);
            // console.log(description);
            // console.log(published);
            // console.log(title);
            // console.log(url);
            // console.log(img);

            var html =
                          "<a href='" + url + "'>"
                        + "<div class='article'>"
                        + "<img src='" + img + "'/>"
                        + "<h3>" + title + "</h3>"
                        + "</div></a>";

            guardian.innerHTML += html;

    }
}

    // function to sort thmirror response data
function mirror_data(mirror_resp) {
    
    // access the articles array with the stories
    var articles = mirror_resp.articles;

    // loop to access each article in array
    for(var i = 0; i < articles.length; i++) {

        // variable for each piece of data for each article
        var author = articles[i].author,
            description = articles[i].description,
            published = articles[i].publishedAt,
            title = articles[i].title,
            url = articles[i].url,
            img = articles[i].urlToImage;

            // console.log(author);
            // console.log(description);
            // console.log(published);
            // console.log(title);
            // console.log(url);
            // console.log(img);

            var html =
                          "<a href='" + url + "'>"
                        + "<div class='article'>"
                        + "<img src='" + img + "'/>"
                        + "<h3>" + title + "</h3>"
                        + "</div></a>";

            mirror.innerHTML += html;

    }
}

    // function to sort thmirror response data
function telegraph_data(telegraph_resp) {
    
    // access the articles array with the stories
    var articles = telegraph_resp.articles;

    // loop to access each article in array
    for(var i = 0; i < articles.length; i++) {

        // variable for each piece of data for each article
        var author = articles[i].author,
            description = articles[i].description,
            published = articles[i].publishedAt,
            title = articles[i].title,
            url = articles[i].url,
            img = articles[i].urlToImage;

            // console.log(author);
            // console.log(description);
            // console.log(published);
            // console.log(title);
            // console.log(url);
            // console.log(img);

            var html =
                          "<a href='" + url + "'>"
                        + "<div class='article'>"
                        + "<img src='" + img + "'/>"
                        + "<h3>" + title + "</h3>"
                        + "</div></a>";

            telegraph.innerHTML += html;

    }
}

















}


//     // function to sort the guardian response data
//     function guardian_data(guardian_resp) {

//     // access the articles array with the stories
//     var articles = guardian_resp.articles;

//     // loop to access each article in array
//     for(var i = 0; i < articles.length; i++) {

//         // variable for each piece of data for each article
//         var author = articles[i].author,
//             description = articles[i].description,
//             published = articles[i].publishedAt,
//             title = articles[i].title,
//             url = articles[i].url,
//             img = articles[i].urlToImage;

//             // console.log(author);
//             // console.log(description);
//             // console.log(published);
//             // console.log(title);
//             // console.log(url);
//             // console.log(img);

//             var html =
//                           "<a href='" + url + "'>"
//                         + "<div class='article'>"
//                         + "<img src='" + img + "'/>"
//                         + "<h3>" + title + "</h3>"
//                         + "</div></a>";

//             guardian.innerHTML += html;
//         }
//     }

// function mirror_data(mirror_resp) {

//     // access the articles array with the stories
//     var articles = mirror_resp.articles;

//     // loop to access each article in array
//     for(var i = 0; i < articles.length; i++) {

//         // variable for each piece of data for each article
//         var author = articles[i].author,
//             description = articles[i].description,
//             published = articles[i].publishedAt,
//             title = articles[i].title,
//             url = articles[i].url,
//             img = articles[i].urlToImage;

//             // console.log(author);
//             // console.log(description);
//             // console.log(published);
//             // console.log(title);
//             // console.log(url);
//             // console.log(img);

//             var html =
//                           "<a href='" + url + "'>"
//                         + "<div class='article'>"
//                         + "<img src='" + img + "'/>"
//                         + "<h3>" + title + "</h3>"
//                         + "</div></a>";

//             mirror.innerHTML += html;
//         }
//     }

//     function telegraph_data(telegraph_resp) {

//     // access the articles array with the stories
//     var articles = telegraph_resp.articles;

//     // loop to access each article in array
//     for(var i = 0; i < articles.length; i++) {

//         // variable for each piece of data for each article
//         var author = articles[i].author,
//             description = articles[i].description,
//             published = articles[i].publishedAt,
//             title = articles[i].title,
//             url = articles[i].url,
//             img = articles[i].urlToImage;

//             // console.log(author);
//             // console.log(description);
//             // console.log(published);
//             // console.log(title);
//             // console.log(url);
//             // console.log(img);

//             var html =
//                           "<a href='" + url + "'>"
//                         + "<div class='article'>"
//                         + "<img src='" + img + "'/>"
//                         + "<h3>" + title + "</h3>"
//                         + "</div></a>";

//             telegraph.innerHTML += html;
//         }
//     }











