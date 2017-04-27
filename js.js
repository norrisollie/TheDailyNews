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

// function executes when start button is pressed
function start_click() {

    // show the content section
    content.classList.remove("hidden");

    setTimeout(function(){ content.classList.add("move_content"); }, 1000);


// clear columns of any entries
// variables for each column
var bbc_column = document.getElementById("bbc"),
     dailymail_column = document.getElementById("dailymail"),
     independent_column = document.getElementById("independent");

     // clear columns
     bbc_column.innerHTML = "";
     dailymail_column.innerHTML = "";
     independent_column.innerHTML = "";

     //urls for api request
var bbc_url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07",
    dailymail_url = "https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07",
    independent_url = "https://newsapi.org/v1/articles?source=independent&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07";

    // ajax requests
var bbc_req = new XMLHttpRequest();
var dailymail_req = new XMLHttpRequest();
var independent_req = new XMLHttpRequest();

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

}

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

            console.log(author);
            console.log(description);
            console.log(published);
            console.log(title);
            console.log(url);
            console.log(img);

            var html =
                          "<a href='" + url + "'>"
                        + "<div class='article'>"
                        + "<img src='" + img + "'/>"
                        + "<h3>" + title + "</h3>"
                        + "</div></a>";

            bbc.innerHTML += html;

    }
}

// function to sort the bbc response data
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

            console.log(author);
            console.log(description);
            console.log(published);
            console.log(title);
            console.log(url);
            console.log(img);

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

            console.log(author);
            console.log(description);
            console.log(published);
            console.log(title);
            console.log(url);
            console.log(img);

            var html =
                          "<a href='" + url + "'>"
                        + "<div class='article'>"
                        + "<img src='" + img + "'/>"
                        + "<h3>" + title + "</h3>"
                        + "</div></a>";

            independent.innerHTML += html;
        }
}




















// // select the following elements and stores them in the DOM
// var theTime = document.getElementById("the_time"),
//     theDate = document.getElementById("the_date");

// // function for the clock

// var generateTime_Date = function() {
    
//     // generates the date, gets the hours, minutes, seconds, date today, the month and year
    
//     var generateDate = new Date(),
//         getHour = generateDate.getHours(), 
//         getMinute = generateDate.getMinutes(),
//         getSecond = generateDate.getSeconds(),
//         getDayName = generateDate.getDay(),
//         getDay = generateDate.getDate(),
//         getMonth = generateDate.getMonth(),
//         getYear = generateDate.getFullYear(),
//         monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//         dayNames = ["", "Monday", "Tuesday", "Wednesdays", "Thursday", "Friday", "Saturday", "Sunday"];
    
//         // string to display time and date
//         var theTimeStr = getHour + ":" + getMinute,
//             theDateStr = getDay + " " + monthNames[generateDate.getMonth()] + " " + getYear;
    
//         theTime.innerHTML = theTimeStr;
//         theDate.innerHTML = theDateStr;
// }

// // on load fun "getClock" function
// // refreshed every second
// window.onload = function() {
//     generateTime_Date();
//     setInterval(generateTime_Date,1000);
// }

// var start_button = document.getElementById("start_button");
//     start_button.addEventListener("click", the_click),
//     intro = document.getElementById("intro");
//     intro_height = intro.offsetHeight,
//     main = document.getElementById("main"),
//     bbc = document.getElementById("bbc"),
//     dailymail = document.getElementById("dailymail"),
//     independent = document.getElementById("independent");

// function the_click() {

//     main.classList.remove("hidden");

//     bbc.innerHTML = "";
//     dailymail.innerHTML =  "";
//     independent.innerHTML =  "";

//     // click to scroll down
//     var scroll_source_object = {
//        y: 0
//     };
    
//     TweenMax.to(scroll_source_object,1, {
//         y: intro_height,
//         onUpdate: function() {
//             window.scrollTo(0, scroll_source_object.y);
//         },
//         ease: Power3.easeOut
//     });


// //urls
// var bbc_url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07",
//     dailymail_url = "https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07",
//     independent_url = "https://newsapi.org/v1/articles?source=independent&sortBy=top&apiKey=bbe9e774459d4ff5b9cf0861b1274d07";

// // ajax requests
//     var bbc_request = new XMLHttpRequest();
//     var dailymail_request = new XMLHttpRequest();
//     var independent_request = new XMLHttpRequest();

// //bbc request
//     bbc_request.open('GET', bbc_url, true);

//     bbc_request.onload = function() {
//           if (this.status >= 200 && this.status < 400) {
//           // Success!
//           var bbc_resp = JSON.parse(bbc_request.responseText);
//       } else {
//       // We reached our target server, but it returned an error
//   }

//   bbc_data(bbc_resp);

// };

// bbc_request.onerror = function() {
//   // There was a connection error of some sort
// };

// bbc_request.send();

// // daily mail request
// dailymail_request.open('GET', dailymail_url, true);

//     dailymail_request.onload = function() {
//           if (this.status >= 200 && this.status < 400) {
//           // Success!
//           var dailymail_resp = JSON.parse(dailymail_request.responseText);
//       } else {
//       // We reached our target server, but it returned an error
//   }

// dailymail_data(dailymail_resp);

// };

// dailymail_request.onerror = function() {
//   // There was a connection error of some sort
// };

// dailymail_request.send();

// // independent request
// independent_request.open('GET', independent_url, true);

//     independent_request.onload = function() {
//           if (this.status >= 200 && this.status < 400) {
//           // Success!
//           var independent_resp = JSON.parse(independent_request.responseText);
//       } else {
//       // We reached our target server, but it returned an error
//   }

//   independent_data(independent_resp);

// };

// independent_request.onerror = function() {
//   // There was a connection error of some sort
// };

// independent_request.send();

// function bbc_data(bbc_resp) {
//     console.log(bbc_resp);

//     var bbc_articles = bbc_resp.articles;

//     for (var i = 0; i < bbc_articles.length; i++) {
//         console.log(bbc_articles[i])

//         var author = bbc_articles[i].author,
//             title = bbc_articles[i].title,
//             desc = bbc_articles[i].description,
//             url = bbc_articles[i].url,
//             img = bbc_articles[i].urlToImage;
//             published = bbc_articles[i].publishedAt;
//             // date = published[0],
//             // time = published[1].replace("Z","");

//             console.log(author);
//             console.log(title);
//             console.log(desc);
//             console.log(url);
//             console.log(img);
//             console.log(published);
//             // console.log(date);
//             // console.log(time);

//             var open_tag = "<div class='story'><a href='" + url + "'>",
//                 img_tag = "<img class='article_image' src='" + img + "'>",
//                 title_tag = "<p class='article_title'>" + title + "</p>",
//                 close_tag = "</a></div>";

//                 html = open_tag + img_tag + title_tag + close_tag;

//                 var bbc = document.getElementById("bbc");

//                 bbc.innerHTML += html;
//     }
// }

// function dailymail_data(dailymail_resp) {
//     console.log(dailymail_resp);

//     var dailymail_articles = dailymail_resp.articles;

//     for (var i = 0; i < dailymail_articles.length; i++) {
//         console.log(dailymail_articles[i])

//         var dailymail_articles = dailymail_resp.articles;

//         var author = dailymail_articles[i].author,
//             title = dailymail_articles[i].title,
//             desc = dailymail_articles[i].description,
//             url = dailymail_articles[i].url,
//             img = dailymail_articles[i].urlToImage,
//             published = dailymail_articles[i].publishedAt.split("T"),
//             date = published[0],
//             time = published[1].replace("Z","");

//             console.log(author);
//             console.log(title);
//             console.log(desc);
//             console.log(url);
//             console.log(img);
//             console.log(published);
//             console.log(date)
//             console.log(time)

//             var open_tag = "<div class='story'><a href='" + url + "'>",
//                 img_tag = "<img class='article_image' src='" + img + "'>",
//                 title_tag = "<p class='article_title'>" + title + "</p>",
//                 close_tag = "</a></div>";

//                 html = open_tag + img_tag + title_tag + close_tag;

//                 var dailymail = document.getElementById("dailymail");

//                 dailymail.innerHTML += html;

//     }
// }

// function independent_data(independent_resp) {
//     console.log(independent_resp);

//     var independent_articles = independent_resp.articles;

//     for (var i = 0; i < independent_articles.length; i++) {
//         console.log(independent_articles[i])

//         var independent_articles = independent_resp.articles;

//         var author = independent_articles[i].author,
//             title = independent_articles[i].title,
//             desc = independent_articles[i].description,
//             url = independent_articles[i].url,
//             img = independent_articles[i].urlToImage,
//             published = independent_articles[i].publishedAt.split("T"),
//             date = published[0],
//             time = published[1].replace("Z","");

//             console.log(author);
//             console.log(title);
//             console.log(desc);
//             console.log(url);
//             console.log(img);
//             console.log(published);
//             console.log(date)
//             console.log(time)

//             var open_tag = "<div class='story'><a href='" + url + "'>",
//                 img_tag = "<img class='article_image' src='" + img + "'>",
//                 title_tag = "<p class='article_title'>" + title + "</p>",
//                 close_tag = "</a></div>";

//                 html = open_tag + img_tag + title_tag + close_tag;

//                 var independent = document.getElementById("independent");

//                 independent.innerHTML += html;
//     }
// }
// }























