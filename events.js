var listTitles,indexItem;
function addEventsListeners() {
    var boxTitle = document.getElementById("main__listTitle");
    listTitles = boxTitle.getElementsByClassName("title--item");
    boxTitle.addEventListener("click",loadItemContent,false); 
}
function loadItemContent(events) {
    
    for(var i = 0; i< listTitles.length;i++) {
        listTitles[i].classList.remove("active"); 
        if(listTitles[i] == events.target){
            indexItem = i;
            listTitles[i].classList += " active";
            changeData(indexItem);
        }
    }
}
function changeData(indexItem) {
    for(var i = 0; i<arrayContents.length;i++) {
        if(arrayContents[i] == arrayContents[indexItem]){
            contents.innerHTML =  arrayContents[i].getElementsByTagName("content:encoded").item(0).innerHTML;
        }
    }
    window.scrollTo(0,0);
}