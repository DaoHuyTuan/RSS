

const createDOM  = function createDomWhenDataLoaded() {
    rssTitle = document.createElement("SPAN");
    rssContent = document.createElement("SPAN");
    rssTitle.classList = "title--item";
    listTitle.appendChild(rssTitle);
    contents.appendChild(rssContent);
}
const renderData = function renderDataFrom(arrayData) {
    if(arrayData.length == arrayBlogURL.length){
	    lazyload = false;
        for(var y = 0; y < arrayBlogURL.length;y++) {
            for(var i =0;i < arrayData[y].length;i++){
                createDOM();
                if(arrayData[0][i] == arrayData[y][0]) {
                    rssTitle.classList += " active";
                }
                arrayContents.push(arrayData[y][i]);
                rssTitle.innerHTML = arrayData[y][i].childNodes.item(1).childNodes.item(0).data;
                contents.innerHTML += arrayContents[0].getElementsByTagName("content:encoded").item(0).innerHTML;
            }
        }
	    lazyLoading(lazyload);
    }
    addEventsListeners();
}
const getItems   = function getItemsFrom(xmlValue){
    //get all <item> tag
 
    arrayData.push(xmlValue.getElementsByTagName("item"));
    renderData(arrayData);
    //console.log(arrayData.length)
}
const loadRSS    = function loadRSSFrom(url) {
    var ajax = new XMLHttpRequest();
    ajax.open("GET",url,true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            getItems(ajax.responseXML);
        }
    }
    ajax.send();
}
const loadArrURL = function loadArrURLFromArrayURL(param) {
    lazyLoading(lazyload);
    for(var i=0;i<arrayBlogURL.length;i++){
        var param = proxy + arrayBlogURL[i];
        loadRSS(param);
    }
}
loadArrURL(feedUrl);
