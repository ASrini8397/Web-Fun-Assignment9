var likecount=65;
var newcount= document.querySelector("#likecounter")
function likebutton(){
    likecount++;
    newcount.innerText= likecount + " Likes";
    if(likecount===69){
        newcount.innerText= likecount+ " Nice";
    }

}