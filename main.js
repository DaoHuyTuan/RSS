// var displays = document.getElementsByClassName("text");

// hello = function() {
//     // console.log(this);
//     return this;
// }
// // displays.hello();
// if($ == jQuery) {
//     console.log("true");
// }else {
//     console.log("false")
// }
// console.log(jQuery.fn.init.toString());

var testDisplay = document.getElementById("testDisplay");
var feed = "https://cors-anywhere.herokuapp.com/https://blogs.dropbox.com/tech/feed/";
// $(document).ready(function() {
	
// 	var feed = "https://cors-anywhere.herokuapp.com/https://blogs.dropbox.com/tech/feed/";
//     var text = document.getElementById("text");
//     var testDisplay = document.getElementById("testDisplay");
//     var param ,el;
// 	$.ajax(feed, {
// 		accepts:{
// 			xml:"application/rss+xml"
// 		},
// 		dataType:"xml",
// 		success:function(data) {
// 			$(data).find("item").each(function () { // or "item" or whatever suits your feed
//                 el = $(this);
//                 var rssTitle = document.createElement("P");
//                 rssTitle.classList = "title";
//                 var rssContent = document.createElement("SPAN");

//                 testDisplay.appendChild(rssTitle);
//                 testDisplay.appendChild(rssContent);

//                 rssTitle.innerHTML = el.find("title").text();
//                 rssContent.innerHTML = el.find("item content\\:encoded").text();
                
// 			});
	

// 		}	
// 	});

// });
function loadRSS() {
    var ajax = new XMLHttpRequest();
    var data;
    ajax.open("GET",feed,true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            data = ajax.responseText;
            //console.log(ajax.responseText);
            // console.log(data.split("<item>").toString())
            // console.log(data.substr(0,"<item>"))
            console.log(data.trim("<item>"))
        }
    }
}
loadRSS();