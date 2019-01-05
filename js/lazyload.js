

const lazyLoading = function deFindCaseOfLazyLoading (lazyload) {
    if(lazyload == true){
	    createClone();
    }else {
	    deleteClone();
    }
}
const createClone = function createElementCloneWhenLoading () {
    var heightScreen = window.innerHeight;
    var ContentScreen = contents.offsetWidth;
    var cloneBox = document.getElementById("cloneBox");
    var numCloneElements = Math.round(heightScreen/(12+5))
    if(cloneBox.querySelector(".lazyLoad") !== null){
	    return false;
    }else {
        contentCloneBox = document.createElement("DIV");
        contents.appendChild(contentCloneBox)
        contentCloneBox.setAttribute("id","contentCloneBox");
        contentCloneBox.style.height = (heightScreen -40) + "px";
        contentCloneBox.style.width =  (ContentScreen -40) + "px"; 
        for(var i=0; i < numCloneElements;i++){
            var ghostElement = document.createElement("DIV");
            ghostElement.classList = "lazyLoad";
            cloneBox.appendChild(ghostElement);
        }
	};
}
const deleteClone = function deleteCloneWhenDataLoaded () {
    //var clones = document.getElementsByClassName("lazyLoad");
    cloneBox.style.opacity = 0;
    cloneBox.innerHTML = "";
    cloneBox.style.height = "0px";
    var contentCloneBox = document.getElementById("contentCloneBox");
    contentCloneBox.style.display = "none";
}
