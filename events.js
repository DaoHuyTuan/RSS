var listTitles,indexItem;
function addEventsListeners() {
    var boxTitle = document.getElementById("main__listTitle");
    listTitles = boxTitle.getElementsByClassName("title--item");
    
    boxTitle.addEventListener("click",loadItemContent,false); 
}
function loadItemContent(events) {
    //console.log(events.currentTarget);
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
    for(var i = 0; i<arrayItem.length;i++) {
        if(arrayItem[i] == arrayItem[indexItem]){
            contents.innerHTML =  arrayItem[i].getElementsByTagName("content:encoded").item(0).innerHTML;
        }
    }
    window.scrollTo(0,0);
}