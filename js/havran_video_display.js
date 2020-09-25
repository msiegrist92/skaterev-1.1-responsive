var video_container = document.getElementById("video_container");
var image = video_container.getElementsByTagName("img")[0];
var video = video_container.getElementsByTagName("video")[0];

function hideShow(image, video){
  //lower width value @media screen (min-width: 1500px)
  //page requires scrolling to see video controls past that resolution
  var query_width = window.matchMedia("(min-width: 1500px)");
  if (query_width.matches){
    image.style.display = "none";
    video.style.visibility = "visible";
    video.style.width = "30%";
    video.style.height = "auto";
    video.style.opacity = "1";
  }
  else {
    image.style.display = "none";
    video.style.visibility = "visible";
    video.style.width = "50%";
    video.style.height = "auto";
    video.style.opacity = "1";
  }
}

video_container.addEventListener("click", function(){
  hideShow(image, video);
});
