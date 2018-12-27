"use strict";
//CORS proxy 
var proxy = "https://cors-anywhere.herokuapp.com/";
var arrayBlogURL = ["https://medium.engineering/feed","https://blogs.dropbox.com/tech/feed/"];
var feedUrl = "";
//array of item xml
var arrayItem;
var arrayData = new Array();
//DOM variable
var main = document.getElementById("main");
var listTitle = document.getElementById("main__listTitle");
var contents   = document.getElementById("main__content");
var rssTitle, rssContent;
//ajax with Jquery 

// $(document).ready(function() {
// 	var feedUrl = "https://blogs.dropbox.com/tech/feed/";
//     var text = document.getElementById("text");
//     var main = document.getElementById("main");
//     var param ,el;
// 	$.ajax(feedUrl, {
// 		accepts:{
//             xml:"application/rss+xml",
            
//         },

// 		dataType:"xml",
// 		success:function(data) {
// 			$(data).find("item").each(function () { // or "item" or whatever suits your feed
//                 el = $(this);
//                 // console.log(typeof(el));
//                 var rssTitle = document.createElement("P");
//                 rssTitle.classList = "title";
//                 var rssContent = document.createElement("SPAN");
//                 main.appendChild(rssTitle);
//                 main.appendChild(rssContent);
//                 rssTitle.innerHTML = el.find("title").text();
//                 rssContent.innerHTML = el.find("item content\\:encoded").text();       
// 			});
// 		}	
// 	});
// });

//pure javascript ajax

function createDOM() {
    
    rssTitle = document.createElement("SPAN");
    rssContent = document.createElement("SPAN");
}
 function renderData(arrayItem) {
    for(var y=0;y<arrayData.length;y++){
        console.log(arrayData[y])
    }
    for(var i = 0; i < arrayItem.length;i++){
        createDOM()
        rssTitle.classList = "title--item";
        //add class active for the first Title
        if(arrayItem[i] == arrayItem[0]) {
            rssTitle.classList += " active";
        }
        listTitle.appendChild(rssTitle);
        contents.appendChild(rssContent);
        rssTitle.innerHTML = arrayItem[i].childNodes.item(1).childNodes.item(0).data;
        contents.innerHTML += arrayItem[0].getElementsByTagName("content:encoded").item(0).innerHTML;
        
        //console for test output
        //console.log(arrayItem[i].childNodes.item(1).childNodes.item(0).data); 
        //console.log(arrayItem[i].getElementsByTagName("title").item(0).innerHTML); 
        //console.log(arrayItem[i].getElementsByTagName("content:encoded").item(0).innerHTML);
    }
    addEventsListeners();
}
 function getItems(xmlValue){
    //get all <item> tag 
    arrayItem = xmlValue.getElementsByTagName("item");
    arrayData.push(arrayItem);
  
    renderData(arrayItem);
}
function loadRSS(url) {
    var ajax = new XMLHttpRequest();
    ajax.open("GET",url,true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            getItems(ajax.responseXML);
        }
    }
    ajax.send();
}
function loadArrURL(param) {
    for(var i=0;i<arrayBlogURL.length;i++){
        var param = proxy + arrayBlogURL[i];

        loadRSS(param);
    }
}
loadArrURL(feedUrl);