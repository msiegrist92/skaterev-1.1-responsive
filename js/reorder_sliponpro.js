///if DOM is loaded, run function init
document.addEventListener('DOMContentLoaded', init);
///declare function init with no arguments
function init(){
  ///matchMedia method detects the size of the screen
  ///let creates a variable that can be referenced from the same block {}
  let query = window.matchMedia("(max-width: 850px)");
  ///if the window is smaller than 850px
  ///or to say, if the query returns a match for < 850px
  if(query.matches){
    ///if the screen is smaller than 850px wide
    ///constants declared for altering DOM
    const finalP = document.querySelector('#final_p');
    const leftIMG = document.querySelector('#left_img');
    const rightP = document.querySelector('#right_p');
    const body = document.querySelector('body');

    ///elements must be referenced by their parents,
    ///leftIMG is a child element of the parent element body
    ///#left_img in inserted before final_p
    ///within parent element body -> insert #leftIMG before #final_p
    body.insertBefore(leftIMG, final_p);
  }

  else{
    ///if screen is wider than 850, the DOM does not need to be altered
  }
}
