//this function will resize the .star_row
//of every .shoe_card upon DOM load to better format the slip_card_resize
//less stars = smaller width - this will help center the stars
//width is wide enough in CSS for users that have JS disabled

//this function returns an array of all .shoe_card elements
function retrieveCards(){
  shoe_cards = document.getElementsByClassName("shoe_card");
  return shoe_cards;
};

//function returns an array with # of review_star elements
//array index matches to the retrieveCards() function
function retrieveStarsPerCard(card_array){
  var i;
  var stars_array = [];
  for (i=0; i<card_array.length; i++){

    //an array of star elements is returned for every .shoe_card passed to the function
    stars = card_array[i].getElementsByClassName("review_star");

    //the # of stars is equal to the length of the array
    number_of_stars = stars.length;

    //# of stars is appended to the stars_array
    stars_array.push(stars.length);
  };
  return stars_array;
};

//function which tests the individual values of stars_array and returns the appropriate width
//number_of_stars contains a list of integer values equal to the # of stars in the card with the matching index
//this function returns an array with the new width values matching to index of shoe_cards
function determineNewWidths(number_of_stars){
  var i;
  var widths_array = [];
  //looping through number of stars array
  //append width to new array
  for (i=0; i<number_of_stars.length;i++){
    var total = number_of_stars[i];
    //if total = 1 width = 10%
    //triple equals is used to test for absolute equality
    if (total === 1){
      widths_array.push("10%");
    }
    //if total = 2 width = 22%
    else if (total === 2) {
      widths_array.push("22%");
    }
    //if total = 3 width = 35%
    else if (total === 3) {
      widths_array.push("35%");
    }
    //if total = 4 width = 50%
    else if (total === 4) {
      widths_array.push("50%");
    }
    //if total = 5 width = 70%
    //or - worst case 70% will format it if anything breaks
    else {
      widths_array.push("70%")
    }
  };
  return widths_array;
};


//elements array is only used to target the element for adding the new style
//widths array contains appropriate widths per index matching to elements array

function resizeCardRow(elements_array, widths_array){
  //loop over elements array and change style width for that elements .star_row
  //indexes of both arrays match for the approrpriate value
  var i;
  //array.prototype.slice.call is used to turn the html collection into an array of elements
  var star_row = Array.prototype.slice.call(document.getElementsByClassName("star_row"));
  //star row needs to be populated with the star_rows from elements_array
  //for (i=0;i<elements_array.length;i++){
    //star_row.push(elements_array[i].getElementsByClassName("star_row"));
  //};

  for (i=0;i<star_row.length;i++){
    star_row[i].style.width = widths_array[i];
  }
};


//THERE WAS NOT POINT BRINGING #SHOE_GRID INTO THE EQUATION WHEN YOU
//CAN JUST TARGET .STAR_ROW DIRECTLY AS LONG AS THE CLASS REMAINS EXCLUSIVE TO
//ELEMENTS OF THAT TYPE
//getclassname on .star row returns an html collection regardless of how its found
//save yourself the headache and just target it directly instead of using your silly
//work around

shoe_cards = retrieveCards();
//number_of_stars is an array
number_of_stars = retrieveStarsPerCard(shoe_cards);
new_widths = determineNewWidths(number_of_stars);
resizeCardRow(shoe_cards, new_widths);
