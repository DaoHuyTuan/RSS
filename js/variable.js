//CORS proxy

var proxy = "https://cors-anywhere.herokuapp.com/";
var arrayBlogURL = [
    "https://medium.engineering/feed",
    "https://blogs.dropbox.com/tech/feed/",
    "https://slack.engineering/feed",
    // "https://www.blog.google/rss/",
    "https://code.fb.com/feed/",
    // "https://engineering.grab.com/feed.xml"
    "https://eng.lyft.com/feed",
    "https://medium.com/feed/airbnb-engineering",
    "https://instagram-engineering.com/feed",
    "https://labs.spotify.com/feed/",
    "https://medium.com/feed/netflix-techblog"
];
var feedUrl = "";
var arrayData = new Array();
var arrayContents = new Array();
//DOM variable
var main = document.getElementById("main");
var listTitle = document.getElementById("main__listTitle");
var contents  = document.getElementById("main__content");
var rssTitle,rssContent,listTitles,indexItem,contentCloneBox;
var lazyload = true;
