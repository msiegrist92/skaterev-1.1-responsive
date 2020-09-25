const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");

//these arrays contain the ids of the corresponding elements
const images = ["slide_1", "slide_2", "slide_3", "slide_4"];

const circles = ["circle_1", "circle_2", "circle_3", "circle_4"];

const titles = ["slide_title_1", "slide_title_2", "slide_title_3", "slide_title_4"]

//displays is an array of arrays for use in changeDisplays function
const displays = [images, circles, titles];

//on page load the slideshow is displaying slide number 1
//global variable slide represents the index of the array matching the current slide
let slide = 0;

left_arrow.addEventListener("click", function(){
  slideDown();
});

right_arrow.addEventListener("click", function(){
  slideUp();
});

document.getElementById("enter_button").addEventListener("click", function(){
  raiseReview();
});

document.getElementById("return_button").addEventListener("click", function(){
  lowerReview();
})

function slideUp(){
  //if slide 4 is displayed - do nothing
  if (slide === 3){
    return
  }
  else {
    slide += 1;
    changeDisplays(displays, slide);
  }
}

function slideDown(){
  //if slide 1 is displayed - do nothing
  if (slide === 0){
    return
  }
  else {
    slide -= 1;
    changeDisplays(displays, slide);
  }
}

function changeDisplay(array, slide_to_display){
  //set all elements not index = slide_to_display to display: none
  //element with index slide_to_display is set to index: block

  for (element of array){
    if(array.indexOf(element)!= slide_to_display){
      document.getElementById(element).style.display = "none";
    }
    else {
      document.getElementById(element).style.display = "block";
    }
  }
}

function changeDisplays(displays_array, slide_to_display){
  for (i=0;i<displays_array.length;i++){
    changeDisplay(displays_array[i], slide_to_display);
  }

}

const mediaMobileLandscape = window.matchMedia("(min-width: 320px) and (max-width: 813px) and (orientation: landscape)");
const tabletNavbar = window.matchMedia("(min-width: 501px)");

function raiseReview(){
  if (tabletNavbar.matches){
    document.getElementById("slider").style.top = "100px";
  }
  else {
    document.getElementById("slider").style.top = "80px";
  }

  document.getElementById("slider").style.transition = "all 1s";
  document.getElementsByTagName("body")[0].style.overflow = "visible";
  document.getElementsByTagName("html")[0].style.overflow = "visible";
}

function lowerReview(){
  if (mediaMobileLandscape.matches){
    document.getElementById("slider").style.top = "250vh";
  }
  else {
    document.getElementById("slider").style.top = "120vh";
  }
  document.getElementById("slider").style.transition = "all 1s";
  document.getElementsByTagName("body")[0].style.overflow = "visible";
  document.getElementsByTagName("html")[0].style.overflow = "visible";
}
